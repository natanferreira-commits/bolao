import { useState, useEffect } from "react";
import { HOUSES } from "../config/houses";
import { getVendor } from "../config/vendors";
import Confetti from "../components/Confetti";

export default function ResultScreen({ participant, vendorCode, entryId, onPlayAgain }) {
  const vendor = getVendor(vendorCode);
  const house = HOUSES.find(h => h.id === participant.house);
  const affiliateLink = house?.affiliateLink || "#";
  const today = new Date().toLocaleDateString("pt-BR");
  const [showConfetti, setShowConfetti] = useState(true);
  const [referralCopied, setReferralCopied] = useState(false);
  const referralLink = `${window.location.origin}${window.location.pathname}?v=${vendorCode}&ref=${entryId}`;

  useEffect(() => {
    const t = setTimeout(() => setShowConfetti(false), 4000);
    return () => clearTimeout(t);
  }, []);

  function copyReferral() {
    navigator.clipboard.writeText(referralLink).then(() => {
      setReferralCopied(true);
      setTimeout(() => setReferralCopied(false), 2500);
    });
  }

  // Usa o whatsappUrl direto do vendor (já vem configurado com o número certo)
  const whatsappUrl = vendor.whatsappUrl;

  return (
    <div className="screen">
      {showConfetti && <Confetti />}

      {/* Celebração */}
      <div className="result-celebrate">
        <span className="result-celebrate-emoji">🎉</span>
        <h2>Palpite confirmado!</h2>
        <p>Agora é torcer e esperar o apito final</p>
      </div>

      {/* Bilhete */}
      <div className="ticket-card">
        <div className="ticket-top">
          <span className="ticket-label">Palpite registrado ✓</span>
          <span className="ticket-date">{today}</span>
        </div>
        <div className="ticket-id">{entryId}</div>
        <div className="ticket-bottom">
          <span>{participant.name}</span>
          <span>{house?.name}</span>
        </div>
      </div>

      {/* Como validar */}
      <div className="card">
        <h3 className="section-title">Como Validar</h3>
        <div className="steps">
          <div className="step">
            <span className="step-num">1</span>
            <div>
              <strong>Crie sua conta na {house?.name}</strong>
              <p>Acesse pelo link oficial abaixo e faça seu cadastro.</p>
              <a href={affiliateLink} target="_blank" rel="noopener noreferrer" className="affiliate-link">
                Acessar {house?.name} →
              </a>
            </div>
          </div>
          <div className="step">
            <span className="step-num">2</span>
            <div>
              <strong>Ative sua conta com uma aposta</strong>
              <p>Faça qualquer aposta em um jogo da Champions League para ativar sua participação.</p>
            </div>
          </div>
          <div className="step">
            <span className="step-num">3</span>
            <div>
              <strong>Envie o comprovante ao vendedor</strong>
              <p>Mande o print da aposta junto com seu ID: <strong>{entryId}</strong></p>
            </div>
          </div>
        </div>

        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Validar palpite no WhatsApp
        </a>
      </div>

      {/* Convite */}
      <div className="invite-card">
        <div className="invite-badge">GRÁTIS</div>
        <h3 className="invite-title">🎯 DOBRE SUAS CHANCES</h3>
        <p className="invite-desc">
          Chame um amigo pelo seu link. Quando ele participar, você ganha <strong>+1 palpite</strong> — sem custo nenhum.
        </p>
        <div className="invite-link-box">
          <span className="invite-link-text">{referralLink}</span>
        </div>
        <button className="btn-invite" onClick={copyReferral}>
          {referralCopied ? "✓ Link copiado!" : "📋 Copiar meu link"}
        </button>

        {referralCopied && (
          <button className="btn-play-again" onClick={onPlayAgain}>
            ⚽ Fazer mais um palpite →
          </button>
        )}

      </div>
    </div>
  );
}
