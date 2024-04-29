let allEvents = [
  {
    title: "Running",
    image: `${origin}/assets/search-image/main-running-1.webp`,
    date: dateCustom(),
    subTitle: "Half Marathon",
    country: {
      code: "US",
      title: "location title",
    },
    event: {
      title: "event title",
    },
    booking: {
      title: "booking event",
    }
  },
  {
    title: "Half",
    image: `${origin}/assets/search-image/running-2.jpeg`,
    date: dateCustom(),
    subTitle: "Half Marathon",
    country: {
      code: "US",
      title: "location title",
    },
    event: {
      title: "event title",
    },
    booking: {
      title: "booking event",
    }
  },
  {
    title: "Half Marathon",
    image: `${origin}/assets/search-image/girl-running-1.jpeg`,
    date: dateCustom(),
    subTitle: "Half Marathon",
    country: {
      code: "US",
      title: "location title",
    },
    event: {
      title: "event title",
    },
    booking: {
      title: "booking event",
    }
  },
  {
    title: "Half Marathon",
    image: `${origin}/assets/search-image/girl-running-1.jpeg`,
    date: dateCustom(),
    subTitle: "Half Marathon",
    country: {
      code: "US",
      title: "location title",
    },
    event: {
      title: "event title",
    },
    booking: {
      title: "booking event",
    }
  },
];

let ul = document.getElementsByClassName("view-event-search-list")[0];
function renderListsEvent(events) {
  let html = "";
  for (index in events) {
    const event = events[index];
      html += "<li class='view-event-search-item' onclick='viewEventDetail()'>";
        html += "<div class='view-event-search-control-item'>";
          html += "<img class='view-event-search-image' src="+event.image+" />";
            html+= "<div class='view-event-control-content-favorite'>";
              html+= "<div class='view-event-search-title'>";
                html += "<div class='view-event-search-title-main-control'>";
                  html += "<div class='search-date'>"+event.date+"</div>";
                  html += "<h1 class='search-title'>"+event.title+"</h1>";
                    html+= "<div class='search-location-control'>";
                      html += "<i class='fa fa-map-marker view-event-map-marker' aria-hidden='true'></i>";
                      html += "<h2 class='country-title-code'>"+event.country.title+","+event.country.code+"</h2>";
                    html+= "</div>";
                    html+="<div class='search-event-control'>";
                      html+="<i class='fa fa-map-marker view-event-map-marker' aria-hidden='true'></i>";
                      html+="<h2 class='search-event-control-title'>"+event.event.title+"</h2>";
                    html+="</div>";
                    html+="<div>";
                      html+="<button class='view-event-booking-button'>"+event.booking.title+"</button>";
                    html+="</div>";
                html += "</div>";
              html+= "</div>";
                html+="<div class='view-event-search-icon-favorite'>";
                  html+= "<i class='fa fa-heart-o view-event-favorite-heart' aria-hidden='true'></i>";
                html+="</div>";
            html+= "</div>";
        html+= "</div>";
      html += "</li>";
  }
  ul.innerHTML = `<div class="view-event-search-control">${html}</div>`;
};

renderListsEvent(allEvents);
// Total view events
const totalEvent = document.getElementsByClassName("search-total-title")[0];
// lets filters it on input
let inputEvent = document.getElementsByClassName("view-event-search-input")[0];
totalEvent.textContent = allEvents.length;
let filterAllEvents = function () {
  keyword = inputEvent.value.toLowerCase();
  filtered_events = allEvents.filter(function (event) {
    event = event.title.toLowerCase();
    return event.indexOf(keyword) > -1;
    
  });
  totalEvent.textContent = filtered_events.length;
  renderListsEvent(filtered_events);
};
inputEvent.addEventListener("keyup", filterAllEvents);

// Sort view events 
const buttonSorting = document.getElementsByClassName("view-event-button-sorting")[0];
const getPopupSort = document.getElementsByClassName("view-event-popup-sort-main")[0];
const sortListButton = document.getElementsByClassName("sort-list-control")[0];
const sortCloseButton = document.getElementsByClassName("fa-view-event-close-icon")[0];
const sortRadioControlItem = document.getElementsByClassName("sort-list-control")[0];

buttonSorting.addEventListener("click", () => {
  getPopupSort.style.display = "block";
  // List events base
  let htmlRadioList = "";
  for (let i = 0; i <allEvents.length; i++) {
    let event = allEvents[i];
    htmlRadioList+="<div>"; 
      htmlRadioList += "<label class='view-event-sort-radio-control-item view-event-sort-title'> "+event.title+" ";
        htmlRadioList += "<input type='radio' name='view-event-sort-input' id="+i+" value="+event.title+" onchange='getSortInputValue(this.value)'>";
      htmlRadioList += "</label>";
    htmlRadioList += "</div>";
  }
  sortRadioControlItem.innerHTML = htmlRadioList;
});



// Close sort button
sortCloseButton.addEventListener("click", () => {
  getPopupSort.style.display = "none";
});

function getSortInputValue (eventTitle) {
  const filterEvents = allEvents.filter((event) => {
    event = event.title.toLowerCase();
    return event.indexOf(eventTitle.toLowerCase()) > -1;
  });
    // Render form again
    if(filterEvents.length) {
      renderListsEvent(filterEvents);
    }
};

// Apply button
const getValueApplyButton = document.getElementsByClassName("view-event-popup-sort-button-apply")[0]; 
getValueApplyButton.addEventListener('click', () => {
  getPopupSort.style.display = "none";
});

// custom date
function dateCustom() {
  const date = new Date();
  const dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  /**
   * Get the day of the week (0 for Sunday, 1 for Monday, etc.)
   */
  const dayOfWeek = date.getDay();
  // Get the day of the month
  const dayOfMonth = date.getDate();
  // Get the month
  const month = date.getMonth();
  // Get the year
  const year = date.getFullYear();
  // Format the date string
  return `${dayNames[dayOfWeek]}, ${dayOfMonth} ${monthNames[month]} ${year}`;
}
