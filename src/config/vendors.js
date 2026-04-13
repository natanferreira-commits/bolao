// Cada vendedor tem um código único e seus links afiliados por casa
// URL de acesso: bolao.site/?v=CODIGO
export const VENDORS = {
  A7K3X: {
    name: "Vendedor 1",       // Nome interno (não exibido ao lead)
    whatsapp: "5511999990001", // Número com DDI+DDD
    links: {
      betmgm:       "https://betmgm.com/ref/A7K3X",
      esportivabet: "https://esportivabet.com/ref/A7K3X",
      novibet:      "https://novibet.com/ref/A7K3X",
      sportingbet:  "https://sportingbet.com/ref/A7K3X",
      stake:        "https://stake.com/ref/A7K3X",
      superbet:     "https://superbet.com/ref/A7K3X",
    },
  },
  B2M8P: {
    name: "Vendedor 2",
    whatsapp: "5511999990002",
    links: {
      betmgm:       "https://betmgm.com/ref/B2M8P",
      esportivabet: "https://esportivabet.com/ref/B2M8P",
      novibet:      "https://novibet.com/ref/B2M8P",
      sportingbet:  "https://sportingbet.com/ref/B2M8P",
      stake:        "https://stake.com/ref/B2M8P",
      superbet:     "https://superbet.com/ref/B2M8P",
    },
  },
  C9R1T: {
    name: "Vendedor 3",
    whatsapp: "5511999990003",
    links: {
      betmgm:       "https://betmgm.com/ref/C9R1T",
      esportivabet: "https://esportivabet.com/ref/C9R1T",
      novibet:      "https://novibet.com/ref/C9R1T",
      sportingbet:  "https://sportingbet.com/ref/C9R1T",
      stake:        "https://stake.com/ref/C9R1T",
      superbet:     "https://superbet.com/ref/C9R1T",
    },
  },
  D4W6N: {
    name: "Vendedor 4",
    whatsapp: "5511999990004",
    links: {
      betmgm:       "https://betmgm.com/ref/D4W6N",
      esportivabet: "https://esportivabet.com/ref/D4W6N",
      novibet:      "https://novibet.com/ref/D4W6N",
      sportingbet:  "https://sportingbet.com/ref/D4W6N",
      stake:        "https://stake.com/ref/D4W6N",
      superbet:     "https://superbet.com/ref/D4W6N",
    },
  },
  E5J2Q: {
    name: "Vendedor 5",
    whatsapp: "5511999990005",
    links: {
      betmgm:       "https://betmgm.com/ref/E5J2Q",
      esportivabet: "https://esportivabet.com/ref/E5J2Q",
      novibet:      "https://novibet.com/ref/E5J2Q",
      sportingbet:  "https://sportingbet.com/ref/E5J2Q",
      stake:        "https://stake.com/ref/E5J2Q",
      superbet:     "https://superbet.com/ref/E5J2Q",
    },
  },
};

// Código padrão se o lead acessar sem ?v= (fallback)
export const DEFAULT_VENDOR_CODE = "A7K3X";

export function getVendor(code) {
  return VENDORS[code] || VENDORS[DEFAULT_VENDOR_CODE];
}

export function getVendorCode() {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("v")?.toUpperCase();
  return VENDORS[code] ? code : DEFAULT_VENDOR_CODE;
}
