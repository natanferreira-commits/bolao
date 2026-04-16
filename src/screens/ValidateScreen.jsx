import { useState } from "react";
import { HOUSES } from "../config/houses";

export default function ValidateScreen({ participant, vendorCode, entryId, onNext }) {
  const originalHouse = HOUSES.find(h => h.id === participant.house);
  const [activeHouse, setActiveHouse] = useState(originalHouse);
  const [showPicker, setShowPicker] = useState(false);
  const today = new Date().toLocaleDateString("pt-BR");

  const otherHouses = HOUSES.filter(h => h.id !== activeHouse?.id);

  function pickHouse(house) {
    setActiveHouse(house);
    setShowPicker(false);
    window.gtag?.('event', 'troca_casa', { de: originalHouse?.name, para: house.name, vendedor: vendorCode });
  }

  return (
    <div className="screen">

      {/* Header */}
      <div className="validate-header">
        <div className="validate-check">✓</div>
        <h2>Palpite registrado!</h2>
        <p>Agora valide sua participação para concorrer</p>
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
          <span>{activeHouse?.name}</span>
        </div>
      </div>

      {/* CTA principal */}
      <div className="validate-cta-card">
        <div className="validate-step-label">PASSO 1 DE 2</div>
        <h3>Crie sua conta na {activeHouse?.name}</h3>
        <p>
          Para validar sua participação no bolão você precisa criar uma conta
          na {activeHouse?.name} pelo link oficial da Dupla Aposta.
        </p>

        <a
          href={activeHouse?.affiliateLink || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-affiliate-big"
          onClick={() => window.gtag?.('event', 'click_afiliado', { casa: activeHouse?.name, vendedor: vendorCode })}
        >
          Criar conta na {activeHouse?.name} →
        </a>

        <button className="btn-next-step" onClick={() => setShowPicker(v => !v)}>
          {showPicker ? "▲ Fechar" : "Já tenho conta nessa casa →"}
        </button>

        {/* Painel de troca de casa */}
        {showPicker && (
          <div className="house-picker">
            <div className="house-picker-alert">
              ⚠️ Esta promoção é <strong>exclusiva para novos usuários</strong>. Escolha uma casa onde você ainda não tem conta:
            </div>
            <div className="house-picker-list">
              {otherHouses.map(h => (
                <button key={h.id} className="house-picker-item" onClick={() => pickHouse(h)}>
                  <img src={h.logo} alt={h.name} className="house-picker-logo"
                    onError={e => { e.target.style.display = 'none'; }} />
                  <span>{h.name}</span>
                  <span className="house-picker-arrow">→</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
