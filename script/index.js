const navMain = document.getElementsByClassName("nav-main")[0];
let popupMainMenu = document.getElementsByClassName("popup-main-menu")[0];
const popupCloseIcon = document.getElementsByClassName("popup-close-icon")[0];
// popupMainMenu

// Open popup menu
navMain.addEventListener("click", () => {
  popupMainMenu.style.zIndex = 1;
  popupMainMenu.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

  // popupMainMenu.style.width = "100%";
  // popupMainMenu.style.height = "100%";
});

//* Close popup menu
popupCloseIcon.addEventListener("click", () => {
  popupMainMenu.style.zIndex = -1;
  popupMainMenu.style.backgroundColor = "white";
});
