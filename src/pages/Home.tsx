import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section className="relative min-h-[80vh] flex items-center px-6 -mt-10">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 relative z-10">
        {/* Left Column: Main text introduction */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 bg-white/5 rounded-full text-xs tracking-widest uppercase text-white/60 mb-6 w-fit">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" /> Actively Recruiting Developers
          </div>
          <h1 className="text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white tracking-tighter leading-none mb-6">
            SHAPE THE <span className="text-white/30 italic">DIGITAL</span> VOID.
          </h1>
          <p className="text-lg text-white/50 mb-10 max-w-xl font-light leading-relaxed">
            We are a premier web development collective engineering visceral, high-impact digital experiences. Join our team of elite developers and help us build the future of the internet.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/apply" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-white/90 transition-colors flex items-center gap-3">
              Join the Team <ChevronRight className="w-5 h-5" />
            </Link>
            <Link to="/careers" className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:border-white transition-colors">
              View Requirements
            </Link>
          </div>
        </motion.div>

        {/* Right Column: Visual Container Layer */}
        <motion.div 
          style={{ y, opacity }}
          className="hidden lg:flex relative items-center justify-center"
        >
          <div className="relative w-full aspect-[4/5] max-w-lg glass-panel rounded-xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
            <img 
              src="/mascot.png" 
              alt="Hot beans web mascot" 
              className="w-full h-full object-cover filter grayscale opacity-60 contrast-125 group-hover:scale-105 transition-transform duration-1000"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = document.getElementById('mascot-fallback');
                if (fallback) fallback.classList.remove('hidden');
              }}
            />
            <div id="mascot-fallback" className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-20 bg-black/60 hidden border border-white/20">
                <p className="text-white text-sm tracking-widest mb-2 font-bold uppercase">Missing Graphic</p>
                <p className="text-white/60 text-xs">Unable to find / load image sorry! <code className="bg-white/10 px-1 rounded text-white font-mono">mascot.png</code>!</p>
            </div>

            {/* Interactive Hot Spots */}
            <div className="absolute top-[30%] left-[45%] w-3 h-3 bg-white/80 rounded-full animate-ping z-30 pointer-events-none" />
            <div className="absolute top-[30%] left-[45%] w-3 h-3 bg-white rounded-full z-30 cursor-crosshair group/spot">
              <div className="absolute left-6 top-1/2 -translate-y-1/2 w-max bg-black/90 text-white px-3 py-2 text-xs uppercase tracking-widest rounded opacity-0 group-hover/spot:opacity-100 transition-opacity whitespace-nowrap border border-white/20 pointer-events-none">
                This is are Mascot! 
              </div>
            </div>
            
            <div className="absolute top-[60%] right-[30%] w-3 h-3 bg-white/80 rounded-full animate-ping z-30 pointer-events-none" />
            <div className="absolute top-[60%] right-[30%] w-3 h-3 bg-white rounded-full z-30 cursor-crosshair group/spot">
              <div className="absolute right-6 top-1/2 -translate-y-1/2 w-max bg-black/90 text-white px-3 py-2 text-xs uppercase tracking-widest rounded opacity-0 group-hover/spot:opacity-100 transition-opacity whitespace-nowrap border border-white/20 pointer-events-none">
                They would love you to join!
              </div>
            </div>

            <div className="absolute bottom-8 text-center w-full z-20 px-8">
              <div className="text-lg uppercase tracking-[0.3em] text-white">Entity_01</div>
            </div>
            
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/50 z-20" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/50 z-20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}