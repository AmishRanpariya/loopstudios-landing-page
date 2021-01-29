let openbtn = document.querySelector("#open");
let closebtn = document.querySelector("#close");
let menu = document.querySelector("menu")

openbtn.addEventListener("click", () => {
  openbtn.style.display = "none";
  closebtn.style.display = "block";
  menu.classList.remove("disappear");

});

closebtn.addEventListener("click", () => {
  closebtn.style.display = "none";
  openbtn.style.display = "block";
  menu.classList.add("disappear");
});

menu.addEventListener("click", (e) => {
  closebtn.style.display = "none";
  openbtn.style.display = "block";
  menu.classList.add("disappear");

});