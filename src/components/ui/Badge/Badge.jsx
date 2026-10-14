// This component renders the pill-style announcement and status labels used in the hero and product cards.
// Its copy is stored in `src/constants/data.js`, while appearance is controlled by the token palette in `src/constants/theme.js`.
// To update the pill color, border, or typography, tweak the class list in this file.
export function Badge({ children, className = '' }) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-[#292d30] bg-[#050505] px-3 py-1.5 text-[13px] font-medium text-[#f0f0f0] ${className}`}
    >
      {children}
    </div>
  );
}

export default Badge;
