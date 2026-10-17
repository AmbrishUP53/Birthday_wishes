// Browser autoplay restrictions mean audio starts only after the visitor's interaction.
// Add a licensed audio file at assets/music/romantic.mp3 to enable background music.
(() => {
  const button = document.getElementById("musicToggle");
  const label = document.getElementById("musicLabel");
  if (!button) return;
  const audio = new Audio("assets/music/Happy_Birthday_Soft_Instrumental_-_Happy_Birthday_background_Music(48k).mp3");
  audio.loop = true;
  audio.volume = 0.35;
  let available = true;
  audio.addEventListener("error", () => { available = false; });
  button.addEventListener("click", async () => {
    if (!available || audio.error) {
      if (label) label.textContent = "Add music file";
      button.title = "Add your licensed audio file at assets/music/romantic.mp3";
      return;
    }
    try {
      if (audio.paused) {
        await audio.play();
        if (label) label.textContent = "Music on";
        button.setAttribute("aria-pressed", "true");
      } else {
        audio.pause();
        if (label) label.textContent = "Music off";
        button.setAttribute("aria-pressed", "false");
      }
    } catch (_) {
      if (label) label.textContent = "Tap again";
    }
  });
})();
