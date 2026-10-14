// This section displays the monochrome client logos in a clean grid without card wrappers.
// All names are sourced from `src/constants/data.js` and styled with a muted grayscale treatment.
// To update the logo names or spacing, edit the `customerLogos` array in the data file.
import { customerLogos } from '../../../constants/data';

export function LogosBar() {
  return (
    <section className="py-8 md:py-12">
      <div className="grid grid-cols-2 gap-y-8 text-center text-[14px] font-medium tracking-[0.12em] text-[#a1a4a5] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
        {customerLogos.map((name) => (
          <div key={name} className="opacity-85 transition-opacity duration-150 hover:opacity-100">
            {name}
          </div>
        ))}
      </div>
    </section>
  );
}

export default LogosBar;
