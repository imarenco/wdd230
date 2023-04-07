const url = "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=imperial&appid=165795b6a6f8a7f648e7fc843939ca11"
const cards = document.querySelector('div.weather');

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}


apiFetch();
  

function displayResults(data) {
    const list = [];
    data.list.forEach(item => {
        
        const date = new Date(item.dt_txt);
        if (list.length === 0) {
            list.push(item);
        }else {
            const newDate = new Date(list[list.length - 1].dt_txt);
            if (newDate.getDay() !== date.getDay()) {
                list.push(item);
            }
        }
    });

    const items = list.slice(0, 3);


    items.forEach((weather) => {
        const info = weather.weather[0];
        
        const date = new Date(weather.dt_txt);
        const description = info.description;
        const temp = weather.main.temp;
        const humidity = weather.main.humidity;
        const icon = info.icon;
        const iconsSrc = `https://openweathermap.org/img/w/${icon}.png`;

        let card = document.createElement('section');
        let dateTag = document.createElement('h2');
        let descriptionTag = document.createElement('h3');
        let temperatureTag = document.createElement('p');
        let humidityTag = document.createElement('p');
        let iconTag = document.createElement('img');


        descriptionTag.textContent = description;
        const yyyy = date.getFullYear();
        let mm = date.getMonth() + 1; // Months start at 0!
        let dd = date.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        dateTag.textContent = dd + '/' + mm + '/' + yyyy;
        temperatureTag.textContent = `Temperature: ${temp} °F`;
        humidityTag.textContent = `Humidity: ${humidity}`;

        
        iconTag.setAttribute('src', iconsSrc);
        iconTag.setAttribute('alt', `Portait of weather`);
        iconTag.setAttribute('loading', 'lazy');
        iconTag.setAttribute('width', '150');
        iconTag.setAttribute('height', '150');

        card.appendChild(dateTag);
        card.appendChild(descriptionTag);
        card.appendChild(temperatureTag);
        card.appendChild(humidityTag);
        card.appendChild(iconTag);
        cards.appendChild(card);
    })
}