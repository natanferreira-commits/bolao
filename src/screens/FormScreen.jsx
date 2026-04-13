import { useState } from "react";
import { HOUSES } from "../config/houses";
import PrizesHero from "../components/PrizesHero";

export default function FormScreen({ onSubmit }) {
  const [form, setForm] = useState({ name: "", email: "", whatsapp: "", pix: "", house: "" });
  const [errors, setErrors] = useState({});

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Informe seu nome";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "E-mail inválido";
    if (!form.whatsapp.trim() || form.whatsapp.replace(/\D/g, "").length < 10) e.whatsapp = "WhatsApp inválido";
    if (!form.house) e.house = "Selecione uma casa";
    return e;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    onSubmit(form);
  }

  function formatWhatsapp(val) {
    const digits = val.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits.length ? `(${digits}` : "";
    if (digits.length <= 7) return `(${digits.slice(0,2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0,2)}) ${digits.slice(2,7)}-${digits.slice(7)}`;
  }

  return (
    <div className="screen">
      <PrizesHero />
      <form onSubmit={handleSubmit} noValidate>
        <div className="card">
          <h2 className="section-title">Seus Dados</h2>

          <div className="field">
            <label>Nome Completo</label>
            <input type="text" placeholder="Seu nome" value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })} />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="field">
            <label>E-mail</label>
            <input type="email" placeholder="seu@email.com" value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })} />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="field">
            <label>WhatsApp</label>
            <input type="tel" placeholder="(00) 00000-0000" value={form.whatsapp}
              onChange={e => setForm({ ...form, whatsapp: formatWhatsapp(e.target.value) })} />
            {errors.whatsapp && <span className="error">{errors.whatsapp}</span>}
          </div>

          <div className="field">
            <label>Chave PIX <span className="optional">(opcional)</span></label>
            <input type="text" placeholder="CPF, e-mail, telefone ou chave aleatória" value={form.pix}
              onChange={e => setForm({ ...form, pix: e.target.value })} />
            <span className="hint">Você pode enviar depois para o vendedor</span>
          </div>
        </div>

        <div className="card" style={{marginTop: 24}}>
          <h2 className="section-title">Escolha uma Casa</h2>
          <p className="section-sub">Selecione onde você <strong className="highlight">ainda não tem conta</strong></p>

          <div className="houses-grid">
            {HOUSES.map(house => (
              <button key={house.id} type="button"
                className={`house-btn ${form.house === house.id ? "selected" : ""}`}
                onClick={() => { setForm({ ...form, house: house.id }); setErrors({ ...errors, house: null }); }}>
                <img src={house.logo} alt={house.name} className="house-logo" />
                <span className="house-name">{house.name}</span>
              </button>
            ))}
          </div>
          {errors.house && <span className="error" style={{marginTop:12, display:'block'}}>{errors.house}</span>}
        </div>

        <button type="submit" className="btn-primary" style={{marginTop: 8}}>
          Fazer Palpites →
        </button>
      </form>
    </div>
  );
}
