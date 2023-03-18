const JSON_URL = './jsons/places.json';

async function getPlaces(url) {
    const response = await fetch(url);
    const data = await response.json();
    displayPlaces(data.places);
}

getPlaces(JSON_URL);


const displayPlaces = (places) => {
    const amount = 4;

    const cards = document.querySelector('#spotlight');

    const goldPlaces = places.filter(item => item.status === 'silver')
    .sort(() => Math.random() - Math.random()).slice(0, amount);
    
    goldPlaces.forEach((place) => {
        let card = document.createElement('div');
        card.classList.add("spotlightItem");
        let img = document.createElement('img');
        img.setAttribute('src', place.img);
        img.setAttribute('alt', `Portait of ${place.name}`);
        img.setAttribute('loading', 'lazy');
        let title = document.createElement('h6');
        title.textContent = place.name;

        // build container
        let container = document.createElement('p');
        
        let email = document.createElement('label');
        email.textContent = `${place.email}`;

        let phone = document.createElement('label');
        phone.textContent = `${place.phone}`;

        let website = document.createElement('a');
        website.textContent = `Website`;
        website.setAttribute("href", place.website);
        let br = document.createElement('br');
        
        
        container.appendChild(email);
        container.appendChild(br);
        container.appendChild(phone);
        container.appendChild(website);

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(container);
        cards.appendChild(card);
    })

}


