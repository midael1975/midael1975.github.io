const apiforecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=7d622b58ff7b6823c7020ccafbb6f9d1';
fetch(apiforecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const dayofWeek = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'];
    const form = jsObject.list.filter((element) =>
      element.dt_txt.includes("18:00:00")
    );
    let day = 0;
    let i = 0;
  
    for ( i = 0; i < form.length; i++ ) {
       let d = new Date (form[i].dt_txt);
  console.log(d);
       document.getElementById(`dayofweek${day+1}`).textContent = dayofWeek [d.getDay()];
       document.getElementById(`forecast${day+1}`).textContent = form[day].main.temp;

       const imagesrc = 'https://openweathermap.org/img/w/' + form[day].weather[0].icon + '.png';

       document.getElementById(`imagesrc${day+1}`).textContent = imagesrc;
       document.getElementById(`icon${day+1}`).setAttribute('src', imagesrc);
       
       day++;
  
    }
  })

  

