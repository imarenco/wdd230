const temperature = parseFloat(document.getElementById('temperature').textContent);
const speed = parseFloat(document.getElementById('speed').textContent);

function isSpecificationLimit(temperature, speed) {
    return temperature <= 50 && speed > 3;
}

function calculateWindChill(temperature, speed) {
    return 35.74 + (0.6215 * temperature) - (35.75 * (speed ** 0.16)) + (0.4275 * temperature * (speed ** 0.16));
}

if (isSpecificationLimit(temperature, speed)) {
    document.getElementById('chill').innerHTML = calculateWindChill(temperature, speed).toFixed(2) + '°F';
}