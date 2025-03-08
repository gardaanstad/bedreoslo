interface TileTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function TileTitle({ children, className = '' }: TileTitleProps) {
  return (
    <span className={`block text-sm text-[#2b2b2b] dark:text-[#f5f1e8]/70 uppercase tracking-wider mb-1 font-medium ${className}`}>
      {children}
    </span>
  );
} 