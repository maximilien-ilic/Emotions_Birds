function dragstartHandler(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function dragoverHandler(ev) {
  ev.preventDefault();
}
const branches = document.querySelector(".branch");
function dropHandler(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const element = document.getElementById(data);

  const dropZone = ev.currentTarget; 
  dropZone.appendChild(element);
  branches.classList.add('lancer2');
  element.classList.add("placed");
  setTimeout(() => {
  switch (element.id) {
    case "blueBird":
      console.log("Action pour blueBird !");
      window.scrollTo({
        left: window.scrollX + window.innerWidth * 2, 
        top: 0,
        behavior: 'smooth'
      });
      break;
    case "redBird":
      console.log("Action pour redBird !");
      window.scrollTo({
        left: window.scrollX + window.innerWidth * 1, 
        top: 0,
        behavior: 'smooth'
      });
      break;
    case "greenBird":
      console.log("Action pour greenBird !");
      window.scrollTo({
        left: window.scrollX + window.innerWidth* 3, 
        top: 0,
        behavior: 'smooth'
      });
      break;
  }
    }, 2000);
}

