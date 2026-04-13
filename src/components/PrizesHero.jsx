const PRIZES = [
  {
    tier: "bronze",
    hits: 2,
    value: "R$200",
    label: "Prêmio",
    desc: "Sorteio entre todos que acertarem exatamente 2 placares",
  },
  {
    tier: "silver",
    hits: 3,
    value: "R$300",
    label: "Prêmio",
    desc: "Sorteio entre todos que acertarem exatamente 3 placares",
  },
  {
    tier: "gold",
    hits: 4,
    value: "R$400",
    label: "Prêmio",
    desc: "Sorteio entre todos que acertarem os 4 placares",
  },
];

export default function PrizesHero() {
  return (
    <div className="prizes-hero">
      <div className="prizes-floating-bg" aria-hidden="true">
        {["⚽","🏆","⭐","💰","🎯","🔵"].map((icon, i) => (
          <span key={i} className={`float-icon float-icon--${i}`}>{icon}</span>
        ))}
      </div>

      <div className="prizes-hero-top">
        <span className="prizes-eyebrow">🏆 BOLÃO CHAMPIONS LEAGUE</span>
        <h1 className="prizes-title">Acerte e<br /><span>ganhe dinheiro</span></h1>
        <p className="prizes-sub">Acerte os placares. Concorra ao PIX.</p>
      </div>

      <div className="prizes-cards">
        {PRIZES.map((p) => (
          <div key={p.tier} className={`prize-card prize-card--${p.tier}`}>
            <div className="prize-card-hits">{p.hits} acertos</div>
            <div className="prize-card-value">{p.value}</div>
            <div className="prize-card-label">no PIX</div>
            <div className="prize-card-desc">{p.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
