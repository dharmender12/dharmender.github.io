import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { handleDownloadAndOpenResume } from '../utils/resumeHandler';
import confetti from 'canvas-confetti';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Download, ExternalLink, Sparkles, CheckCircle2, Copy, Check } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => {
      setCopiedEmail(false);
    }, 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 }
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Section Title */}
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
          <Mail className="w-3.5 h-3.5" /> Get In Touch
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Let’s Build <span className="gradient-text-3d">Together</span>
        </h2>
        <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base">
          Reach out for Data Science roles, Full Stack Development initiatives, academic research, or technical instruction.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        
        {/* Left Column: Direct Info Cards */}
        <div className="space-y-6">
          
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6">
            <h3 className="text-2xl font-bold text-white mb-2">Contact Information</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Feel free to connect directly via email, phone, or professional networks. I am actively looking for Data Analyst / Data Scientist / Full Stack engineering opportunities.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-white/5 hover:border-blue-500/40 transition-all text-slate-200 group">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-4 flex-1 min-w-0"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30 group-hover:scale-105 transition-transform shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="truncate">
                    <span className="text-xs font-mono text-slate-400 uppercase">Email Address</span>
                    <p className="font-semibold text-white text-sm sm:text-base group-hover:text-blue-400 transition-colors truncate">
                      {PERSONAL_INFO.email}
                    </p>
                  </div>
                </a>
                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className="ml-3 px-3 py-2 rounded-lg bg-slate-800 hover:bg-blue-600/30 border border-white/10 hover:border-blue-400/50 text-xs font-mono font-medium text-slate-300 hover:text-white flex items-center gap-1.5 transition-all cursor-pointer shrink-0"
                  title="Copy Email Address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-300" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-white/5 hover:border-purple-500/40 transition-all text-slate-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center border border-purple-500/30 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase">Phone Contact</span>
                  <p className="font-semibold text-white text-sm sm:text-base group-hover:text-purple-400 transition-colors">
                    {PERSONAL_INFO.phone}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-white/5 text-slate-200">
                <div className="w-12 h-12 rounded-xl bg-cyan-600/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase">Location</span>
                  <p className="font-semibold text-white text-sm sm:text-base">
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Buttons & Resume Button */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white border border-white/10 transition-colors"
                  title="LinkedIn Profile (Opens in new tab)"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 hover:bg-purple-600 text-slate-300 hover:text-white border border-white/10 transition-colors"
                  title="GitHub Profile (Opens in new tab)"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>

              {/* Resume Trigger in Contact Section */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleDownloadAndOpenResume();
                }}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-xs flex items-center gap-2 shadow-lg shadow-blue-500/20 cursor-pointer"
              >
                <span>Download Resume</span>
                <Download className="w-4 h-4" />
                <ExternalLink className="w-3 h-3 text-blue-200" />
              </button>
            </div>

          </div>
        </div>

        {/* Right Column: Contact Message Form */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 relative">
          <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
          <p className="text-sm text-slate-300 mb-6">
            Leave a note below to initiate direct communication.
          </p>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-3 animate-in zoom-in-95">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h4 className="text-xl font-bold text-white">Message Sent Successfully!</h4>
              <p className="text-sm text-slate-300">
                Thank you for reaching out to Dharmender Thakur. I will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Smith"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Your Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Job Opportunity / Project Collaboration"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Message *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Dharmender, I reviewed your 3D portfolio and..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          )}

        </div>

      </div>

      {/* Floating Toast Notification on Copy */}
      {copiedEmail && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl bg-slate-900/95 border border-cyan-500/50 text-cyan-300 text-sm font-semibold shadow-2xl flex items-center gap-2.5 backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-300">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span>Email copied to clipboard!</span>
        </div>
      )}
    </section>
  );
};
