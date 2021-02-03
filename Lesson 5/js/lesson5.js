const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('design').textContent = new Date().toLocaleDateString('en-us', options);

function toggleMenu () {
    document.getElementById('mostrar').classList.toggle('hide');
}

var d = new Date();
document.getElementById("fullYear").innerHTML = d.getFullYear();


function day () {
    let dayOfWeek = new Date().getDay();
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let feedbackElement = document.getElementById("feedback");

    let message;
    if (dayOfWeek == 4) {
        message =  "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion."
    
    }
    feedbackElement.style.display = "block";
    // add a class to move everything down so our message doesn't cover it.
    document.body.classList.toggle("moveDown");
    feedbackElement.innerHTML = message;
}


