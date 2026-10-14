// This is the top-level orchestration component for the page.
// It imports all main sections and keeps the layout easy to extend for future content changes.
// To edit the page structure or reorder sections, update the JSX here and the data in `src/constants/data.js`.
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { CodeShowcase } from './components/sections/CodeShowcase';
import { LogosBar } from './components/sections/LogosBar';
import { Features } from './components/sections/Features';
import { Testimonials } from './components/sections/Testimonials';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#f0f0f0]">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <Navbar />
        <Hero />
        <CodeShowcase />
        <LogosBar />
        <Features />
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
}

export default App;
