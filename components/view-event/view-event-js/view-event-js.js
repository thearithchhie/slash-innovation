// View event menu
const viewEventMenuImage = document.getElementsByClassName(
  "view-event-menu-image"
)[0];

let viewEventMenuUlControl = document.getElementsByClassName(
  "view-event-menu-ul-control"
)[0];

// Path menu image
let getPathMenuArrowDown = document.getElementsByClassName(
  "view-event-menu-image"
)[0];
// Get class button show and less
const getClassButtonShowHide = document.getElementsByClassName(
  "view-event-button-show-more-less"
)[0];

const pathMenuArrowDown = "/assets/arrrow/arrow-down.svg";
const pathMenuArrowUp = "/assets/arrrow/arrow-up.svg";
const pathOrigin = location.origin; // example: http://localhost.com

viewEventMenuImage.addEventListener("click", (e) => {
  // Show and hide menu list
  // let add;
  if (viewEventMenuUlControl.style.display === "none") {
    // add = showMoreLi();
    // hideLessLi();
    getPathMenuArrowDown.src = pathOrigin + pathMenuArrowUp;
    viewEventMenuUlControl.style.display = "block";
  } else {
    // showLessLi();
    // hideLessLi();
    getPathMenuArrowDown.src = pathOrigin + pathMenuArrowDown;
    viewEventMenuUlControl.style.display = "none";
  }
});

//
getClassButtonShowHide.addEventListener("click", (e) => {
  hideLessLi();
  // const add = showMoreLi();
  // console.log(add);
  // if (add) {
  //   hideLessLi();
  // }
  // hideLessLi();
  // const add = showMoreLi();
  // console.log(add);
});

//* Show more and less
// let getUlTag;
function showMoreLi() {
  const menuData = [{ title: "Sport" }, { title: "Sport" }, { title: "Sport" }];
  // console.log(menuData.length);
  let getUlTag;
  for (let i = 0; i < menuData.length; i++) {
    getUlTag = document.getElementsByClassName("view-event-menu-ul-control")[0];

    let liElement = document.createElement("LI");
    liElement.innerText = `${menuData[i].title} ${i}`;
    liElement.style.cssText = `
    color: black;
    text-decoration: none;
    `;
    liElement.classList.add("class-1");
    getUlTag.appendChild(liElement);
  }
  return getUlTag;
}

function hideLessLi() {
  let data = showMoreLi();
  let newElements = document.getElementsByClassName("class-1");
  const parent = document.getElementsByClassName(
    "view-event-menu-ul-control"
  )[0];
  if (data) {
    // console.log(parent;
  }

  // if (newElements.length) {
  //   for (let i = 0; i < newElements.length; i++) {
  //     // data.remove(newElements[i]);
  //     parent.parentNode.removeChild(newElements[i]);
  //   }
  // }

  // console.log(parent);
  // .querySelector(":nth-child(5)")
  // if (data) {
  //   console.log("has data");
  //   console.log(data.classList);
  //   // parent.remove();
  //   // data.removeChild(data);
  // } else {
  //   console.log("has no data");
  // }
}
