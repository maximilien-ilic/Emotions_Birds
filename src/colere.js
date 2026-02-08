function modal(){
  const cochon = document.getElementById("cochon");
  const oiseau = document.getElementById("oiseau");
  const modal = document.getElementById("modal");
  const close = document.getElementById("close");
  const content = document.getElementById("content");

  let etat = 0; 
  function removeOpacity() {
    modal.classList.remove("opacity");
  }

  function changeSize(){
    const modalBox = modal.querySelector(".modal, .modal-big, .modal-screen");
    
    if(etat === 0) {
      modalBox.classList.remove("modal");
      modalBox.classList.add("modal-big");
      
      close.classList.remove("modal-close");
      close.classList.add("modal-close-big");
      
      content.classList.remove("modal-content");
      content.classList.add("modal-content-big");
      
      etat = 1;
    } 
    else if(etat === 1) {
      modalBox.classList.remove("modal-big");
      modalBox.classList.add("modal-screen");
      
      close.classList.remove("modal-close-big");
      close.classList.add("modal-close-screen");
      
      content.classList.remove("modal-content-big");
      content.classList.add("modal-content-screen");
      
      etat = 2;
    } 
    else {
      modalBox.classList.remove("modal-screen");
      modalBox.classList.add("modal");
      
      close.classList.remove("modal-close-screen");
      close.classList.add("modal-close");
      
      content.classList.remove("modal-content-screen");
      content.classList.add("modal-content");
      
      modal.classList.add("opacity");
      
      etat = 0;
    }
  }

  cochon.addEventListener("click", removeOpacity);
  oiseau.addEventListener("click", removeOpacity);
  close.addEventListener("click", changeSize);
}

modal();