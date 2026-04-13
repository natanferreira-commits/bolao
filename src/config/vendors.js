// Cada vendedor tem um código único
// URL com código: bolao.site/?v=CODIGO
// URL sem código: sistema randomiza 25% cada
// Links das casas são globais → ver src/config/houses.js

export const VENDORS = {
  V001: {
    name: "Talya",
    whatsappUrl: "https://api.whatsapp.com/send/?phone=5521973065809&text=Quero+informa%C3%A7%C3%B5es+sobre+como+validar+meu+bol%C3%A3o%21&type=phone_number&app_absent=0",
  },
  V002: {
    name: "João",
    whatsappUrl: "https://wa.me/5521990386855?text=Quero%20informa%C3%A7%C3%B5es%20sobre%20como%20validar%20meu%20bol%C3%A3o!",
  },
  V003: {
    name: "Marcio",
    whatsappUrl: "https://wa.me/5521993779499?text=Quero%20informa%C3%A7%C3%B5es%20sobre%20como%20validar%20meu%20bol%C3%A3o!",
  },
  V004: {
    name: "Isabela",
    whatsappUrl: "https://wa.me/5521972970642?text=Quero%20informa%C3%A7%C3%B5es%20sobre%20como%20validar%20meu%20bol%C3%A3o!",
  },
};

const VENDOR_CODES = Object.keys(VENDORS);
const LS_KEY = "bolao_vendor";

export function getVendorCode() {
  const params = new URLSearchParams(window.location.search);
  const fromUrl = params.get("v")?.toUpperCase();

  // 1. Veio com código na URL → usa e salva
  if (fromUrl && VENDORS[fromUrl]) {
    localStorage.setItem(LS_KEY, fromUrl);
    return fromUrl;
  }

  // 2. Já tem sessão salva → mantém
  const saved = localStorage.getItem(LS_KEY);
  if (saved && VENDORS[saved]) return saved;

  // 3. Tráfego orgânico → sorteia 25% cada e salva
  const random = VENDOR_CODES[Math.floor(Math.random() * VENDOR_CODES.length)];
  localStorage.setItem(LS_KEY, random);
  return random;
}

export function getVendor(code) {
  return VENDORS[code] || VENDORS[VENDOR_CODES[0]];
}
