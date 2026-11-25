import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ZoomIn, ZoomOut, Volume2, X, ExternalLink } from 'lucide-react';

const Particles = () => {
  const [elements, setElements] = useState<{ id: number; top: string; left: string; size: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    const arr = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 15,
    }));
    setElements(arr);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30 mix-blend-screen">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute bg-white rounded-full shadow-[0_0_10px_3px_rgba(255,255,255,0.7)]"
          style={{ width: el.size, height: el.size, top: el.top, left: el.left }}
          animate={{
            y: ['0vh', '-100vh'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

const AccessibilityHelper = () => {
  const [zoom, setZoom] = useState(100);
  
  useEffect(() => {
    document.documentElement.style.fontSize = `${zoom}%`;
  }, [zoom]);

  // The Text-to-Speech Engine Function
  const speak = () => {
    const utterance = new SpeechSynthesisUtterance("Hello, welcome to Hot Beans Web recruitment. We are a premier web development company engineering visceral digital experiences. Currently recruiting frontend, backend, and fullstack trainees. Navigate below to view requirements and apply.");
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 glass-panel p-2 flex flex-col gap-2 rounded-xl border border-white/20">
      <button aria-label="Increase Text Size" onClick={() => setZoom(z => Math.min(z + 10, 150))} className="w-10 h-10 flex items-center justify-center text-white bg-black/50 rounded-lg hover:bg-white/20 transition-colors" title="Zoom In (Accessibility)">
        <ZoomIn className="w-5 h-5" />
      </button>
      <button aria-label="Decrease Text Size" onClick={() => setZoom(z => Math.max(z - 10, 50))} className="w-10 h-10 flex items-center justify-center text-white bg-black/50 rounded-lg hover:bg-white/20 transition-colors" title="Zoom Out (Accessibility)">
        <ZoomOut className="w-5 h-5" />
      </button>
      
      {/* Text-to-Speech Audio Button */}
      <button 
        aria-label="Read Page Summary Out Loud" 
        onClick={speak} 
        className="w-10 h-10 flex items-center justify-center text-white bg-black/50 rounded-lg hover:bg-white/20 transition-colors" 
        title="Text to Speech (Accessibility)"
      >
        <Volume2 className="w-5 h-5" />
      </button>

      <span className="text-[10px] text-white/40 uppercase tracking-widest text-center px-1 font-mono">{zoom}%</span>
    </div>
  )
}

export const Layout = () => {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen font-sans bg-[#050505] selection:bg-white/20 selection:text-white flex flex-col">
      {/* Background Effects */}
      <div className="noise-overlay" />
      <AccessibilityHelper />
      
      <AnimatePresence>
        {isTermsOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="glass-panel max-w-lg w-full p-8 rounded-xl relative"
            >
              <button onClick={() => setIsTermsOpen(false)} className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors" aria-label="Close Pop-up">
                <X className="w-6 h-6" />
              </button>
              <h3 className="text-2xl font-display uppercase tracking-widest text-white mb-4">Terms & Conditions</h3>
              <p className="text-white/70 font-light leading-relaxed mb-6 text-sm overflow-y-auto max-h-[60vh]">
                By submitting this form, you acknowledge that Hot Beans Web will process your application data for recruitment purposes exclusively under GDPR and W3C web specifications.<br /><br />
                These terms operate as a demonstration of Interactive pop-up components.
              </p>
              <button onClick={() => setIsTermsOpen(false)} className="px-6 py-3 bg-white text-black font-bold uppercase tracking-widest w-full hover:bg-white/80 transition-colors rounded">
                I Understand
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Particles />
      <div className="bg-glow bg-white/5 w-[800px] h-[800px] top-[-200px] left-[-200px]" />
      <div className="bg-glow bg-zinc-600/5 w-[600px] h-[600px] bottom-1/4 right-0" />

      {/* Navigation Header */}
      <header className="fixed top-0 w-full z-50 glass-panel border-x-0 border-t-0">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
          {/* Creating shape for logo */}
            <div className="w-10 h-10 bg-white flex items-center justify-center rounded-sm rotate-45 group-hover:rotate-90 transition-transform duration-500">
              <div className="w-4 h-4 bg-black -rotate-45 group-hover:-rotate-90 transition-transform duration-500" />
            </div>
            {/* The logo text */}
            <span className="text-xl font-display font-bold tracking-widest uppercase text-white">Hot Beans<span className="text-white/40">Web</span></span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase text-white/60">
            <Link to="/company" className="hover:text-white transition-colors duration-300">Company</Link>
            <Link to="/trainees" className="hover:text-white transition-colors duration-300">Trainees</Link>
            <Link to="/careers" className="hover:text-white transition-colors duration-300">Careers</Link>
            <Link to="/courses" className="hover:text-white transition-colors duration-300">Courses</Link>
            <Link to="/apply" className="px-5 py-2.5 border border-white/20 hover:bg-white hover:text-black hover:border-white transition-all duration-300">
              Apply Now
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 flex-grow pt-28 pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet context={{ setIsTermsOpen }} />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="mt-auto border-t border-white/10 glass-panel border-x-0 border-b-0 py-12 text-center text-white/40 tracking-widest text-xs uppercase z-20 relative flex flex-col items-center">
        <p>&copy; {new Date().getFullYear()} HOT BEANS WEB. ALL RIGHTS RESERVED.</p>
        <div className="flex flex-wrap justify-center items-center gap-6 mt-6 mb-4">
          <Link to="/company" className="hover:text-white transition-colors">Company</Link>
          <button onClick={() => setIsTermsOpen(true)} className="hover:text-white transition-colors outline-none text-left w-auto uppercase cursor-pointer" aria-haspopup="dialog">Terms</button>
          <a href="https://w3.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1" title="External link to W3C (World Wide Web Consortium)">W3C Standards <ExternalLink className="w-3 h-3" /></a>
        </div>
      </footer>
    </div>
  );
};