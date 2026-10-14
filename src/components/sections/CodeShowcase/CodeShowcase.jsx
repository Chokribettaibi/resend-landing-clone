// This section renders the code preview window and syntax-accent palette.
// Its content is sourced from `src/constants/data.js` to keep the example code easy to maintain.
// To change the terminal preview or code colors, update the `codeWindow` data object and the `span` color classes here.
import { codeWindow } from '../../../constants/data';

export function CodeShowcase() {
  return (
    <section className="py-8 md:py-12">
      <div className="overflow-hidden rounded-[16px] border border-[#292d30] bg-[#000000] p-5 md:p-7">
        <div className="mb-5 flex items-center gap-3">
          <div className="h-2.5 w-2.5 rounded-full bg-[#292d30]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#292d30]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#292d30]" />
          <span className="ml-3 font-mono text-[12px] text-[#a1a4a5]">{codeWindow.title}</span>
        </div>

        <div className="rounded-[16px] border border-[#292d30] bg-[#050505] p-4 font-mono text-[12px] leading-[1.8] text-[#f0f0f0] md:p-5 md:text-[13px]">
          {codeWindow.lines.map((line, index) => (
            <div key={`${line.content}-${index}`} className={`${line.color}`}>
              {line.content || ' '}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CodeShowcase;
