// Uses a free public quotes API for fresh English quotes. Local English/Hindi lines are the offline fallback.
window.BIRTHDAY_QUOTES = [
  { type: "en", text: "Some people make ordinary days feel extraordinary. You are one of those people. 💗" },
  { type: "hi", text: "तेरी हँसी मेरी सबसे प्यारी धुन है, और तेरी खुशी मेरी सबसे खूबसूरत दुआ। 🌹" },
  { type: "en", text: "I don't need a perfect world. I just hope your world gives you a thousand reasons to smile." },
  { type: "hi", text: "तुम पास रहो या दूर, मेरी हर दुआ में तुम्हारी जगह हमेशा रहेगी। ❤️" },
  { type: "en", text: "May life be gentle with your heart, generous with your dreams, and full of people who cherish you." },
  { type: "mix", text: "Aaj ka din sirf tumhara hai — keep shining, keep smiling, and never forget how special you are. ✨" }
];
window.fetchBirthdayQuote = async function () {
  try {
    const response = await fetch("https://dummyjson.com/quotes/random", { headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error("Quote API unavailable");
    const data = await response.json();
    if (data && data.quote) return `${data.quote}${data.author ? ` — ${data.author}` : ""} ✨`;
  } catch (error) { console.info("Using a local birthday quote because the quote API is unavailable."); }
  const fallback = window.BIRTHDAY_QUOTES.filter(q => q.type === "en");
  return fallback[Math.floor(Math.random() * fallback.length)].text;
};
