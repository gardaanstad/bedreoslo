import Link from 'next/link';
import { ReactNode } from 'react';

interface TileProps {
  href?: string;
  children: ReactNode;
  className?: string;
  size?: 'default' | 'large';
  isGroup?: boolean;
}

export default function Tile({ href, children, className = '', size = 'default', isGroup = true }: TileProps) {
  const baseClasses = 'border border-[#2b2b2b]/20 dark:border-[#f5f1e8]/10 bg-[#efece5] dark:bg-black/20';
  const sizeClasses = {
    default: 'p-6',
    large: 'p-8'
  };
  
  const content = (
    <div className={`${baseClasses} ${sizeClasses[size]} ${isGroup ? 'group' : ''} block ${className}`}>
      {children}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
} 