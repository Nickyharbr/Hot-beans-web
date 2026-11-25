import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { ClipboardCheck, Send } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

// type matching layout for inherited state remote control
interface LayoutContextType {
  setIsTermsOpen: (open: boolean) => void;
}

export default function Apply() {
  // Pull our master modal state control down from the layout shell context
  const { setIsTermsOpen } = useOutletContext<LayoutContextType>();
  
  // Track intake form parameters 
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    portfolio: '',
    pathway: 'frontend',
    coverLetter: '',
    agreed: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreed) return;
    
    // Simulate system ingestion pipeline
    setSubmitted(true);
  };

  // Automated layout swap upon verified submission confirmation
  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-6 text-center py-20">
        <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <ClipboardCheck className="w-8 h-8 text-emerald-400" />
        </div>
        <h2 className="text-3xl font-display font-bold text-white uppercase tracking-widest mb-4">
          Application Complete
        </h2>
        <p className="text-white/60 font-light leading-relaxed max-w-md mx-auto text-sm">
          Your profile node has been successfully sent to Hot Beans Web for review.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6">
      {/* SectionHeader */}
      <SectionHeader
        title="Submit Application"
        subtitle="SYS_RECRUITMENT_PORTAL // INTAKE_FORM"
        icon={ClipboardCheck}
      />

      {/* main form element */}
      <form 
        onSubmit={handleSubmit} 
        className="glass-panel border border-white/10 bg-black/30 p-6 md:p-10 rounded-xl mt-12 space-y-8"
      >
        {/* Row Grid Identification Credentials */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Full Name text input */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-mono uppercase tracking-widest text-white/40">Full Name</label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white/30 transition-colors placeholder:text-white/10"
              placeholder="e.g. Jane Doe"
            />
          </div>

          {/* Email Address email input */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-mono uppercase tracking-widest text-white/40">Email Address</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white/30 transition-colors placeholder:text-white/10"
              placeholder="jane@doe.net"
            />
          </div>
        </div>

        {/* Portfolio / GitHub URL input */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-mono uppercase tracking-widest text-white/40">Portfolio / GitHub Link</label>
          <input
            type="url"
            required
            value={formData.portfolio}
            onChange={(e) => setFormData({...formData, portfolio: e.target.value})}
            className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white/30 transition-colors w-full placeholder:text-white/10"
            placeholder="https://github.com/your-handle"
          />
        </div>

        {/* Preferred Pathway radio button group */}
        <div className="flex flex-col gap-3">
          <label className="text-xs font-mono uppercase tracking-widest text-white/40">Preferred Operational Pathway</label>
          {/* Radio choices array loop */}
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { id: 'frontend', display: 'Frontend Dev' },
              { id: 'backend', display: 'Backend Arch' },
              { id: 'fullstack', display: 'Full Stack' }
            ].map((track) => (
              <label 
                key={track.id} 
                className={`border rounded-lg p-4 flex items-center justify-between cursor-pointer transition-all ${
                  formData.pathway === track.id 
                    ? 'border-white bg-white/5 text-white' 
                    : 'border-white/10 bg-black/20 text-white/40 hover:border-white/20'
                }`}
              >
                <span className="text-xs font-mono uppercase tracking-widest">{track.display}</span>
                <input
                  type="radio"
                  name="pathway"
                  value={track.id}
                  checked={formData.pathway === track.id}
                  onChange={() => setFormData({...formData, pathway: track.id})}
                  className="accent-white cursor-pointer"
                />
              </label>
            ))}
          </div>
        </div>

        {/* Cover Letter textarea input */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-mono uppercase tracking-widest text-white/40">Cover Letter</label>
          <textarea
            required
            rows={5}
            value={formData.coverLetter}
            onChange={(e) => setFormData({...formData, coverLetter: e.target.value})}
            className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white/30 transition-colors resize-none leading-relaxed placeholder:text-white/10"
            placeholder="Detail your background, skills, and why you intend to apply to Hot Beans Web..."
          />
        </div>

        {/* Terms agreement checkbox linked to modal toggle */}
        <div className="flex items-start gap-3 pt-2">
          <input
            type="checkbox"
            id="terms"
            required
            checked={formData.agreed}
            onChange={(e) => setFormData({...formData, agreed: e.target.checked})}
            className="mt-1 accent-white cursor-pointer w-4 h-4 shrink-0"
          />
          <label htmlFor="terms" className="text-xs text-white/50 leading-relaxed font-light select-none">
            I have reviewed and explicitly consent to the operational parameters outlined within the{' '}
            <button
              type="button"
              onClick={() => setIsTermsOpen(true)}
              className="text-white hover:underline uppercase font-mono tracking-wider cursor-pointer underline-offset-4"
            >
              Terms & Conditions
            </button>{' '}
            manifest.
          </label>
        </div>

        {/* Submit Profile form submission button */}
        <button
          type="submit"
          disabled={!formData.agreed}
          className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-white/90 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3 cursor-pointer"
        >
          <span>Submit Profile Node</span>
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}