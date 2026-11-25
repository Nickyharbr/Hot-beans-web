import { Layers } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

export default function Company() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Section Header Anchor */}
      <SectionHeader 
        title="Company Architecture" 
        subtitle="Our mission, vision, and operational vector" 
        icon={Layers} 
      />
      
      {/* Master Content Glass Panel Layout */}
      <div className="glass-panel p-8 md:p-12 lg:p-16 rounded-xl">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Left Side: Narrative Description Column */}
          <div>
            <h3 className="text-2xl font-display text-white mb-6 uppercase tracking-widest">
              Who We Are
            </h3>
            <div className="space-y-6 text-white/60 leading-relaxed font-light">
              <p>
                Hot Beans Web is an innovative web development company known for pushing the boundaries of interactive design and web solutions, we produce high-impact platforms for clients that have high levels of engagement.
              </p>
              <p>
                Our internal culture is built upon continuous learning, collaboration, and an obsession with optimized performance. We are currently searching for highly motivated trainee web developers to integrate into our workflows.
              </p>
            </div>
          </div>
          
          {/* Right Side: Performance stats grid */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "Founded", value: "2007" },
              { label: "Active Clients", value: "42+" },
              { label: "Tech Stack", value: "Modern" },
              { label: "Status", value: "Hiring" },
            ].map((stat, i) => (
              <div 
                key={i} 
                className="border border-white/10 bg-white/5 p-6 rounded-lg flex flex-col justify-center items-center text-center hover:bg-white/10 transition-colors"
              >
                <div className="text-3xl font-display text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-white/40">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}