const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    let x =0;
    for (let i = 0; i < towns.length; i++ ) {
      if (towns[i].name == "Preston"){
let home = document.createElement('section');
let title = document.createElement('p');
let events1 = document.createElement(p);


title.textContent = 'Upcoming events:' + towns[i].events;
events1.textContent = towns[i].March29;

home.appendChild(title);
home.appendChild(events1);


x++;
document.querySelector('div.events').appendChild(home);
      }
    }
  });
 


