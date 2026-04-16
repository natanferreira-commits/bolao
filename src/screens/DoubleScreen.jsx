import { useState, useEffect } from "react";
import Confetti from "../components/Confetti";

export default function DoubleScreen({ entryId, vendorCode, onPlayAgain }) {
  const [copied, setCopied] = useState(false);
  const [showConfetti, setShowConfetti] = useState(true);
  const referralLink = `${window.location.origin}${window.location.pathname}?v=${vendorCode}&ref=${entryId}`;

  useEffect(() => {
    const t = setTimeout(() => setShowConfetti(false), 4000);
    return () => clearTimeout(t);
  }, []);

  function copy() {
    navigator.clipboard.writeText(referralLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  return (
    <div className="screen">
      {showConfetti && <Confetti />}

      <div className="validate-header">
        <div style={{ fontSize: 52, lineHeight: 1 }}>🎯</div>
        <h2>Dobre suas chances!</h2>
        <p>Chame um amigo e ganhe +1 palpite grátis</p>
      </div>

      <div className="invite-card">
        <div className="invite-badge">GRÁTIS</div>
        <h3 className="invite-title">Como funciona</h3>
        <p className="invite-desc">
          Compartilhe seu link com alguém que ainda <strong>não tem conta</strong> em uma casa de apostas.
          Quando ele participar, você ganha <strong>+1 palpite</strong> — sem custo nenhum.
        </p>

        <div className="invite-link-box">
          <span className="invite-link-text">{referralLink}</span>
        </div>

        <button className="btn-invite" onClick={copy}>
          {copied ? "✓ Link copiado!" : "📋 Copiar meu link"}
        </button>

        <button className="btn-play-again" onClick={onPlayAgain} style={{ marginTop: 12 }}>
          ⚽ Fazer mais um palpite →
        </button>
      </div>

    </div>
  );
}
