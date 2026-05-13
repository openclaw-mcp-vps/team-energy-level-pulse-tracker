export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Remote Team Health
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track team energy &amp; burnout signals daily
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Daily check-ins that surface energy trends, workload stress, and early burnout warnings — so you can act before it's too late.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $8/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required to try. Cancel anytime.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="font-semibold text-white mb-1">Daily Pulse Check-ins</h3>
            <p className="text-sm text-[#8b949e]">30-second energy and stress ratings sent to your team each morning.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📈</div>
            <h3 className="font-semibold text-white mb-1">Trend Dashboard</h3>
            <p className="text-sm text-[#8b949e]">Visual energy trends over time so you spot dips before they become crises.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🔔</div>
            <h3 className="font-semibold text-white mb-1">Burnout Alerts</h3>
            <p className="text-sm text-[#8b949e]">Automated alerts when team energy drops below your defined threshold.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$8</div>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited team members</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Daily check-in forms</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Energy trend dashboard</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Automated burnout alerts</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> CSV data export</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How do daily check-ins work?</h3>
            <p className="text-sm text-[#8b949e]">Each morning your team receives a short form to rate their energy level and workload stress on a 1–5 scale. It takes under 30 seconds and responses are anonymous by default.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">When do burnout alerts trigger?</h3>
            <p className="text-sm text-[#8b949e]">You set a threshold (e.g. average energy below 2.5 for 3 consecutive days). When the team crosses it, you get an email alert so you can intervene early.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Cancel from your billing portal at any time with no penalties. Your data remains accessible until the end of your billing period.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} Team Energy Pulse Tracker. All rights reserved.
      </footer>
    </main>
  )
}
