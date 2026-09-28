import React, { useState } from "react";
import { Activity, Send, CheckCircle2, Radio } from "lucide-react";

export const FooterLiveStatus: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-12 mb-12 border-b border-slate-800">
      <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="relative flex items-center justify-center">
            <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 animate-ping absolute" />
            <Radio className="w-6 h-6 text-emerald-400 relative z-10" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-white text-xs font-bold uppercase tracking-wider">
                Texas Dispatch Network
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 text-[10px] font-semibold border border-emerald-500/40">
                ACTIVE
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mt-0.5">
              DFW Corridor, Tarrant, Dallas, Denton & Collin Counties on standby.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-700 shrink-0">
          <Activity className="w-4 h-4 text-amber-400" />
          <div>
            <div className="text-[10px] text-slate-400">Avg First-Response</div>
            <div className="text-white font-bold text-xs font-mono">1.4 Hours</div>
          </div>
        </div>
      </div>

      <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-wider">
            Loan Servicer Dispatch Digest
          </h4>
          <p className="text-[11px] text-slate-400 mt-0.5">
            Receive monthly Texas code enforcement changes & freeze alerts.
          </p>
        </div>

        {subscribed ? (
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-medium py-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>Subscribed successfully</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex w-full sm:w-auto gap-2">
            <input
              type="email"
              required
              placeholder="servicer@bank.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-slate-500 w-full sm:w-48"
            />
            <button
              type="submit"
              className="px-3.5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-bold flex items-center gap-1.5 transition shrink-0 cursor-pointer shadow-md"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Join</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
