const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=7d622b58ff7b6823c7020ccafbb6f9d1';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('main').textContent = jsObject.main.main;
    document.getElementById('temp').textContent = jsObject.main.temp;
    document.getElementById('wind').textContent = jsObject.main.wind;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('windChill').textContent = jsObject.main.winChill;
    
  
    
    
  });