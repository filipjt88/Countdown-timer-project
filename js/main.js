const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

let giveaway = document.querySelector(".giveaway");
let deadline  = document.querySelector(".deadline");
let items       = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2023,8,14,11,30,0);

let year      = futureDate.getFullYear();
let hours    = futureDate.getHours();
let minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
let date = futureDate.getDate();

let weekday =  weekdays[futureDate.getDay()];


giveaway.textContent = `Giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}: ${minutes} am`;

let futureTime = futureDate.getTime();

function getRemainingTime() {
    let today = new Date().getTime();
    const t = futureTime - today;
    let oneDay = 24 * 60 * 60 * 1000;
    let oneHour = 60 * 60 * 1000;
    let oneMinute = 60 * 1000;
    let days = t  / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);
    
    let values = [days,hours,minutes,seconds];

    function format(item) {
        if(item < 10) {
            return item = `0${item}`;
        }
        return item;
    }

    items.forEach(function(item,index) {
        item.innerHTML = format(values[index]);
    });

    if(t < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired</h4>`;
    }
}

let countdown = setInterval(getRemainingTime,1000);

getRemainingTime();