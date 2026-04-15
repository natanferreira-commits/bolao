import { useState } from "react";
import { GAMES } from "../config/games";

export default function PredictionsScreen({ onSubmit, onBack }) {
  const initial = Object.fromEntries(GAMES.map(g => [g.id, { home: "", away: "" }]));
  const [scores, setScores] = useState(initial);
  const [error, setError] = useState("");

  function setScore(gameId, side, val) {
    const digit = val.replace(/\D/g, "").slice(0, 2);
    setScores(prev => ({ ...prev, [gameId]: { ...prev[gameId], [side]: digit } }));
  }

  function handleSubmit() {
    const allFilled = GAMES.every(g => scores[g.id].home !== "" && scores[g.id].away !== "");
    if (!allFilled) { setError("Preencha o placar de todos os jogos"); return; }
    onSubmit(scores);
  }

  return (
    <div className="screen">
      <div className="predictions-header">
        <div className="trophy-icon">🏆</div>
        <h2>Seus Palpites</h2>
        <p>Acerte o placar exato dos {GAMES.length} jogos</p>
      </div>

      <div className="predictions-prize-bar">
        <div className="pred-prize-pill">
          <span className="pred-prize-dot pred-prize-dot--gold" />
          <span className="pred-prize-text">2 acertos</span>
          <span className="pred-prize-amt">R$500</span>
        </div>
      </div>

      <div className="games-list">
        {GAMES.map(game => (
          <div key={game.id} className="game-card">
            <div className="game-info">
              <span className="game-time">{game.time}</span>
              <span className="game-date">{game.date}</span>
            </div>

            <div className="game-row" style={{flex:1}}>
              <div className="team">
                <img src={game.homeTeam.badge} alt={game.homeTeam.name} className="team-badge"
                  onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />
                <div className="badge-fallback" style={{display:'none'}}>{game.homeTeam.name.slice(0,3).toUpperCase()}</div>
                <span className="team-name">{game.homeTeam.name}</span>
              </div>

              <div className="score-inputs">
                <input type="number" min="0" max="99" className="score-input" placeholder="?"
                  value={scores[game.id].home}
                  onChange={e => setScore(game.id, "home", e.target.value)} />
                <span className="score-sep">×</span>
                <input type="number" min="0" max="99" className="score-input" placeholder="?"
                  value={scores[game.id].away}
                  onChange={e => setScore(game.id, "away", e.target.value)} />
              </div>

              <div className="team">
                <img src={game.awayTeam.badge} alt={game.awayTeam.name} className="team-badge"
                  onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />
                <div className="badge-fallback" style={{display:'none'}}>{game.awayTeam.name.slice(0,3).toUpperCase()}</div>
                <span className="team-name">{game.awayTeam.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {error && <p className="error center">{error}</p>}

      <button className="btn-primary" onClick={handleSubmit}>
        Confirmar Palpites ✓
      </button>
      <button className="btn-ghost" onClick={onBack}>← Voltar</button>
    </div>
  );
}
