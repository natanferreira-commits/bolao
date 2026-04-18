import { useState } from "react";
import FormScreen from "./screens/FormScreen";
import PredictionsScreen from "./screens/PredictionsScreen";
import ValidateScreen from "./screens/ValidateScreen";
import WhatsAppScreen from "./screens/WhatsAppScreen";
import DoubleScreen from "./screens/DoubleScreen";
import AdminScreen from "./screens/AdminScreen";
import Footer from "./components/Footer";
import { getVendorCode } from "./config/vendors";
import { saveToSheets } from "./lib/sheets";
import "./App.css";

const IS_ADMIN = window.location.pathname === "/admin";

function generateId() {
  return "BP-" + Math.random().toString(36).toUpperCase().slice(2, 6) +
         "-" + Math.random().toString(36).toUpperCase().slice(2, 6);
}

function App() {
  const [step, setStep] = useState(1);
  const [participant, setParticipant] = useState(null);
  const [entryId, setEntryId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [vendorCode] = useState(() => getVendorCode());
  const [referredBy] = useState(() => new URLSearchParams(window.location.search).get("ref"));


  async function handleFormSubmit(formData) {
    setParticipant(formData);
    window.gtag?.('event', 'cadastro_completo', { casa: formData.house, vendedor: vendorCode });
    setStep(2);
  }

  async function handlePredictionsSubmit(scores) {
    setLoading(true);
    try {
      const id = generateId();
      setEntryId(id);
      window.gtag?.('event', 'bolao_preenchido', { vendedor: vendorCode });
      saveToSheets({ participant, predictions: scores, vendorCode, referredBy, entryId: id }).catch(() => {});
      setStep(3);
    } finally {
      setLoading(false);
    }
  }

  if (IS_ADMIN) return <AdminScreen />;

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-inner">
          <span className="logo">🇧🇷 Bolão <span>Brasileiro</span></span>
          <div className="steps-indicator">
            {[1, 2, 3, 4, 5].map(n => (
              <div key={n} className={`step-dot ${step >= n ? "active" : ""} ${step === n ? "current" : ""}`} />
            ))}
          </div>
        </div>
      </header>

      <main className="main-content">
        {loading && <div className="loading-overlay"><div className="spinner" /></div>}
        {step === 1 && <FormScreen onSubmit={handleFormSubmit} />}
        {step === 2 && <PredictionsScreen onSubmit={handlePredictionsSubmit} onBack={() => setStep(1)} />}
        {step === 3 && <ValidateScreen participant={participant} vendorCode={vendorCode} entryId={entryId} onNext={() => setStep(4)} />}
        {step === 4 && <WhatsAppScreen participant={participant} vendorCode={vendorCode} onNext={() => setStep(5)} />}
        {step === 5 && <DoubleScreen entryId={entryId} vendorCode={vendorCode} onPlayAgain={() => { setParticipant(null); setEntryId(null); setStep(1); }} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
