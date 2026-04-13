import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

export default function ConvitesScreen({ entryId, referralLink, onBack }) {
  const [copied, setCopied] = useState(false);
  const [referrals, setReferrals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadReferrals();
  }, [entryId]);

  async function loadReferrals() {
    setLoading(true);
    try {
      if (supabase && entryId) {
        const { data } = await supabase
          .from("participants")
          .select("id, name, created_at")
          .eq("referred_by", entryId)
          .order("created_at", { ascending: false });
        setReferrals(data || []);
      }
    } catch {
      // sem conexão, mostra vazio
    } finally {
      setLoading(false);
    }
  }

  function copyLink() {
    navigator.clipboard.writeText(referralLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  const bonusPalpites = referrals.length;

  return (
    <div className="screen">

      {/* Header */}
      <div className="convites-header">
        <div className="convites-icon">🎯</div>
        <h2>Seus Convites</h2>
        <p>A cada amigo que participar, você ganha +1 palpite</p>
      </div>

      {/* Contador */}
      <div className="convites-stats">
        <div className="stat-box">
          <span className="stat-num">{referrals.length}</span>
          <span className="stat-label">Amigos convidados</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-box">
          <span className="stat-num highlight-yellow">+{bonusPalpites}</span>
          <span className="stat-label">Palpites extras</span>
        </div>
      </div>

      {/* Link */}
      <div className="card">
        <h3 className="section-title">Seu Link</h3>
        <div className="invite-link-box" style={{marginBottom: 12}}>
          <span className="invite-link-text">{referralLink}</span>
        </div>
        <button className="btn-primary" onClick={copyLink}>
          {copied ? "✓ Link copiado!" : "📋 Copiar link de convite"}
        </button>
        <p className="share-hint">Mande no WhatsApp, Instagram ou onde quiser</p>
      </div>

      {/* Lista de convidados */}
      <div className="card">
        <h3 className="section-title">Quem entrou</h3>
        {loading ? (
          <div className="referrals-empty">Carregando...</div>
        ) : referrals.length === 0 ? (
          <div className="referrals-empty">
            <span className="referrals-empty-icon">👥</span>
            <p>Ninguém entrou pelo seu link ainda.</p>
            <p>Compartilha e garanta seus palpites extras!</p>
          </div>
        ) : (
          <div className="referrals-list">
            {referrals.map((r, i) => (
              <div key={r.id} className="referral-row">
                <div className="referral-avatar">{r.name?.charAt(0).toUpperCase()}</div>
                <div className="referral-info">
                  <span className="referral-name">{r.name}</span>
                  <span className="referral-date">
                    {new Date(r.created_at).toLocaleDateString("pt-BR")}
                  </span>
                </div>
                <span className="referral-bonus">+1 palpite</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <button className="btn-ghost" onClick={onBack}>← Voltar</button>
    </div>
  );
}
