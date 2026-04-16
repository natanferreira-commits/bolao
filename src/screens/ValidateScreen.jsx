import { HOUSES } from "../config/houses";

export default function ValidateScreen({ participant, vendorCode, entryId, onNext }) {
  const house = HOUSES.find(h => h.id === participant.house);
  const affiliateLink = house?.affiliateLink || "#";
  const today = new Date().toLocaleDateString("pt-BR");

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
          <span>{house?.name}</span>
        </div>
      </div>

      {/* CTA principal */}
      <div className="validate-cta-card">
        <div className="validate-step-label">PASSO 1 DE 2</div>
        <h3>Crie sua conta na {house?.name}</h3>
        <p>
          Para validar sua participação no bolão você precisa criar uma conta
          na {house?.name} pelo link oficial da Dupla Aposta.
        </p>

        <a
          href={affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-affiliate-big"
          onClick={() => window.gtag?.('event', 'click_afiliado', { casa: house?.name, vendedor: vendorCode })}
        >
          Criar conta na {house?.name} →
        </a>

        <button className="btn-next-step" onClick={onNext}>
          Já tenho conta, próximo passo →
        </button>
      </div>

    </div>
  );
}
