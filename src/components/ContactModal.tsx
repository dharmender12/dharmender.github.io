import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  MessageSquare, 
  Copy, 
  Check, 
  ExternalLink, 
  Send,
  Sparkles
} from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  email,
  phone,
  linkedin,
  github,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('Data & AI Role Inquiry');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSendGmail = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject} - from ${name || 'Prospective Partner'}`);
    const formattedBody = encodeURIComponent(
      `Hello Dharmender,\n\n${message || 'I would like to connect regarding Data & AI opportunities.'}\n\nBest regards,\n${name || 'Inquirer'}\nEmail: ${senderEmail || 'Not provided'}`
    );

    // Open Gmail web composer directly in new tab
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${formattedSubject}&body=${formattedBody}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');

    // Also copy message to clipboard so nothing is lost
    navigator.clipboard.writeText(`To: ${email}\nSubject: ${subject}\n\n${message}\n\nFrom: ${name} (${senderEmail})`);
    setCopiedMessage(true);
    setStatus('Opened Gmail Web Composer & copied message draft to clipboard!');
    setTimeout(() => setStatus(null), 4000);
  };

  const handleDefaultMailto = () => {
    const formattedSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject} - from ${name || 'Prospective Partner'}`);
    const formattedBody = encodeURIComponent(
      `Hello Dharmender,\n\n${message || 'I would like to connect regarding Data & AI opportunities.'}\n\nBest regards,\n${name || 'Inquirer'}\nEmail: ${senderEmail || 'Not provided'}`
    );
    window.location.href = `mailto:${email}?subject=${formattedSubject}&body=${formattedBody}`;
  };

  const whatsappUrl = `https://wa.me/918544713601?text=${encodeURIComponent(
    `Hi Dharmender, I visited your portfolio and would like to discuss Data & AI solutions / opportunities.`
  )}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-2xl bg-zinc-950/95 border border-zinc-800 text-white rounded-3xl shadow-2xl overflow-hidden z-10 backdrop-blur-xl"
          >
            {/* Header */}
            <div className="p-6 sm:p-8 border-b border-zinc-800/80 flex items-start justify-between">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-mono">
                  <Sparkles size={12} />
                  <span>Direct Communication Hub</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-white">Get in Touch</h3>
                <p className="text-sm text-zinc-400">
                  Choose how you'd like to connect, or send a pre-filled message directly.
                </p>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
              {/* Quick Action Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Email Card */}
                <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                      <Mail size={13} className="text-violet-400" />
                      Email Address
                    </span>
                    <button
                      onClick={handleCopyEmail}
                      className="px-2 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-[11px] font-mono text-zinc-300 flex items-center gap-1 transition-colors"
                    >
                      {copiedEmail ? <Check size={11} className="text-emerald-400" /> : <Copy size={11} />}
                      <span>{copiedEmail ? "Copied" : "Copy"}</span>
                    </button>
                  </div>
                  <div className="text-sm font-semibold text-zinc-200 truncate">{email}</div>
                  <div className="flex gap-2 pt-1">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-1.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-xs font-medium text-center transition-colors flex items-center justify-center gap-1"
                    >
                      <span>Gmail Web</span>
                      <ExternalLink size={11} />
                    </a>
                    <button
                      onClick={handleDefaultMailto}
                      className="flex-1 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium transition-colors"
                    >
                      Default Mail
                    </button>
                  </div>
                </div>

                {/* Phone & WhatsApp Card */}
                <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                      <Phone size={13} className="text-emerald-400" />
                      Phone & WhatsApp
                    </span>
                    <button
                      onClick={handleCopyPhone}
                      className="px-2 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-[11px] font-mono text-zinc-300 flex items-center gap-1 transition-colors"
                    >
                      {copiedPhone ? <Check size={11} className="text-emerald-400" /> : <Copy size={11} />}
                      <span>{copiedPhone ? "Copied" : "Copy"}</span>
                    </button>
                  </div>
                  <div className="text-sm font-semibold text-zinc-200 truncate">{phone}</div>
                  <div className="flex gap-2 pt-1">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium text-center transition-colors flex items-center justify-center gap-1"
                    >
                      <MessageSquare size={11} />
                      <span>WhatsApp</span>
                    </a>
                    <a
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="flex-1 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium text-center transition-colors"
                    >
                      Call Direct
                    </a>
                  </div>
                </div>
              </div>

              {/* Socials Banner */}
              <div className="flex flex-wrap gap-2 pt-1">
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 hover:text-blue-400 text-zinc-300 text-xs font-mono flex items-center gap-2 transition-all"
                >
                  <Linkedin size={13} />
                  <span>LinkedIn / in/dharmender-thakur1220</span>
                  <ExternalLink size={11} className="opacity-60" />
                </a>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-300 text-xs font-mono flex items-center gap-2 transition-all"
                >
                  <Github size={13} />
                  <span>GitHub / @dharmender12</span>
                  <ExternalLink size={11} className="opacity-60" />
                </a>
              </div>

              {/* Interactive Quick-Send Form */}
              <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <Send size={14} className="text-violet-400" />
                    <span>Send Message or Project Brief</span>
                  </h4>
                  <span className="text-[11px] font-mono text-zinc-400">Opens Gmail directly</span>
                </div>

                <form onSubmit={handleSendGmail} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-violet-500 transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-violet-500 transition-colors"
                    />
                  </div>

                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-zinc-200 focus:outline-none focus:border-violet-500 transition-colors"
                  >
                    <option value="Data & AI Role Inquiry">Full-time Data & AI Role / Opportunity</option>
                    <option value="Client Solutions Consulting">Client Solutions & Consulting Project</option>
                    <option value="Corporate Training Engagement">Corporate / Technical Training Engagement</option>
                    <option value="General Technical Discussion">General Discussion / Mentorship</option>
                  </select>

                  <textarea
                    rows={3}
                    placeholder="Describe your inquiry, role requirements, or project details..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                  />

                  {status && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs font-mono"
                    >
                      {status}
                    </motion.div>
                  )}

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium text-xs font-mono flex items-center gap-2 transition-all shadow-lg shadow-violet-600/20 active:scale-95"
                    >
                      <Send size={13} />
                      <span>Compose in Gmail (1-Click)</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleDefaultMailto}
                      className="px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-mono transition-colors"
                    >
                      Open Default Mail
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
