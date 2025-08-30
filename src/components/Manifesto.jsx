import React from 'react';

const Manifesto = () => {
  return (
    <section id="manifesto" className="mx-auto max-w-4xl px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900">The Manifesto</h2>
      <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
        <p>
          Time is our most precious, non-renewable resource. Yet our weeks are packed, our attention scattered, our creativity on call.
        </p>
        <p>
          Reclaim Fridays is a simple invitation: unplug one day a week. Step away from the feed, the inbox, the urgency theater. Step toward spaciousness, curiosity, and human connection.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Pause the scroll. Go for a walk. Share a long lunch.</li>
          <li>Make room for deep work or deep rest — both are radical acts.</li>
          <li>Choose presence over performative productivity.</li>
          <li>Protect your attention like it protects your life — because it does.</li>
        </ul>
        <p>
          This is not about perfection. It’s about a cultural shift we make together — one Friday at a time.
        </p>
      </div>
    </section>
  );
};

export default Manifesto;
