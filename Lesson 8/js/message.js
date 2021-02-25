let dayOfWeek = new Date().getDay();
    if (dayOfWeek==5) {
        document.getElementById("feedback").style.display = "block";
    }

    else {
        document.getElementById("feedback").style.display = "none";
    }


