const url = './jsons/places.json';

async function getPlaces(url) {
    const response = await fetch(url);
    const data = await response.json();
    displayPlaces(data.places);
}

getPlaces(url);

const displayPlaces = (places) => {
    const cards = document.querySelector('div.cards-grid');

    places.forEach((place) => {
        let card = document.createElement('section');
        let title = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let portrait = document.createElement('img');

        title.textContent = place.name;

        phone.textContent = `${place.phone}`;
        address.textContent = `${place.address}`;
        website.textContent = `${place.website}`;
        website.setAttribute("href", place.website);


        portrait.setAttribute('src', place.img);
        portrait.setAttribute('alt', `Portait of ${place.name}`);
        portrait.setAttribute('loading', 'lazy');

        card.appendChild(title);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(portrait);
        cards.appendChild(card);
    })
}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cards-grid");

gridbutton.addEventListener("click", () => {
	display.classList.add("cards-grid");
	display.classList.remove("cards-list");
});

listbutton.addEventListener("click", () => {
	display.classList.add("cards-list");
	display.classList.remove("cards-grid");
});