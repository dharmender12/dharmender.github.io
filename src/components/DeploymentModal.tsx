import React from 'react';
import { Globe, Github, Sparkles, CheckCircle2, ArrowRight, ExternalLink, Copy, Download } from 'lucide-react';

interface DeploymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeploymentModal: React.FC<DeploymentModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const githubUrl = "https://github.com/dharmender12/dharmender.github.io";
  const vercelUrl = "https://dharmender-github-io.vercel.app/";

  const handleCopyGithub = () => {
    navigator.clipboard.writeText(githubUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto text-slate-200">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-white p-2 rounded-xl bg-slate-950 border border-slate-800"
        >
          ✕
        </button>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Vercel & GitHub Integration Guide</span>
          </div>
          <h3 className="text-2xl font-bold text-white">Deploy to Vercel & GitHub Pages</h3>
          <p className="text-sm text-slate-300">
            This 3D immersive application is structured for instant deployment to Vercel and your GitHub repository.
          </p>
        </div>

        {/* Links Box */}
        <div className="space-y-3 p-4 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs">
          <div className="flex items-center justify-between gap-2">
            <span className="text-slate-400">Target GitHub Repo:</span>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
            >
              <span>dharmender12/dharmender.github.io</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-900">
            <span className="text-slate-400">Target Vercel Domain:</span>
            <a
              href={vercelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
            >
              <span>dharmender-github-io.vercel.app</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Step-by-step deploy instructions */}
        <div className="space-y-4 text-xs sm:text-sm">
          <h4 className="font-bold text-slate-100 uppercase tracking-wider text-xs font-mono">
            Deployment Instructions
          </h4>

          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-3">
              <span className="w-6 h-6 rounded-lg bg-cyan-950 text-cyan-400 flex items-center justify-center font-bold text-xs shrink-0">
                1
              </span>
              <div>
                <p className="font-semibold text-white">Export Code / Push to GitHub</p>
                <p className="text-slate-400 text-xs mt-0.5">
                  Push these project files to your GitHub repository at{' '}
                  <code className="text-cyan-300">dharmender12/dharmender.github.io</code>.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-3">
              <span className="w-6 h-6 rounded-lg bg-cyan-950 text-cyan-400 flex items-center justify-center font-bold text-xs shrink-0">
                2
              </span>
              <div>
                <p className="font-semibold text-white">Import into Vercel</p>
                <p className="text-slate-400 text-xs mt-0.5">
                  Connect Vercel to your GitHub account, import <code className="text-cyan-300">dharmender12/dharmender.github.io</code>, and select Vite framework preset.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-3">
              <span className="w-6 h-6 rounded-lg bg-cyan-950 text-cyan-400 flex items-center justify-center font-bold text-xs shrink-0">
                3
              </span>
              <div>
                <p className="font-semibold text-white">Auto Build & Deploy</p>
                <p className="text-slate-400 text-xs mt-0.5">
                  Vercel will run <code className="text-cyan-300">npm run build</code> producing the optimized distribution bundle.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
          <button
            onClick={handleCopyGithub}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-200 text-xs font-semibold"
          >
            <Copy className="w-4 h-4 text-cyan-400" />
            <span>{copied ? 'Copied Repo Link!' : 'Copy GitHub Repo URL'}</span>
          </button>

          <a
            href={vercelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 text-slate-950 text-xs font-bold"
          >
            <Globe className="w-4 h-4 text-slate-950" />
            <span>Open Vercel App</span>
          </a>
        </div>
      </div>
    </div>
  );
};
