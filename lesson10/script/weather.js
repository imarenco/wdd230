const currenttemp = document.querySelector('#current-temp');
const weathericon = document.querySelector('#weather-icon');
const captiondesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=165795b6a6f8a7f648e7fc843939ca11"

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

function displayResults(weatherdata) {
    currenttemp.innerHTML = `<strong>${weatherdata.main.temp.toFixed(0)}</strong>`
    const iconsrc = `https://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`;
    const description = weatherdata.weather[0].description;
    
    weathericon.setAttribute('src', iconsrc);
    weathericon.setAttribute('alt', description);
    weathericon.setAttribute('loading', 'lazy')
    captiondesc.textContent = description.toUpperCase();
}