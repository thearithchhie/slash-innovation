const footerFlag = document.getElementsByClassName("footer-flag")[0];
const footerChangeLanguage = document.getElementsByClassName(
  "footer-change-language-box"
)[0];

function toggleLanguage() {
  if (footerChangeLanguage.style.display === "none") {
    footerChangeLanguage.style.display = "block";
  } else {
    footerChangeLanguage.style.display = "none";
  }
}

footerFlag.addEventListener("click", () => {
  toggleLanguage();
});
