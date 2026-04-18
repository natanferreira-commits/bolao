import { useState } from "react";
import { HOUSES } from "../config/houses";

export default function ValidateScreen({ participant, vendorCode, entryId, onNext }) {
  const originalHouse = HOUSES.find(h => h.id === participant.house);
  const [activeHouse, setActiveHouse] = useState(originalHouse);
  const [showPicker, setShowPicker] = useState(false);
  const [clicked, setClicked] = useState(false);

  const otherHouses = HOUSES.filter(h => h.id !== activeHouse?.id);

  function pickHouse(house) {
    setActiveHouse(house);
    setShowPicker(false);
    setClicked(false);
    window.gtag?.('event', 'troca_casa', { de: originalHouse?.name, para: house.name, vendedor: vendorCode });
  }

  function handleAffiliateClick() {
    window.gtag?.('event', 'click_afiliado', { casa: activeHouse?.name, vendedor: vendorCode });
    setClicked(true);
  }

  return (
    <div className="screen">

      <div className="validate-header">
        <div className="validate-check">✓</div>
        <h2>Palpite registrado!</h2>
        <p>Agora valide sua participação para concorrer</p>
      </div>

      <div className="validate-cta-card">
        <div className="validate-step-label">PASSO 1 DE 2</div>
        <h3>Crie sua conta na {activeHouse?.name}</h3>
        <p className="validate-desc">
          Para validar sua participação no bolão você precisa criar uma conta
          na {activeHouse?.name} pelo link oficial da Dupla Aposta.
        </p>

        <a
          href={activeHouse?.affiliateLink || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-affiliate-big"
          onClick={handleAffiliateClick}
        >
          Criar conta na {activeHouse?.name} →
        </a>

        {clicked && (
          <button className="btn-confirm-created" onClick={onNext}>
            ✅ Já criei minha conta — próximo passo →
          </button>
        )}

        <button className="btn-next-step" onClick={() => setShowPicker(v => !v)}>
          {showPicker ? "▲ Fechar" : "Já tenho conta nessa casa →"}
        </button>

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
