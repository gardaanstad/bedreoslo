'use client';

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback, useRef } from "react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [supportsHover, setSupportsHover] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  useEffect(() => {
    setMounted(true);
    // Check if the device supports hover
    setSupportsHover(window.matchMedia('(hover: hover)').matches);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const menuItems = [
    { name: "Om oss", href: "/om" },
    { name: "Nyheter", href: "/nyheter" },
    { name: "Politikk", href: "/politikk" },
    { name: "Bli medlem", href: "/sign-in" }
  ];

  const itemVariants = {
    closed: { opacity: 0, x: -8 },
    open: { opacity: 1, x: 0 }
  };

  const menuVariants = {
    closed: {
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    open: {
      height: "auto",
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.05
      }
    }
  };

  return (
    <div className="w-full fixed top-0 z-50 flex justify-center px-4 py-6">
      <nav className="relative w-full max-w-7xl">
        <motion.div 
          className="relative w-full bg-[#1a472a] dark:bg-[#1a472a] border border-[#1a472a] dark:border-[#f5f1e8]/10 shadow-lg"
        >
          {/* Main Navbar Content */}
          <div className="relative px-6 py-4 flex items-center justify-between">
            <Link 
              href="/" 
              className="font-serif text-white text-xl tracking-tight hover:underline"
            >
              Bedre Oslo
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-3">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    relative px-4 py-2 text-sm font-medium tracking-wide
                    ${pathname === item.href
                      ? 'bg-white/20 text-white'
                      : 'text-white hover:bg-white hover:text-[#1a472a]'
                    }
                  `}
                >
                  {item.name}
                </Link>
              ))}

              {/* Theme toggle with placeholder */}
              {!mounted ? (
                <div className="w-9 h-9 p-2 text-[#f5f1e8]/50">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                </div>
              ) : (
                <motion.button
                  onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                  className="p-2 hover:@media(hover:hover):bg-white/20 text-white"
                  aria-label="Toggle theme"
                  whileHover={supportsHover ? { scale: 1.15 } : undefined}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    animate={{
                      rotate: theme === 'dark' ? 180 : 0,
                    }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {theme === 'light' ? (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <motion.path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <motion.path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    )}
                  </motion.div>
                </motion.button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              {/* Mobile theme toggle with placeholder */}
              {!mounted ? (
                <div className="w-9 h-9 p-2 text-[#f5f1e8]/50">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                </div>
              ) : (
                <motion.button
                  onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                  className="p-2 hover:@media(hover:hover):bg-white/20 text-white"
                  aria-label="Toggle theme"
                  whileHover={supportsHover ? { scale: 1.05 } : undefined}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    animate={{
                      rotate: theme === 'dark' ? 180 : 0,
                    }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {theme === 'light' ? (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <motion.path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <motion.path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    )}
                  </motion.div>
                </motion.button>
              )}
              <motion.button
                ref={buttonRef}
                onClick={toggleMenu}
                className="relative w-10 h-10 flex items-center justify-center hover:@media(hover:hover):bg-white/20 will-change-transform"
                whileHover={supportsHover ? { scale: 1.05 } : undefined}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
                aria-expanded={isOpen}
                aria-label="Toggle menu"
                layout="position"
              >
                <div className="relative w-5 h-4 flex flex-col justify-between will-change-transform">
                  <motion.div
                    animate={{
                      rotate: isOpen ? 45 : 0,
                      translateY: isOpen ? 7 : 0
                    }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    style={{ height: '1.5px' }}
                    className="absolute top-0 left-0 w-full bg-white transform-gpu origin-center will-change-transform"
                  />
                  <motion.div
                    animate={{
                      opacity: isOpen ? 0 : 1
                    }}
                    transition={{ duration: 0.1 }}
                    style={{ height: '1.5px' }}
                    className="absolute top-[7px] left-0 w-full bg-white transform-gpu will-change-opacity"
                  />
                  <motion.div
                    animate={{
                      rotate: isOpen ? -45 : 0,
                      translateY: isOpen ? -7 : 0
                    }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    style={{ height: '1.5px' }}
                    className="absolute bottom-0 left-0 w-full bg-white transform-gpu origin-center will-change-transform"
                  />
                </div>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence mode="sync">
            {isOpen && (
              <motion.div
                ref={menuRef}
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className="md:hidden overflow-hidden will-change-[height,transform]"
                layout="position"
              >
                <motion.div 
                  className="border-t border-white/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="px-4 pb-4 pt-3 space-y-1">
                    {menuItems.map((item) => (
                      <motion.div
                        key={item.name}
                        variants={itemVariants}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`
                            relative px-4 py-2 text-sm font-medium tracking-wide
                            transition-all duration-300 block
                            ${pathname === item.href
                              ? 'bg-white/20 text-white'
                              : 'text-white hover:@media(hover:hover):bg-white/20 hover:@media(hover:hover):text-white'
                            }
                          `}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </nav>
    </div>
  );
} 