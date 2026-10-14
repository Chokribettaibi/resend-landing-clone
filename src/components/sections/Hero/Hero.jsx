// This section renders the hero editorial copy and the 3D cube viewport.
// The marketing text is sourced from `src/constants/data.js`, while the WebGL cube itself lives in `src/components/3d/HeroCube.jsx`.
// To change headline copy, CTA text, or the cube rotation settings, edit the data file or the cube component directly.
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { HeroCube } from '../../3d';
import { Badge, Button } from '../../ui';
import { hero } from '../../../constants/data';

export function Hero() {
  return (
    <section className="grid items-center gap-10 py-12 md:grid-cols-[1.05fr_0.95fr] md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-[620px]"
      >
        <Badge className="mb-6">
          <span className="text-[#f0f0f0]">{hero.badge}</span>
        </Badge>

        <h1 className="font-serif text-[56px] leading-[1] tracking-[-0.01em] text-[#ffffff] md:text-[96px]">
          {hero.headline}
        </h1>

        <p className="mt-6 max-w-[520px] text-[18px] leading-[1.6] text-[#a1a4a5]">
          {hero.subtitle}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button variant="primary" className="!px-5 !py-3">
            {hero.primaryCta}
          </Button>
          <Button variant="secondary" className="!px-5 !py-3">
            {hero.secondaryCta}
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full"
      >
        <HeroCube />
      </motion.div>
    </section>
  );
}

export default Hero;
