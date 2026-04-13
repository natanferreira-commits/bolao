import { useState } from "react";
import FormScreen from "./screens/FormScreen";
import PredictionsScreen from "./screens/PredictionsScreen";
import ResultScreen from "./screens/ResultScreen";
import ConvitesScreen from "./screens/ConvitesScreen";
import AdminScreen from "./screens/AdminScreen";
import { getVendorCode } from "./config/vendors";
import { saveEntry } from "./lib/supabase";
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
    setStep(2);
  }

  async function handlePredictionsSubmit(scores) {
    setLoading(true);
    try {
      const id = generateId();
      try {
        const result = await saveEntry({ participant, predictions: scores, vendorCode, referredBy });
        setEntryId(result?.id || id);
      } catch {
        setEntryId(id);
      }
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
          <span className="logo">⚽ Bolão <span>Arena</span></span>
          <div className="steps-indicator">
            {[1, 2, 3, 4].map(n => (
              <div key={n} className={`step-dot ${step >= n ? "active" : ""} ${step === n ? "current" : ""}`} />
            ))}
          </div>
        </div>
      </header>

      <main className="main-content">
        {loading && <div className="loading-overlay"><div className="spinner" /></div>}
        {step === 1 && <FormScreen onSubmit={handleFormSubmit} />}
        {step === 2 && <PredictionsScreen onSubmit={handlePredictionsSubmit} onBack={() => setStep(1)} />}
        {step === 3 && <ResultScreen participant={participant} vendorCode={vendorCode} entryId={entryId} onViewConvites={() => setStep(4)} />}
        {step === 4 && (
          <ConvitesScreen
            entryId={entryId}
            referralLink={`${window.location.origin}${window.location.pathname}?v=${vendorCode}&ref=${entryId}`}
            onBack={() => setStep(3)}
          />
        )}
      </main>
    </div>
  );
}

export default App;
