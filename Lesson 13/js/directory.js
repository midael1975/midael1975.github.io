const requestURL = 'json/directory.json';

function traer() {
    fetch(requestURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonObject) {
            console.table(jsonObject); // temporary checking for valid response and data parsing
            const business = jsonObject['business'];
            for (let i = 0; i < business.length; i++) {
                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                let p = document.createElement('p');
                let image = document.createElement('img');

                h2.textContent = business[i].name;
                p.textContent = 'Contact Information:' + ' ' + business[i].contactinfo;
                image.setAttribute('src', business[i].logo);
                image.setAttribute('alt', business[i].name);

                card.appendChild(h2);
                card.appendChild(p);
                card.appendChild(image);

                document.querySelector('div.cards').appendChild(card);
            }
        });

}