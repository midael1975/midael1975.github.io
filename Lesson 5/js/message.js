let dayOfWeek = new Date().getDay();
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
function message () {
    if (dayOfWeek==5) {
        document.getElementById("feedback").style.display = "block";
    }

    else {
        document.getElementById("feedback").style.display = "none";
    }
}

