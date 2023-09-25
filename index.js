let listLink = document.querySelector(".header .links");
let myNav = document.querySelector(".header .links ul");
let mySpan = document.querySelector(".header .links .icon span:nth-child(2)");

function closeNav() {
  document.getElementById("nav").style.display = "none";
  mySpan.style.width = "75%";
}

listLink.addEventListener("click", () => {
  if (myNav.style.display === "none") {
    myNav.style.display = "block";
    mySpan.style.width = "100%";
  } else {
    myNav.style.display = "none";
    mySpan.style.width = "75%";
  }
});
