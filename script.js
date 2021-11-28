setInterval(myFunction, 1000);

function myFunction() {
    var today = new Date();
    var hr = today.getHours()
    var min = today.getMinutes()
    var sec = today.getSeconds()
    var am_pm = "AM"
    console.log(time)
    if (hr > 12) {
        hr -= 12;
        am_pm = "PM";
    }
    if (hr == 0) {
        hr = 12;
        am_pm = "AM";
    }
    let length = hr.toString().length;;
    if (length == 1) {
        hr = "0" + hr
    }
    let length2 = min.toString().length;;
    if (length2 == 1) {
        min = "0" + min
    }

    var time = hr + " : " + min + " : " + sec + " " + am_pm;
    var number = ""+time;
    document.getElementById("timee").innerHTML = number;
}
