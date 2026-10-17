(() => {
  const button = document.getElementById("openLetter");
  const paper = document.getElementById("letterPaper");
  if (!button || !paper) return;
  button.addEventListener("click", () => {
    button.classList.add("open");
    paper.hidden = false;
    button.setAttribute("aria-label", "Love letter opened");
    if (window.createHeartBurst) {
      const rect = button.getBoundingClientRect();
      window.createHeartBurst(rect.left + rect.width / 2, rect.top + rect.height / 2);
    }
  });
})();
