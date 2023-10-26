const apiKey = '30cdc1c59b352087baa97f27597ebcfa';
const weatherInfo = document.getElementById('weatherInfo');

function fetchWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const result = `En ${city}: ${temperature}°C, ${description}`;
            weatherInfo.textContent = result;
        })
        .catch((error) => {
            weatherInfo.textContent = 'No se pudo obtener la información del clima.';
        });
}

function searchWeather() {
    const cityInput = document.getElementById('cityInput');
    const city = cityInput.value;
    if (city) {
        fetchWeather(city);
    }
}

fetchWeather('New York');