 // Sort view events 
const socialMedias = [
    {
        icon: "fa fa-link",
        backgroundColorSocial: "",
        title: "Anyone with the link can view",
        subTitle: "sub title 1"
    },
    {
        icon: "fa fa-envelope",
        backgroundColorSocial: "",
        title: "Email",
        subTitle: "sub title 2"
    },
    {
        icon: "fa fa-facebook-official",
        backgroundColorSocial: "",
        title: "Facebook",
        subTitle: "sub title 2"
    },
    {
        icon: "fa fa-twitter",
        backgroundColorSocial: "",
        title: "Twitter",
        subTitle: "sub title 2"
    }
];

 const eventDetailSharedButton = document.getElementsByClassName("event-detail-slide-button-shared")[0];
const getPopupSocial = document.getElementsByClassName("view-event-detail-popup-social-main")[0];
const sortRadioControlItem = document.getElementsByClassName("view-event-detail-social-control")[0];
eventDetailSharedButton.addEventListener("click", () => {
  getPopupSocial.style.display = "block";
  let html = "";
  if(socialMedias.length) {
      for (let index = 0; index < socialMedias.length; index++) {
        let social = socialMedias[index];
        html+= "<div class='view-event-detail-social-control-item'>"
            html+= "<div class='view-event-detail-icon-link-control'>";
                html+= "<i class='"+social.icon+" view-detail-social-link-icon' aria-hidden='true'></i>";
            html+="</div>";
                html+="<div class='view-event-detail-social-control-content-title'>";
                    html+="<span class='view-event-detail-social-control-box'>";
                        html+="<h3 class='view-event-detail-social-title'>"+social.title+"</h3>";
                        // html+="<h6>"+social.subTitle+"</h6>";
                    html+="</span>";
                html+="</div>";
        html+= "</div>";
    }
  }
  sortRadioControlItem.innerHTML = html;
});

// close social
const iconSocialClose = document.getElementsByClassName("view-event-detail-close-icon-control")[0];
iconSocialClose.addEventListener("click", () => {
    getPopupSocial.style.display = "none"; 
});

// By events
const byEvents = [
    {
        icon: "fa fa-map-o",
        title: "TCS London Marathon (UK) and TCS London Marathon (International)",
        subTitle: "View detail",
        idLinkHref: "#id-event-detail-summery"
    },
    {
        icon: "fa fa-calendar-o",
        title: "Sun, 27 Apr 202",
        subTitle: "View logistics",
        idLinkHref: "#id-event-detail-logistic"
    },
    {
        icon: "fa fa-map-marker",
        title: "London, United Kingdom",
        subTitle: "View location",
        idLinkHref: "#id-event-detail-map"
    }
];
const byEvent = document.getElementsByClassName("event-detail-by-event-control")[0];
let htmlByEvent = "";
if(byEvents.length) {
    for (let index = 0; index < byEvents.length; index++) {
        const byEvent = byEvents[index];
        htmlByEvent+= "<div class='event-detail-by-event-item-control'>";
            htmlByEvent+= "<div class='event-detail-by-event-icon-event-item'>";
                htmlByEvent+="<i class='"+byEvent.icon+" event-detail-by-event-all-icon' aria-hidden='true'></i>";
                htmlByEvent+="<h2 class='event-detail-by-event-title'>"+byEvent.title+"</h2>";
                htmlByEvent+="<a class='event-detail-by-event-sub-title' href='"+byEvent.idLinkHref+"'>"+byEvent.subTitle+"</a>";
            htmlByEvent+= "</div>";
        htmlByEvent+= "</div>";
    }
}
byEvent.innerHTML = htmlByEvent;
// End by events


// Event detail card
const cards = [
    {
        image: "../../../assets/event/event-detail/card-image/image-card-box-1.webp",
        title: "Battersea Park Running Festival - November 2024",
        subTitle: "Sat, 23 Nov 2024 - London"
    },
    {
        image: "../../../assets/event/event-detail/card-image/image-card-box-2.webp",
        title: "Battersea Park Running Festival - November 2024",
        subTitle: "Sat, 23 Nov 2024 - London"
    },
    {
        image: "../../../assets/event/event-detail/card-image/image-card-box-3.webp",
        title: "Battersea Park Running Festival - November 2024",
        subTitle: "Sat, 23 Nov 2024 - London"
    },
    {
        image: "../../../assets/event/event-detail/card-image/image-card-box-2.webp",
        title: "Battersea Park Running Festival - November 2024",
        subTitle: "Sat, 23 Nov 2024 - London"
    },
    {
        image: "../../../assets/event/event-detail/card-image/image-card-box-5.jpg",
        title: "Battersea Park Running Festival - November 2024",
        subTitle: "Sat, 23 Nov 2024 - London"
    }
];
const cardControl = document.getElementsByClassName("event-detail-card-control")[0];
let htmlCard = "";
for (let index = 0; index < cards.length; index++) {
    const card = cards[index];
    if(cards.length) {
            htmlCard+="<a href='#' class='event-detail-card-link'>";
            htmlCard+="<div class='event-detail-card-box-control'>";
                htmlCard+="<div class='event-detail-card-box-item-control'>";
                    htmlCard+="<div class='event-detail-card-box-item'>";
                        htmlCard+="<div class='event-detail-card-box-item-image-control'>";
                            htmlCard+=" <img class='event-detail-card-box-item-image' src='"+card.image+"' alt='"+card.title+"'>";
                        htmlCard+="</div>";
                        htmlCard+="<div class='event-detail-card-box-title-control'>";
                            htmlCard+="<h2 class='event-detail-card-box-title'>"+card.title+"</h2>";
                            htmlCard+="<p class='event-detail-card-box-sub-title'>"+card.title+"</p>";
                            htmlCard+="<div class='event-detail-card-box-star-control'>";
                                htmlCard+="<div class='event-detail-card-box-star-item'>";
                                    htmlCard+="<i class='fa fa-star' aria-hidden='true'></i>";
                                    htmlCard+="</div>";
                                htmlCard+="<div>";
                                    htmlCard+="<h5 class='event-detail-card-box-title'>4.0</h5>";
                                    htmlCard+="<h6 class='event-detail-card-box-sub-title'>(12)</h6>";
                                htmlCard+="</div>";
                            htmlCard+="</div>";
                        htmlCard+="</div>";
                    htmlCard+="</div>";
                htmlCard+="</div>";
            htmlCard+="</div>";
            htmlCard+="</a>";
    }
    
}
cardControl.innerHTML = htmlCard;
// End event detail card