const button = document.getElementById("button");


button.addEventListener("click", function() {
  this.classList.add("click");
  document.body.classList.add("zoom-out");
  
  setTimeout(() => {
    window.location.href = "index.html";
  }, 800);
});