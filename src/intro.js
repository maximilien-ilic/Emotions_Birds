const button = document.getElementById("button");
const intro = document.getElementById("intro");
const principal = document.getElementById('principale');
button.addEventListener("click", function() {
  this.classList.add("click");
  intro.classList.add("zoom-out");
    principal.play().catch(e => {
    console.warn("Impossible de jouer le son :", e);
  });
  setTimeout(() => {
intro.style.display = "none";
  }, 800);
});