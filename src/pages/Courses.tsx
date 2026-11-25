import { BookOpen, ExternalLink, AlertTriangle } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const coursesData = [
  {
    name: "The Odin Project",
    type: "Free // Open Source",
    desc: "A comprehensive, full-stack open-source curriculum covering raw JavaScript, Node.js, and advanced system architecture pathways.",
    url: "https://www.theodinproject.com"
  },
  {
    name: "freeCodeCamp",
    type: "Free // Interactive",
    desc: "Interactive programming tracks spanning responsive web design frameworks, data structures, and accessible semantic documentation.",
    url: "https://www.freecodecamp.org"
  },
  {
    name: "Frontend Masters",
    type: "Premium // Deep-Dive",
    desc: "Advanced professional training modules targeting vanilla browser engines, asynchronous state operations, and engineering performance.",
    url: "https://frontendmasters.com"
  },
  {
    name: "Codecademy",
    type: "Free & Premium Tracks",
    desc: "Structured code-sandbox interactive loops designed to fast-track syntax vocabulary, object validation, and local Git operations.",
    url: "https://www.codecademy.com"
  }
];

export default function Courses() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Step 68: Insert SectionHeader */}
      <SectionHeader
        title="Dev Courses"
        subtitle="SYS_TRAINING_MODULES // SYLLABUS_RESOURCES"
        icon={BookOpen}
      />

      {/* Vertical list container */}
      <div className="flex flex-col gap-6 mt-12">
        {coursesData.map((course, i) => (
          /* External Link Blocks */
          <a
            key={i}
            href={course.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel border border-white/10 bg-black/30 p-6 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:border-white/20 hover:bg-white/5 transition-all duration-300"
          >
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-display font-bold text-white uppercase tracking-wider group-hover:text-white/90 transition-colors">
                  {course.name}
                </h3>
                <span className="text-[10px] font-mono tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                  {course.type}
                </span>
              </div>
              <p className="text-sm text-white/50 leading-relaxed font-light max-w-3xl">
                {course.desc}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/40 group-hover:text-white transition-colors self-end md:self-auto shrink-0">
              <span>Access Node</span>
              <ExternalLink className="w-4 h-4" />
            </div>
          </a>
        ))}
      </div>

          {/* informational banner */}
          <div className="mt-12 glass-panel border border-amber-500/20 bg-amber-500/5 p-6 rounded-xl flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5 animate-pulse" />
            <div className="space-y-1">
              <h4 className="text-sm font-display font-bold text-amber-300 uppercase tracking-wider">
                Requirement Notice
              </h4>
              <p className="text-xs text-amber-200/60 leading-relaxed font-light">
                Completion of these specific courses is not mandatory for an application submission. However, applicants who can explicitly demostrate these skills will have a significant technical advantage.
              </p>
            </div>
          </div>
    </div>
  );
}