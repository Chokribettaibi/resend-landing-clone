// This component renders the primary call-to-action button used throughout the landing page.
// Its labels and styles are controlled by the props passed in from the section components and the token palette in `src/constants/theme.js`.
// To change the button radius or border treatment, update the `variantClasses` object in this file.
import { motion } from 'framer-motion';

const variantClasses = {
  primary: 'border border-[#292d30] bg-[#ffffff] text-[#000000] hover:border-[#464a4d] hover:bg-[#f5f5f5]',
  secondary: 'border border-[#292d30] bg-transparent text-[#f0f0f0] hover:border-[#464a4d] hover:bg-[#111111]',
  ghost: 'border border-[#292d30] bg-transparent text-[#f0f0f0] hover:border-[#464a4d] hover:bg-[#111111]'
};

export function Button({ children, variant = 'primary', className = '', as = 'button', ...props }) {
  const Component = motion[as] || motion.button;

  return (
    <Component
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center rounded-[6px] px-5 py-2.5 text-[14px] font-medium leading-none transition-all duration-150 ease-out ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Button;
