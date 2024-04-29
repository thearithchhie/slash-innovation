const origin = location.origin;
const navMain = document.getElementsByClassName("nav-main")[0];
let popupMainMenu = document.getElementsByClassName("popup-main-menu")[0];
const popupCloseIcon = document.getElementsByClassName("popup-close-icon")[0];
let popupMenuControlBox = document.getElementsByClassName(
  "popup-menu-control-box"
)[0];

// Open popup menu
navMain.addEventListener("click", () => {
  popupMainMenu.style.zIndex = 1;
  popupMainMenu.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

  //* Show popup menu
  popupMenuControlBox.style.display = "block";
});

//* Close popup menu
popupCloseIcon.addEventListener("click", () => {
  popupMainMenu.style.zIndex = -1;
  popupMainMenu.style.backgroundColor = "white";

  //close popup menu
  popupMenuControlBox.style.display = "none";
});

// Link home page
function backToHome() {}

function viewEvent() {
  document.location.href = "components/view-event/view-event.html";
}

function viewEventDetail() {
  document.location.href = "/components/view-event/event-detail/event-detail.html";
}
