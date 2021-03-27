const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=10.066253514182149&lon=69.34190859059727&units=imperial&exclude=hourly,daily&appid=7d622b58ff7b6823c7020ccafbb6f9d1";
fetch(apiURL)
  .then(response => response.json())
  .then(jsObject => {
    console.log(jsObject);
    document.getElementById("description").textContent = jsObject.daily;
    document.getElementById("temp").textContent = jsObject.current.temp;
    document.getElementById("humidity").textContent = jsObject.current.humidity;
  });

const apiforecastURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=10.066253514182149&lon=69.34190859059727&units=imperial&appid=7d622b58ff7b6823c7020ccafbb6f9d1';
fetch(apiforecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const dayofWeek = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'];
    const form = jsObject.daily
    
    
    let day = 0;
    let i = 0;
  
    for ( i = 0; i < form.length; i++ ) {
       let d = new Date (form[i].daily);
  console.log(d);
       document.getElementById(`dayofweek${day+1}`).textContent = d.getDay();
       document.getElementById(`forecast${day+1}`).textContent = form[day].current;

       const imagesrc = 'https://openweathermap.org/img/w/' + form[day].weather[0].icon + '.png';

       document.getElementById(`imagesrc${day+1}`).textContent = imagesrc;
       document.getElementById(`icon${day+1}`).setAttribute('src', imagesrc);
       document.getElementById(`icon${day+1}`).setAttribute('alt', form[0].weather[0].description);
       day++;
  
    }
  })