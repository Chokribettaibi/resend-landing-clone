// This section renders the top navigation with a minimal ghost CTA layout.
// Its labels are supplied by `src/constants/data.js`; styling is kept token-based and easy to tweak.
// To change the nav spacing, button labels, or active states, edit the JSX and data file together.
import { ArrowUpRight } from 'lucide-react';
import { Button } from '../ui';
import { navItems } from '../../constants/data';

export function Navbar() {
  return (
    <header className="flex items-center justify-between border-b border-[#292d30] py-5">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-[8px] border border-[#292d30] bg-[#111111] text-[14px] font-semibold text-[#f0f0f0]">
          R
        </div>
        <span className="text-[15px] font-medium text-[#f0f0f0]">resend</span>
      </div>

      <nav className="hidden items-center gap-8 md:flex">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-[14px] text-[#a1a4a5] transition-colors hover:text-[#f0f0f0]"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <Button variant="secondary" className="hidden sm:inline-flex !px-4 !py-2.5">
          Sign in
        </Button>
        <Button variant="primary" className="!px-4 !py-2.5">
          <span>Get started</span>
          <ArrowUpRight size={15} className="ml-2" />
        </Button>
      </div>
    </header>
  );
}

export default Navbar;
