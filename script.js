const rose = document.getElementById("rose");
const card = document.getElementById("card");

let isVisible = false;

rose.addEventListener("click", () => {
  isVisible = !isVisible;
  card.classList.toggle("show", isVisible);
});


