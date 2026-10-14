// This component provides the base card shell used for feature and testimonial panels.
// It keeps the border-only surface treatment consistent without introducing drop shadows.
// To alter card spacing or hover border behavior, adjust the class list and `transition` values here.
export function Card({ children, className = '', as: Component = 'div' }) {
  return (
    <Component
      className={`rounded-[16px] border border-[#292d30] bg-[#000000] transition-all duration-150 ease-out hover:border-[#464a4d] ${className}`}
    >
      {children}
    </Component>
  );
}

export default Card;
