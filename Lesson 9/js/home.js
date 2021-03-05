const requestURL = 'https://lesson 9/home.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
let home = document.createElement('section');
let h2 = document.createElement('h2');
let h3 = document.createElement('h3')
let p = document.createElement('p');
let image =document.createElement('img');

h2.textContent = towns[i].name;
h3.textContent = towns[i].motto;
p.textContent = 'Year founded:' + ' ' + towns[i].yearFounded + ' ' + 'Population:' + ' ' + towns[i].currentPopulation + ' ' + 'Annual Rain Fall:' + ' ' + towns[i].averageRainfall;
image.setAttribute('src', towns[i].photo);

home.appendChild(h2);
home.appendChild(h3);
home.appendChild(p);
home.appendChild(image);

document.querySelector('div.home').appendChild(home);
}
  });
  



