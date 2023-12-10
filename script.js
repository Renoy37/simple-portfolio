function toggleMenu() {
  const hamburgerMenu = document.querySelector(".list");
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  hamburgerMenu.classList.toggle("show");
  hamburgerIcon.classList.toggle("active");
}

document.querySelectorAll(".items").forEach((item) => {
  item.addEventListener("click", () => {
    const hamburgerMenu = document.querySelector(".list");
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    hamburgerMenu.classList.remove("show");
    hamburgerIcon.classList.remove("active");
  });
});
