interface ReadMoreLinkProps {
  text?: string;
  className?: string;
}

export default function ReadMoreLink({ text = 'Les mer', className = '' }: ReadMoreLinkProps) {
  return (
    <div className={`flex items-center text-[#2b2b2b] dark:text-[#f5f1e8] opacity-70 group-hover:opacity-100 ${className}`}>
      <span className="text-sm">{text}</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </div>
  );
} 