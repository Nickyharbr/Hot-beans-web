import { Users } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const traineesData = [
  {
    name: "Bandit the Cat",
    role: "Frontend Developer Trainee",
    bio: "Specializing in advanced CSS layout structures, micro-interactions, and reactive motion systems. Engineering pixel-perfect interfaces with high semantic fidelity.",
    specialty: "UI/UX & Motion",
    node: "NODE_01_EU",
    image: "/bandit_the_cat.jpg"
  },
  {
    name: "Cheese Burger the Cat",
    role: "Backend Architect Trainee",
    bio: "Focused on low-latency data streams, robust API routing configurations, and cloud-native database normalization techniques. Optimizing system performance endpoints.",
    specialty: "Data Pipeline & Infrastructure",
    node: "NODE_02_AS",
    image: "/cheese_burger_the_cat.jpg"
  },
  {
    name: "Luna the Cat",
    role: "Full-Stack Engineer Trainee",
    bio: "Bridging the gap between reactive frontend state mechanics and modular data stores. Building end-to-end full-stack network nodes with comprehensive integration test maps.",
    specialty: "Systems Integration",
    node: "NODE_03_AM",
    image: "/luna_the_cat.jpg"
  }
];

export default function Trainees() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Insert SectionHeader */}
      <SectionHeader 
        title="Trainee Profiles" 
        subtitle="SYS_TALENT_REGISTRY // ACTIVE COHORT METRICS" 
        icon={Users} 
      />

      {/* Build 3-column grid container */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {traineesData.map((trainee, i) => (
          /*  Trainee Cards */
          <div 
            key={i} 
            className="glass-panel border border-white/10 bg-black/30 rounded-xl overflow-hidden flex flex-col group hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
          >
           
            <div className="relative w-full aspect-video bg-white/5 border-b border-white/10 flex flex-col items-center justify-center p-6 overflow-hidden">
              <img 
                src={trainee.image} 
                alt={trainee.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 z-10" />
              <div className="text-[10px] font-mono tracking-widest text-white/60 uppercase relative z-20">
                {trainee.node} // {trainee.specialty}
              </div>
              
              {/* crosshairs */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-white/30 z-20" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-white/30 z-20" />
            </div>

            {/* Profile Content Layout Details */}
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-display font-bold text-white mb-1 uppercase tracking-wide group-hover:text-white/90 transition-colors">
                  {trainee.name}
                </h3>
                <div className="text-xs text-emerald-400 font-mono tracking-widest uppercase mb-4 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {trainee.role}
                </div>
                <p className="text-sm text-white/50 leading-relaxed font-light mb-6">
                  {trainee.bio}
                </p>
              </div>

              {/* Secure Network Link Paths */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/5 text-white/40">
                <a href="#" className="text-xs uppercase font-mono hover:text-white transition-colors">GitHub</a>
                <a href="#" className="text-xs uppercase font-mono hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-xs uppercase font-mono hover:text-white transition-colors">Portfolio</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}