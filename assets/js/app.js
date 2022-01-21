const begin = document.getElementById('begin');
const inputCity = document.getElementById('searchCity');
const titleCity = document.getElementById('titleCity');
const temp = document.getElementById('temp');
const maxTemp = document.getElementById("maxTemp");
const minTemp = document.getElementById("minTemp");
const feel = document.getElementById('feel');
const pressure = document.getElementById('pressure');
const cielP = document.getElementById('ciel');
const speedWind = document.getElementById('windSpeed');
const cityInfo = document.getElementById('cityInfo');
let city;

inputCity.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        cityInfo.style.height = "auto";
        begin.style.display = "none";
        city = document.getElementById('searchCity').value;
        let urlRequest = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=44c20dd509e8eacb5ee1747132679982&units=metric&lang=fr";

        fetch(urlRequest)

            .then(response => response.json())
            .then(response => {
                console.log(response);
                //response.main = an objet of API, this object contain temp_max, temp_min, temp, feels_like, pressure.
                const temperature = response.main;

                //response.weather contain the clarity of the sky.
                const sky = response.weather;

                //response.wind contain the speed of the wind.
                const wind = response.wind;

                titleCity.innerHTML = `${city[0].toUpperCase()}${city.slice(1)}:`;
                titleCity.style.color = "white";

                //Actual temperature for each city specified on the input.
                temp.innerHTML = `Température: ${Math.trunc(temperature.temp)} °C`;

                //Max temperature of the day.
                maxTemp.innerHTML = `Température maximale: ${Math.trunc(temperature.temp_max)} °C`;

                //Min temperature of the day.
                minTemp.innerHTML = `Température minimale: ${Math.trunc(temperature.temp_min)} °C`;

                //The temperature feels like.
                feel.innerHTML = `Ressenti: ${Math.trunc(temperature.feels_like)} °C `;

                //The pressure of the day.
                pressure.innerHTML = `Pression atmosphérique: ${temperature.pressure} hpa`;

                //Clarity of the sky.
                cielP.innerHTML = `Ciel: ${sky[0].description}`

                speedWind.innerHTML = `Vitesse du vent: ${wind.speed} km/h`;


            })
            .catch(() => {
                titleCity.style.color = "red";
                titleCity.innerHTML = "Veuillez saisir un nom de ville valide.";
            });
    }

})