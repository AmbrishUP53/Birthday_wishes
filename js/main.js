(() => {
  const scenes = [...document.querySelectorAll(".scene")];
  const showScene = (id) => {
    const isWelcome = id === "welcomeScene";
    const shayari = document.getElementById("shayariPanel");
    const musicButton = document.getElementById("musicToggle");
    const footer = document.getElementById("siteFooter");
    if (shayari) shayari.hidden = isWelcome;
    if (musicButton) musicButton.hidden = isWelcome;
    if (footer) footer.hidden = isWelcome;
    scenes.forEach(scene => {
      const active = scene.id === id;
      scene.classList.toggle("active", active);
      scene.hidden = !active;
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const byId = id => document.getElementById(id);
  const quoteText = byId("quoteText");
  const quoteNumber = byId("quoteNumber");
  const quoteCard = document.querySelector(".quote-card");
  const quotes = window.BIRTHDAY_QUOTES || [];
  let quoteIndex = 0;
    const audio = new Audio("assets/music/Happy_Birthday_Soft_Instrumental_-_Happy_Birthday_background_Music(48k).mp3");

audio.volume = 0.25;
  const renderQuote = () => {
    if (!quotes.length) return;
    quoteCard.classList.remove("revealing");
    // Force reflow so the reveal animation can replay.
    void quoteCard.offsetWidth;
    quoteCard.classList.add("revealing");
    quoteText.textContent = quotes[quoteIndex].text;
    quoteNumber.textContent = `${String(quoteIndex + 1).padStart(2, "0")} / ${String(quotes.length).padStart(2, "0")}`;
    byId("nextQuote").textContent = quoteIndex === quotes.length - 1 ? "Read again ↻" : "Reveal next ♡";
    byId("prevQuote").disabled = quoteIndex === 0;
    byId("prevQuote").style.opacity = quoteIndex === 0 ? ".45" : "1";
  };
  byId("openSurprise").addEventListener("click", event => {
    if (window.createHeartBurst) window.createHeartBurst(event.clientX || innerWidth / 2, event.clientY || innerHeight / 2);
    audio.play().catch((error) => {
    console.log("Music could not start:", error);
});
    showScene("birthdayScene");
  });
  byId("toQuotes").addEventListener("click", async () => { quoteIndex = 0; renderQuote(); showScene("quotesScene");
    const quoteEl = byId("quoteText");
    if (quoteEl && window.fetchBirthdayQuote) { quoteEl.textContent = "Finding a little quote for you… 💗"; quoteEl.setAttribute("aria-busy", "true");
      const liveQuote = await window.fetchBirthdayQuote(); quoteEl.textContent = liveQuote; quoteEl.removeAttribute("aria-busy");
      byId("quoteNumber").textContent = "A LITTLE EXTRA LOVE";
    }
  });
  byId("nextQuote").addEventListener("click", event => {
    quoteIndex = quoteIndex >= quotes.length - 1 ? 0 : quoteIndex + 1;
    renderQuote();
    if (window.createHeartBurst) window.createHeartBurst(event.clientX || innerWidth / 2, event.clientY || innerHeight / 2);
  });
  byId("prevQuote").addEventListener("click", () => { quoteIndex = Math.max(0, quoteIndex - 1); renderQuote(); });
  byId("toLetter").addEventListener("click", () => showScene("letterScene"));
  byId("restartExperience").addEventListener("click", () => {
    byId("cakeWrap").classList.remove("blown");
    if (byId("birthdayModal")) byId("birthdayModal").hidden = true;
    byId("makeWish").disabled = false;
    byId("makeWish").textContent = "Make a wish ✨";
    byId("wishHint").textContent = "Tap the button to blow out the candles.";
    byId("openLetter").classList.remove("open");
    byId("letterPaper").hidden = true;
    showScene("welcomeScene");
  });
  renderQuote();
})();
