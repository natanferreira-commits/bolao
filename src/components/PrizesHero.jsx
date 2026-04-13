export default function PrizesHero() {
  return (
    <div className="prizes-hero">
      <div className="prizes-hero-top">
        <span className="prizes-eyebrow">⚽ BOLÃO DO BRASILEIRÃO</span>
        <h1 className="prizes-title">Acerte e<br /><span>ganhe dinheiro</span></h1>
        <p className="prizes-sub">Acerte os placares. Concorra ao PIX.</p>
      </div>

      <div className="prizes-track-wrapper">
        <div className="prizes-track">
          {[...PRIZES, ...PRIZES].map((prize, i) => (
            <div key={i} className={`prize-chip prize-chip--${prize.tier}`}>
              <span className="prize-chip-hits">{prize.hits} acertos</span>
              <span className="prize-chip-value">R${prize.value}</span>
              <span className="prize-chip-label">no PIX</span>
            </div>
          ))}
        </div>
      </div>

      <p className="prizes-disclaimer">Sorteio entre os participantes de cada faixa</p>
    </div>
  );
}

const PRIZES = [
  { tier: "bronze", hits: 3, value: "300" },
  { tier: "silver", hits: 4, value: "400" },
  { tier: "gold",   hits: 5, value: "500" },
];
