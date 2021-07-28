
setInterval(() => {
    var d = new Date();
var hourt =d.getHours();
var min = d.getMinutes();
var sec = d.getSeconds();
var todaydate = d.getDate()
var yearis = d.getFullYear();
var monthis = d.getMonth() +1;
var date_today = document.querySelector(".dateoftoday");
var clockhour = document.querySelector(".hour");
var clockmin = document.querySelector(".minute");
var clocksec = document.querySelector(".second");
var year_ = document.querySelector(".year");
var month_ =  document.querySelector(".month");
     clockhour.innerHTML = hourt;
     clockmin.innerHTML = min;
     clocksec.innerHTML = sec;
     date_today.innerHTML = todaydate;
     year_.innerHTML = yearis;
     month_.innerHTML = monthis
     var dayoftoday = document.querySelector(".day");
     var dayis = d.getDay();
     var weekday;
    switch(dayis)
    {
        case 1 :
            weekday = "Monday";
            break;
        case 2 :
            weekday = "Tuesday";
            break;
        case 3 :
            weekday = "Wenesday";
            break;
        case 4 :
            weekday = "Thrusday";
            break;
        case 5 :
            weekday = "Friday";
            break;
        case 6 :
            weekday = "Saturday";
            break;
        case 7 :
            weekday = "sunday";
            break;


    }
    dayoftoday.innerHTML = weekday;
}, 1000);

