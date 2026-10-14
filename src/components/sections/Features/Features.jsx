// This section contains the main feature grid and product highlight cards.
// Feature names and descriptions come from `src/constants/data.js` to keep the section easy to edit.
// To change card spacing, accent labels, or border hover states, update the card JSX and the data object together.
import { Card } from '../../ui';
import { features } from '../../../constants/data';

export function Features() {
  return (
    <section className="py-16 md:py-20">
      <div className="mb-8 max-w-[760px]">
        <p className="mb-3 text-[14px] font-medium uppercase tracking-[0.12em] text-[#a1a4a5]">
          Why teams switch
        </p>
        <h2 className="font-sans text-[40px] leading-[1.1] tracking-[-0.05em] text-[#f0f0f0] md:text-[56px]">
          Built for the systems your product already relies on.
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.title} className="p-5">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div className="h-2.5 w-2.5 rounded-full bg-[#3ad389]" />
              <span className="text-[11px] uppercase tracking-[0.12em] text-[#a1a4a5]">
                {feature.accent}
              </span>
            </div>
            <h3 className="mb-3 text-[22px] font-medium leading-[1.2] text-[#f0f0f0]">
              {feature.title}
            </h3>
            <p className="text-[15px] leading-[1.6] text-[#a1a4a5]">{feature.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Features;
