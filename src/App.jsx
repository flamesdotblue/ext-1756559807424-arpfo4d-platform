import React from 'react';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Stats from './components/Stats';
import PartnersAndKits from './components/PartnersAndKits';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-emerald-50 text-slate-800">
      <Hero />
      <main>
        <Manifesto />
        <Stats />
        <PartnersAndKits />
      </main>
      <footer className="mt-10 border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center gap-2 font-semibold text-slate-900">
              <span className="inline-block h-6 w-6 rounded-md bg-gradient-to-br from-sky-400 to-emerald-400" />
              Reclaim Fridays
            </div>
            <p className="mt-3 text-sm text-slate-600">Unplug one day a week. Rest more. Create more. Connect more.</p>
          </div>
          <div className="text-sm text-slate-600">
            <div className="font-semibold text-slate-800">Spread the word</div>
            <ul className="mt-2 space-y-1">
              <li><a href="#kits" className="hover:text-emerald-700">Download social kits</a></li>
              <li><a href="#partners" className="hover:text-emerald-700">Become a partner</a></li>
              <li><a href="#manifesto" className="hover:text-emerald-700">Our manifesto</a></li>
            </ul>
          </div>
          <div className="text-sm text-slate-600">
            <div className="font-semibold text-slate-800">Stay in touch</div>
            <form onSubmit={(e) => e.preventDefault()} className="mt-2 flex gap-2">
              <input type="email" placeholder="Email address" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400" />
              <button type="submit" className="whitespace-nowrap rounded-md bg-slate-900 px-3 py-2 text-white hover:bg-slate-800">Notify me</button>
            </form>
          </div>
        </div>
        <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">Made with optimism. © {new Date().getFullYear()} Reclaim Fridays</div>
      </footer>
    </div>
  );
}

export default App;
