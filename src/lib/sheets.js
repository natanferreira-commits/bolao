const SHEETS_URL = "https://script.google.com/macros/s/AKfycby21Hq13J3OEy3q86UfkX48_FjK6BYN2cg_UgRHygTq25yzAA1M-FiYS-Hq-tGDXKndSw/exec";

export async function saveToSheets({ participant, predictions, vendorCode, referredBy, entryId }) {
  const payload = {
    entryId,
    name:       participant.name,
    email:      participant.email,
    whatsapp:   participant.whatsapp,
    pix:        participant.pix || "",
    house:      participant.house,
    vendorCode,
    referredBy: referredBy || "",
    predictions,
  };

  // no-cors porque o Apps Script não devolve CORS headers — o dado chega mesmo assim
  await fetch(SHEETS_URL, {
    method:  "POST",
    mode:    "no-cors",
    headers: { "Content-Type": "application/json" },
    body:    JSON.stringify(payload),
  });
}
