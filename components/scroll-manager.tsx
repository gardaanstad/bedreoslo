'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useLayoutEffect, useRef } from 'react';

let pendingScroll: number | null = null;

function getNavbarProgress(): number {
  const sticky = document.querySelector('[data-navbar-sticky]');
  const brand = document.querySelector('[data-navbar-brand]');
  if (!sticky || !brand) return 0;
  const stickyRect = sticky.getBoundingClientRect();
  const brandRect = brand.getBoundingClientRect();
  if (brandRect.height === 0) return 0;
  return Math.max(
    0,
    Math.min(1, (stickyRect.bottom - brandRect.top) / brandRect.height),
  );
}

function getTransitionEndScroll(): number {
  const sticky = document.querySelector('[data-navbar-sticky]');
  const brand = document.querySelector('[data-navbar-brand]');
  if (!sticky || !brand) return 0;
  const stickyH = sticky.getBoundingClientRect().height;
  const brandR = brand.getBoundingClientRect();
  return Math.ceil(brandR.top + window.scrollY + brandR.height - stickyH);
}

function scrollInstant(top: number) {
  document.documentElement.style.scrollBehavior = 'auto';
  window.scrollTo(0, top);
  requestAnimationFrame(() => {
    document.documentElement.style.scrollBehavior = '';
  });
}

export default function ScrollManager() {
  const router = useRouter();
  const pathname = usePathname();
  const pathnameRef = useRef(pathname);

  useEffect(() => {
    pathnameRef.current = pathname;
  }, [pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as Element).closest?.('a');
      if (!anchor) return;

      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0)
        return;
      if (anchor.target === '_blank' || anchor.hasAttribute('download'))
        return;

      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('/') || href.startsWith('//')) return;
      if (href.includes('#')) return;

      e.preventDefault();

      const p = getNavbarProgress();
      const scrollTarget = p > 0.5 ? getTransitionEndScroll() : 0;
      const targetPathname = new URL(href, window.location.origin).pathname;

      if (pathnameRef.current === targetPathname) {
        scrollInstant(scrollTarget);
      } else {
        pendingScroll = scrollTarget;
        router.push(href, { scroll: false });
      }
    };

    document.addEventListener('click', handleClick, { capture: true });
    return () =>
      document.removeEventListener('click', handleClick, { capture: true });
  }, [router]);

  useLayoutEffect(() => {
    if (pendingScroll === null) return;
    const target = pendingScroll;
    pendingScroll = null;
    scrollInstant(target);
  }, [pathname]);

  return null;
}
