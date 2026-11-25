import { Briefcase, Terminal, Award } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

export default function Careers() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Step 57: Insert SectionHeader */}
      <SectionHeader
        title="Job Specifications"
        subtitle="SYS_RECRUITMENT_MANIFEST // ROLE_REQUIREMENTS"
        icon={Briefcase}
      />

      {/* Step 58: Build top split-grid layout */}
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        
        {/* Step 59: "Requirements" Box with bulleted list */}
        <div className="glass-panel border border-white/10 bg-black/30 rounded-xl p-6 md:p-8 relative overflow-hidden group hover:border-white/20 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <Terminal className="w-5 h-5 text-emerald-400" />
            <h3 className="text-xl font-display font-bold text-white uppercase tracking-wider">Core Requirements</h3>
          </div>
          <ul className="space-y-4 text-sm text-white/60 font-light list-none">
            <li className="flex items-start gap-3">
              <span className="text-emerald-400 font-mono mt-0.5">01 //</span>
              <span>Solid baseline comprehension of modern semantic HTML5 markup architectures and logical document flows.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-400 font-mono mt-0.5">02 //</span>
              <span>Ability to write clean, modular, and optimized layout styling utilizing utility-first CSS engines like Tailwind.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-400 font-mono mt-0.5">03 //</span>
              <span>Basic operational knowledge of asynchronous code processing, browser state machines, and API interactions.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-400 font-mono mt-0.5">04 //</span>
              <span>Grit, raw determination, and a continuous learning trajectory geared towards full system architectural mastery.</span>
            </li>
          </ul>
        </div>

        {/* Step 60: "Qualifications" Box with background icon and bulleted list */}
        <div className="glass-panel border border-white/10 bg-black/30 rounded-xl p-6 md:p-8 relative overflow-hidden group hover:border-white/20 transition-all duration-300">
          
          {/* Large background decorative vector watermark icon */}
          <Award className="absolute -right-8 -bottom-8 w-44 h-44 text-white/2 pointer-events-none group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700" />

          <div className="flex items-center gap-3 mb-6">
            <Award className="w-5 h-5 text-purple-400" />
            <h3 className="text-xl font-display font-bold text-white uppercase tracking-wider">Preferred Qualifications</h3>
          </div>
          <ul className="space-y-4 text-sm text-white/60 font-light list-none relative z-10">
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-mono mt-0.5">A //</span>
              <span>Prior exposure to component-driven single-page application systems (React framework core preferred).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-mono mt-0.5">B //</span>
              <span>Comprehensive understanding of web accessibility layers, WCAG compilation validation guidelines, and semantic testing.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-mono mt-0.5">C //</span>
              <span>Familiarity with distributed version control systems, asynchronous branch merges, and collaborative PR reviews.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-mono mt-0.5">D //</span>
              <span>An innate eye for granular user-experience details, transition easing metrics, and polished frontend aesthetics.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Step 61: "Technology Matrix" table container */}
      <div className="mt-12 glass-panel border border-white/10 bg-black/20 rounded-xl p-6 md:p-8 overflow-x-auto">
        <div className="mb-6">
          <h3 className="text-xl font-display font-bold text-white uppercase tracking-wider mb-2">Technology Evaluation Matrix</h3>
          <p className="text-xs text-white/40 font-mono uppercase tracking-widest">SYS_BENCHMARK // TARGET_COMPETENCY_LEVELS</p>
        </div>

        <table className="w-full text-left border-collapse min-w-[650px]">
          {/* Step 62: Add table header row */}
          <thead>
            <tr className="border-b border-white/10 text-white/40 text-xs font-mono tracking-widest uppercase">
              <th className="pb-4 font-medium">Technology Stack</th>
              <th className="pb-4 font-medium">Functional Domain Category</th>
              <th className="pb-4 font-medium">Minimum Threshold Level</th>
              <th className="pb-4 font-medium text-right">Pipeline Importance</th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-white/5 text-white/70 font-light">
            {/* Step 63: HTML5/CSS3 row data */}
            <tr className="hover:bg-white/2 transition-colors duration-200">
              <td className="py-4 font-medium text-white font-mono">HTML5 / CSS3 Engine</td>
              <td className="py-4 text-white/60">Semantic Layout Architecture & Styling Structures</td>
              <td className="py-4">
                <span className="px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono rounded">INTERMEDIATE</span>
              </td>
              <td className="py-4 text-right text-emerald-400 font-mono font-medium">CRITICAL</td>
            </tr>
            {/* Step 64: JavaScript row data */}
            <tr className="hover:bg-white/2 transition-colors duration-200">
              <td className="py-4 font-medium text-white font-mono">JavaScript / ECMAScript (ES6+)</td>
              <td className="py-4 text-white/60">Core Functional Logic & Asynchronous Event Processing</td>
              <td className="py-4">
                <span className="px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono rounded">FOUNDATIONAL</span>
              </td>
              <td className="py-4 text-right text-emerald-400 font-mono font-medium">CRITICAL</td>
            </tr>
            {/* Step 65: React/Vue row data */}
            <tr className="hover:bg-white/2 transition-colors duration-200">
              <td className="py-4 font-medium text-white font-mono">React / Single-Page Contexts</td>
              <td className="py-4 text-white/60">Component Design Patterns & Global State Hubs</td>
              <td className="py-4">
                <span className="px-2.5 py-0.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono rounded">NOVICE / TRAINEE</span>
              </td>
              <td className="py-4 text-right text-amber-400 font-mono font-medium">HIGH_PRIORITY</td>
            </tr>
            {/* Step 66: Accessibility row data */}
            <tr className="hover:bg-white/2 transition-colors duration-200">
              <td className="py-4 font-medium text-white font-mono">WCAG Standards / ARIA Architecture</td>
              <td className="py-4 text-white/60">Semantic Compliance Auditing & Device Adaptation</td>
              <td className="py-4">
                <span className="px-2.5 py-0.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono rounded">ENTRY_LEVEL</span>
              </td>
              <td className="py-4 text-right text-white/40 font-mono font-medium">DESIRABLE</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}