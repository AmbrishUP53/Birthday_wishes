(() => {
  const cake = document.getElementById("cakeWrap");
  const button = document.getElementById("makeWish");
  const hint = document.getElementById("wishHint");
  const modal = document.getElementById("birthdayModal");
  const close = document.getElementById("closeBirthdayModal");
  const continueButton = document.getElementById("continueBirthday");
  const openModal = () => {
    if (modal) modal.hidden = false;
    if (window.createHeartBurst) window.createHeartBurst(innerWidth / 2, innerHeight / 2);
  };
  const closeModal = () => { if (modal) modal.hidden = true; };
  if (button) button.addEventListener("click", () => {
    if (cake) cake.classList.add("blown");
    if (hint) hint.textContent = "Your birthday wish is on its way to the universe! ✨";
    button.textContent = "Birthday wishes sent 💖";
    if (window.createHeartBurst) {
      const rect = (cake || button).getBoundingClientRect();
      window.createHeartBurst(rect.left + rect.width / 2, rect.top + rect.height / 2);
    }
    openModal();
  });
  if (close) close.addEventListener("click", closeModal);
  if (continueButton) continueButton.addEventListener("click", closeModal);
  if (modal) modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
})();
