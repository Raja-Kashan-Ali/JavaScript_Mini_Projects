window.addEventListener('load', calculatetime)

function calculatetime(){
    var date = new Date();
    var dayNumber = date.getDay();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hour >=12 ? 'PM' : 'AM';

    var dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

    hour = hour % 12;
    hour = hour == 12 ? '12':hour;
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;

    document.getElementById("day").innerHTML = dayNames [dayNumber];
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("ampm").innerHTML = ampm;
    document.getElementById("sec").innerHTML = seconds;


    setTimeout(calculatetime, 200);
}

