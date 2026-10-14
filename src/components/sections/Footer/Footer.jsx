// This section renders the minimal two-link footer used on the landing page.
// The footer labels are stored in `src/constants/data.js` to avoid hardcoded link text in the layout.
// To update legal copy or links, edit the `footerLinks` array in the data file.
import { footerLinks } from '../../../constants/data';

export function Footer() {
  return (
    <footer className="border-t border-[#292d30] py-8">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="text-[14px] text-[#a1a4a5]">© 2025 Resend</div>
        <div className="flex items-center gap-6 text-[14px] text-[#a1a4a5]">
          {footerLinks.map((item) => (
            <a key={item.label} href={item.href} className="transition-colors hover:text-[#f0f0f0]">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
