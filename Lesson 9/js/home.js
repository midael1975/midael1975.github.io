const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
let home = document.createElement('div');
let res = document.createElement('section');
let h2 = document.createElement('h2');
let h4 = document.createElement('h4')
let p = document.createElement('p');
let image =document.createElement('img');

h2.textContent = towns[i].name;
h4.textContent = towns[i].motto;
p.textContent = 'Year founded:' + ' ' + towns[i].yearFounded + ' ' + 
'Population:' + ' ' + towns[i].currentPopulation + ' ' + 
  'Annual Rain Fall:' + ' ' + towns[i].averageRainfall;
image.setAttribute('src', `images/${towns[i].photo}`);
image.setAttribute( 'alt', towns[i].name);
image.setAttribute('class', "left");

home.appendChild(h2);
home.appendChild(h4);
home.appendChild(p);
home.appendChild(image);
res.appendChild(home);
        res.appendChild(image);
        res.setAttribute('class',"town");
        home.setAttribute('class', "data");
        if(i%2==0){
            image.setAttribute('class', "derecha");
            home.setAttribute('class', "data2");
        }


document.querySelector('div.home').appendChild(res);
}
  });
  



