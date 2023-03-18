const url = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=165795b6a6f8a7f648e7fc843939ca11"

function isSpecificationLimit(temperature, speed) {
    return temperature <= 50 && speed > 3;
}

function calculateWindChill(temperature, speed) {
    return 35.74 + (0.6215 * temperature) - (35.75 * (speed ** 0.16)) + (0.4275 * temperature * (speed ** 0.16));
}

function displayWindChild() {
    const temperature = parseFloat(document.getElementById('temperature').textContent);
    const speed = parseFloat(document.getElementById('speed').textContent);
    if (isSpecificationLimit(temperature, speed)) {
        document.getElementById('chill').innerHTML = calculateWindChill(temperature, speed).toFixed(2) + '°F';
    }
}

const currenttemp = document.querySelector('#temperature');
const weathericon = document.querySelector('#weatherPicture');
const captiondesc = document.querySelector('#weatherDescription');



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
    
    document.getElementById('speed').innerHTML = weatherdata.wind.speed;
    
    weathericon.setAttribute('src', iconsrc);
    weathericon.setAttribute('alt', description);
    weathericon.setAttribute('loading', 'lazy')
    weathericon.style.display = 'flex';
    
    captiondesc.textContent = description.toUpperCase();
    displayWindChild();
}