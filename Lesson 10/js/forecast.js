const apiforestURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=7d622b58ff7b6823c7020ccafbb6f9d1';
fetch(apiforestURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
  
  });