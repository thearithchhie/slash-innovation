const summeryData = [
    {
        title: "TCS London Marathon (UK)",
        icon: "fa fa-map-o",
        distance: "26.2mi",
        promotion: "Free",
        buttonTitle: "Visit site"
    },
    {
        title: "TCS London Marathon (UK)",
        icon: "fa fa-map-o",
        distance: "26.2mi",
        promotion: "Free",
        buttonTitle: "Visit site"
    }
];
const eventDetailSummery = document.getElementsByClassName("event-detail-box-control")[0];
let html = "";
for (let index = 0; index < summeryData.length; index++) {
    const summery = summeryData[index];
    html+="<div class='event-detail-box-item-control'>";
        html+="<h2 class='event-detail-box-item-title'>"+summery.title+"</h2>";
        html+="<i class='"+summery.icon+"' aria-hidden='true'></i>";
        html+="<h3>"+summery.distance+"</h3>";
        html+="<h4>"+summery.promotion+"</h4>";
        html+="<button class='event-detail-summery-button'>"+summery.buttonTitle+"</button>";
    html+="</div>";
}
eventDetailSummery.innerHTML = html;

// Hide and show content (more and less)
const showButton = document.getElementsByClassName("event-detail-route-info-button")[0];
let dots = document.getElementsByClassName("event-detail-route-info-dots")[0];
const moreContent =document.getElementsByClassName("event-detail-route-info-more")[0];
const lessContent =document.getElementsByClassName("event-detail-route-info-more")[0];


// Content (more and less) and arrow up && arrow down
let readMore = `<button class="event-detail-route-info-button">
                    <p class="event-detail-route-info-show-more">Show more</p>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                </button>`;

  let readLess = `<button class="event-detail-route-info-button">
                <p class="event-detail-route-info-show-more">Read less</p>
                <i class="fa fa-angle-up" aria-hidden="true"></i>
                </button>`;

showButton.addEventListener("click", () => {
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        showButton.innerHTML = readMore; 
        moreContent.style.display = "none";
      } else {
        dots.style.display = "none";
        showButton.innerHTML = readLess;
        moreContent.style.display = "inline";
      }
})