const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=7d622b58ff7b6823c7020ccafbb6f9d1';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('description').textContent = jsObject.main.description;
    document.getElementById('temp').textContent = jsObject.main.temp;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('speed').textContent = jsObject.main.speed;
    document.getElementById('td').textContent = jsObject.main.temp;
    document.getElementById('td1').textContent = jsObject.main.temp;
    document.getElementById('td2').textContent = jsObject.main.temp;
    document.getElementById('td3').textContent = jsObject.main.temp;
    document.getElementById('td4').textContent = jsObject.main.temp;
    
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
const desc = jsObject.weather[0].description;  // note how we reference the weather array
document.getElementById('imagesrc').getAttribute = imagesrc;// informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);    
  });