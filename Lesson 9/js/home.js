const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
let home = document.createElement('section');
let h1 = document.createElement('h1');
let h2 = document.createElement('h2')
let p = document.createElement('p');
let image =document.createElement('img');

h1.textContent = towns[i].name;
h2.textContent = towns[i].motto;
p.textContent = 'Year founded:' + ' ' + towns[i].yearFounded + ' ' + 'Population:' + ' ' + towns[i].currentPopulation + ' ' + 'Annual Rain Fall:' + ' ' + towns[i].averageRainfall;
image.setAttribute('src', towns[i].photo);

home.appendChild(h1);
home.appendChild(h2);
home.appendChild(p);
home.appendChild(image);

document.querySelector('div.home').appendChild(home);
}
  });
  



