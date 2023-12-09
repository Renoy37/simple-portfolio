function toggleMenu() {
  const hamburgerMenu = document.querySelector(".list");
  hamburgerMenu.classList.toggle("show");
}

document.querySelectorAll(".items").forEach((item) => {
  item.addEventListener("click", () => {
    const hamburgerMenu = document.querySelector(".list");
    hamburgerMenu.classList.remove("show");
  });
});
