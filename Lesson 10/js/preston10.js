const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=7d622b58ff7b6823c7020ccafbb6f9d1';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('description').textContent = jsObject.weather[0].main;
    document.getElementById('temp').textContent = jsObject.main.temp;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('speed').textContent = jsObject.wind.speed;

    let t = parseFloat(document.getElementById("temp").innerHTML);
    let s = parseFloat(document.getElementById("speed").innerHTML);
     
    if (t <= 50 && s > 3) {
      let chill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
    
      chill = document.getElementById("windchill").innerHTML =
        chill.toFixed(2);
    } 
    
    else {
      chill = "Not Applicable";
    
    }  

});

const apiforecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=7d622b58ff7b6823c7020ccafbb6f9d1';

// As before, fetch the forecast data, create the JSON object, console log to make sure it worked.

fetch(apiforecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject); 

    
    const dateObject = new Date()
    const d1 = dateObject.toLocaleString('en-US', {weekday: "long"});
    console.log(d1);
        
    const plus1 = new Date(dateObject)
    plus1.setDate(plus1.getDate() + 1)
    d2 = plus1.toLocaleString('en-US', {weekday: "long"});
    console.log(d2);

    const plus2 = new Date(dateObject)
    plus2.setDate(plus2.getDate() + 2)
    d3 = plus2.toLocaleString('en-US', {weekday: "long"});
    console.log(d3);

    const plus3 = new Date(dateObject)
    plus3.setDate(plus3.getDate() + 3)
    d4 = plus3.toLocaleString('en-US', {weekday: "long"});
    console.log(d4);

    const plus4 = new Date(dateObject)
    plus4.setDate(plus4.getDate() + 4)
    d5 = plus4.toLocaleString('en-US', {weekday: "long"});
    console.log(d5);
 
    // Populate the table with responsive data

      document.getElementById("d1").textContent = d1;  
      document.getElementById("d2").textContent = d2;
      document.getElementById("d3").textContent = d3;
      document.getElementById("d4").textContent = d4;
      document.getElementById("d5").textContent = d5;
   

// Populate the temperature values in the 5 day by ID ??how to sort by date???


  document.getElementById('td').textContent = jsObject.list[6].main.temp + "\°";
  document.getElementById('td1').textContent = jsObject.list[14].main.temp + "\°";
  document.getElementById('td2').textContent = jsObject.list[22].main.temp + "\°";
  document.getElementById('td3').textContent = jsObject.list[30].main.temp + "\°";
  document.getElementById('td4').textContent = jsObject.list[38].main.temp + "\°";


// Use API to change weather icons. Note that there are _two_ arrays to account for here!

    const imagesrc1 = 'https://openweathermap.org/img/w/' + jsObject.list[6].weather[0].icon + '.png';
    const imagesrc2 = 'https://openweathermap.org/img/w/' + jsObject.list[14].weather[0].icon + '.png';
    const imagesrc3 = 'https://openweathermap.org/img/w/' + jsObject.list[22].weather[0].icon + '.png';
    const imagesrc4 = 'https://openweathermap.org/img/w/' + jsObject.list[30].weather[0].icon + '.png';
    const imagesrc5 = 'https://openweathermap.org/img/w/' + jsObject.list[38].weather[0].icon + '.png';
          
    document.getElementById('imagesrc1').textContent = imagesrc1;
    document.getElementById('icon1').setAttribute('src', imagesrc1);
    document.getElementById('icon1').setAttribute('alt', jsObject.list[6].weather[0].description);

    document.getElementById('imagesrc2').textContent = imagesrc2;
    document.getElementById('icon2').setAttribute('src', imagesrc2);
    document.getElementById('icon2').setAttribute('alt', jsObject.list[14].weather[0].description);

    document.getElementById('imagesrc3').textContent = imagesrc3;
    document.getElementById('icon3').setAttribute('src', imagesrc3);
    document.getElementById('icon3').setAttribute('alt', jsObject.list[22].weather[0].description);

    document.getElementById('imagesrc4').textContent = imagesrc4;
    document.getElementById('icon4').setAttribute('src', imagesrc4);
    document.getElementById('icon4').setAttribute('alt', jsObject.list[30].weather[0].description);

    document.getElementById('imagesrc5').textContent = imagesrc5;
    document.getElementById('icon5').setAttribute('src', imagesrc5);
    document.getElementById('icon5').setAttribute('alt', jsObject.list[38].weather[0].description);

    

});

    
