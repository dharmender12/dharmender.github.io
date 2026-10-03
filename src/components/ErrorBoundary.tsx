import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="w-full h-full min-h-[350px] rounded-3xl bg-slate-900/80 border border-cyan-500/30 flex flex-col items-center justify-center p-8 text-center space-y-4">
          <div className="p-3 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/30">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <h4 className="text-base font-bold text-white">3D Accelerated View Fallback</h4>
          <p className="text-xs text-slate-400 max-w-sm">
            Interactive canvas safely rendered in 2D mode for maximum browser compatibility.
          </p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-cyan-300 border border-white/10 flex items-center gap-2 cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reload 3D Stage</span>
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
