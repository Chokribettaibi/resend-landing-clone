// This section contains customer quote cards and social proof text.
// Each quote and person field is stored in `src/constants/data.js` for easier future updates.
// To change card layout or typography, edit the markup and the `testimonials` data together.
import { Card } from '../../ui';
import { testimonials } from '../../../constants/data';

export function Testimonials() {
  return (
    <section className="py-16 md:py-20">
      <div className="mb-8 max-w-[760px]">
        <p className="mb-3 text-[14px] font-medium uppercase tracking-[0.12em] text-[#a1a4a5]">
          Customers
        </p>
        <h2 className="font-sans text-[40px] leading-[1.1] tracking-[-0.05em] text-[#f0f0f0] md:text-[56px]">
          Teams use Resend to ship emails without the drama.
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {testimonials.map((item) => (
          <Card key={item.person} className="flex h-full flex-col p-5">
            <div className="mb-6 text-[16px] leading-[1.7] text-[#f0f0f0]">“{item.quote}”</div>
            <div className="mt-auto border-t border-[#292d30] pt-4">
              <div className="text-[15px] font-medium text-[#f0f0f0]">{item.person}</div>
              <div className="mt-1 text-[13px] text-[#a1a4a5]">{item.role}</div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
