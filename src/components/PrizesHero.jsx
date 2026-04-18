const PRIZES = [
  {
    tier: "gold",
    hits: 3,
    value: "R$500",
  },
];

export default function PrizesHero() {
  return (
    <div className="prizes-hero">
      <div className="prizes-floating-bg" aria-hidden="true">
        {["⚽","🏆","⭐","💰","🎯","🟢"].map((icon, i) => (
          <span key={i} className={`float-icon float-icon--${i}`}>{icon}</span>
        ))}
      </div>

      <div className="prizes-hero-top">
        <span className="prizes-eyebrow">🇧🇷 BOLÃO CAMPEONATO BRASILEIRO</span>
        <h1 className="prizes-title">Acerte e<br /><span>ganhe dinheiro</span></h1>
        <p className="prizes-sub">Acerte os placares. Concorra ao PIX.</p>
      </div>

      <div className="prizes-cards">
        {PRIZES.map((p) => (
          <div key={p.tier} className={`prize-card prize-card--${p.tier}`}>
            <div className="prize-card-hits">{p.hits} acertos</div>
            <div className="prize-card-value">{p.value}</div>
            <div className="prize-card-label">no PIX</div>
          </div>
        ))}
      </div>

      <p className="prizes-disclaimer">
        ⚽ Acerte 3 placares e concorra a R$500 no PIX
      </p>
    </div>
  );
}
