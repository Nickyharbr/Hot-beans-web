import { Briefcase, Terminal, Award } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

export default function Careers() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader
        title="Job Specifications"
        subtitle="SYS_RECRUITMENT_MANIFEST // ROLE_REQUIREMENTS"
        icon={Briefcase}
      />

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div className="glass-panel border border-white/10 bg-black/30 rounded-xl p-6 md:p-8 relative overflow-hidden group hover:border-white/20 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <Terminal className="w-5 h-5 text-emerald-400" />
            <h3 className="text-xl font-display font-bold text-white uppercase tracking-wider">Core Requirements</h3>
          </div>
          <ul className="space-y-4 text-sm text-white/60 font-light list-none">
            <li className="flex items-start gap-3">
              <span className="text-emerald-400 font-mono mt-0.5">01 //</span>
              <span>Solid baseline understanding of HTML5 syntax  and logical document flows.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-400 font-mono mt-0.5">02 //</span>
              <span>Ability to write clean, modular optimized layout styling using tools taht are utility-first CSS engines like Tailwind.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-400 font-mono mt-0.5">03 //</span>
              <span>Basic operational knowledge of asynchronous code processing, browser state machines, and API interactions.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-400 font-mono mt-0.5">04 //</span>
              <span>Strong problem-solving skills, determination, and a continuous intrest in learning and improving.</span>
            </li>
          </ul>
        </div>

        <div className="glass-panel border border-white/10 bg-black/30 rounded-xl p-6 md:p-8 relative overflow-hidden group hover:border-white/20 transition-all duration-300">
          <Award className="absolute -right-8 -bottom-8 w-44 h-44 text-white/2 pointer-events-none group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700" />
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <Award className="w-5 h-5 text-purple-400" />
            <h3 className="text-xl font-display font-bold text-white uppercase tracking-wider">Preferred Qualifications</h3>
          </div>
          <ul className="space-y-4 text-sm text-white/60 font-light list-none relative z-10">
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-mono mt-0.5">A //</span>
              <span>Prior experience in component-driven single-page application systems (React framework core preferred).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-mono mt-0.5">B //</span>
              <span>A comprehensive understanding of web accessibility layers, WCAG compilation validation guidelines, and semantic testing.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-mono mt-0.5">C //</span>
              <span>Familiarity with distributed version control systems, asynchronous branch merges, and collaborative PR reviews.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-mono mt-0.5">D //</span>
              <span>An a strong focus on user-experience details, transition easing, and polished frontend aesthetics.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 glass-panel border border-white/10 bg-black/20 rounded-xl p-6 md:p-8 overflow-x-auto">
        <div className="mb-6">
          <h3 className="text-xl font-display font-bold text-white uppercase tracking-wider mb-2">Technology Evaluation Matrix</h3>
          <p className="text-xs text-white/40 font-mono uppercase tracking-widest">SYS_BENCHMARK // TARGET_COMPETENCY_LEVELS</p>
        </div>
        <table className="min-w-full text-left text-sm text-white/70 border-separate border-spacing-y-3">
          <thead>
            <tr>
              <th className="pb-3 uppercase tracking-widest text-white/40">Category</th>
              <th className="pb-3 uppercase tracking-widest text-white/40">Level</th>
              <th className="pb-3 uppercase tracking-widest text-white/40">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white/5 rounded-xl">
              <td className="py-4 px-3">Front-End</td>
              <td className="py-4 px-3">Intermediate</td>
              <td className="py-4 px-3">Design systems, responsive grids, and interactive UI polish.</td>
            </tr>
            <tr className="bg-white/5 rounded-xl">
              <td className="py-4 px-3">Back-End</td>
              <td className="py-4 px-3">Junior</td>
              <td className="py-4 px-3">API development, data flow stability, and service orchestration.</td>
            </tr>
            <tr className="bg-white/5 rounded-xl">
              <td className="py-4 px-3">DevOps</td>
              <td className="py-4 px-3">Foundational</td>
              <td className="py-4 px-3">Build tooling, deployment flow, and environment consistency.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
