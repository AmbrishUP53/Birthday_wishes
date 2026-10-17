(() => {
  const heartContainer = document.getElementById("heartRain");
  const particleContainer = document.getElementById("particleRain");
  const symbols = ["❤️", "💗", "💖", "💕", "💘", "💝", "♡"];
  const small = window.matchMedia("(max-width: 600px)").matches;
  for (let i = 0; i < (small ? 24 : 42); i++) {
    const heart = document.createElement("span"); heart.className = "falling-heart";
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.setProperty("--left", `${Math.random()*100}%`);
    heart.style.setProperty("--size", `${12+Math.random()*18}px`);
    heart.style.setProperty("--duration", `${8+Math.random()*13}s`);
    heart.style.setProperty("--delay", `${-Math.random()*20}s`);
    heart.style.setProperty("--drift", `${-65+Math.random()*130}px`);
    heart.style.setProperty("--heart-opacity", `${.28+Math.random()*.48}`); heartContainer.appendChild(heart);
  }
  const colors = ["#ffd5f0", "#ff8fcf", "#d4b4ff", "#fff0b8"];
  for (let i = 0; i < (small ? 35 : 70); i++) {
    const dot = document.createElement("span"); dot.className = "falling-particle";
    dot.style.setProperty("--left", `${Math.random()*100}%`);
    dot.style.setProperty("--size", `${1+Math.random()*3}px`);
    dot.style.setProperty("--duration", `${5+Math.random()*9}s`);
    dot.style.setProperty("--delay", `${-Math.random()*14}s`);
    dot.style.setProperty("--particle-drift", `${-30+Math.random()*60}px`);
    dot.style.setProperty("--particle-opacity", `${.25+Math.random()*.55}`);
    dot.style.setProperty("--particle-color", colors[Math.floor(Math.random()*colors.length)]);
    particleContainer.appendChild(dot);
  }
  window.createHeartBurst = (x,y) => {
    for (let i=0;i<12;i++) {
      const h=document.createElement("span"); h.className="heart-burst";
      h.textContent=symbols[Math.floor(Math.random()*symbols.length)];
      h.style.left=`${x+(Math.random()*100-50)}px`; h.style.top=`${y+(Math.random()*60-30)}px`;
      h.style.fontSize=`${14+Math.random()*18}px`; document.body.appendChild(h); setTimeout(()=>h.remove(),900);
    }
  };
})();
