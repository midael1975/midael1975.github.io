function getForescast() {
const apiforecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=7d622b58ff7b6823c7020ccafbb6f9d1';
fetch(apiforecastURL)
.then((response) => response.json())
.then((jsonObject) => {
  const preston = jsonObject['preston'];
  let temp;
  let fecha;
  let day;
  let x =1;
  for (let i = 0; i < preston.list.length-1; i++ ) {
    if (preston[i].dt_tx == '18.00.00'){
temp = preston.list[i].main.temp;
fecha = preston.list[i].dt_tx;
day = dayName(fecha);
let dia = "0" + x;
let day = "day" + x;
let icon = "icon" + x;

document.getElementById(day).textContent = temp;

const imagesrc = 'https://openweathermap.org/img/w/' + preston.list[i].weather[0].icon + '.png';
const desc = preston.list[i].weather[0].description;

document.getElementById(icon).setAttribute('src', imagesrc);
document.getElementById(icon).setAttribute('alt', desc);
x++;

    }
  }
});

}


function dayName(fecha){

  const days = [
  'Sun.',
  'Mon.',
  'Tue.',
  'Wen.',
  'Thu.',
  'Fri.',
  'Sat.',
  
  ];
  const numberDay = new Date(fecha).getDay();
  const nameDay = days[numberDay];

}


