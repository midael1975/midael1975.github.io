const apiURL = 'https://pro.openweathermap.org/data/2.5/forecast/hourly?id=560447&units=imperial&appid=7d622b58ff7b6823c7020ccafbb6f9d1'
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
  
  });