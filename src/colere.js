function modal(){
  const cochon = document.getElementById("cochon");
  const oiseau = document.getElementById("oiseau");
  const modal = document.getElementById("modal");

  function removeOpacity() {
    modal.classList.remove("opacity");
  }

  cochon.addEventListener("click", removeOpacity);
  oiseau.addEventListener("click", removeOpacity);
}

modal();

