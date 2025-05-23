const mobileMenuOpen = document.querySelector(".mobileMenuOpen");
const mobileMenuClose = document.querySelector(".mobileMenuClose");
const overlayOpen = document.querySelector(".overlay");
const mobilenavbar = document.querySelector(".mobilenavbar");

mobileMenuOpen.addEventListener("click", () => {
  mobilenavbar.classList.toggle("active");
  overlayOpen.classList.toggle("active");
  document.body.classList.toggle("noscroll");
});
mobileMenuClose.addEventListener("click", () => {
  mobilenavbar.classList.toggle("active");
  overlayOpen.classList.toggle("active");
  document.body.classList.toggle("noscroll");
});
