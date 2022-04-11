let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".sidebar li");
let crab = document.querySelector(".crab");
let menuItem = document.querySelector(".menu-item i");
let sidebar = document.querySelector(".sidebar");

window.addEventListener("mousemove", cursor);

menuItem.addEventListener("click", () => {
  menuItem.classList.toggle("fa-xmark");
  sidebar.classList.toggle('active')
});

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

navLinks.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    link.classList.remove("hovered-link");
  });
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    link.classList.add("hovered-link");
  });
  crab.addEventListener("mouseover", () => {
    crab.classList.add("crab-gone");
  });
  crab.addEventListener("mouseleave", () => {
    crab.classList.remove("crab-gone");
  });
});
