import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

const configured = !!(SUPABASE_URL && SUPABASE_ANON_KEY);
export const supabase = configured ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

// Salva participante + palpites
export async function saveEntry({ participant, predictions, vendorCode, referredBy }) {
  if (!supabase) throw new Error("Supabase not configured");
  const { data, error } = await supabase
    .from("participants")
    .insert([{
      name: participant.name,
      email: participant.email,
      whatsapp: participant.whatsapp,
      pix: participant.pix || null,
      house: participant.house,
      vendor_code: vendorCode,
      referred_by: referredBy || null,
      predictions: predictions, // jsonb
    }])
    .select()
    .single();

  if (error) throw error;
  return data;
}

// Conta quantos convites um participante fez
export async function countReferrals(participantId) {
  const { count } = await supabase
    .from("participants")
    .select("*", { count: "exact", head: true })
    .eq("referred_by", participantId);
  return count || 0;
}
