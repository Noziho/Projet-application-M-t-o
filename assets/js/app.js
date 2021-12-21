const begin = document.getElementById('begin');
begin.innerHTML = "Veuillez entrez un nom de ville dans le champ de recherche en haut à droite";
let city;
const inputCity = document.getElementById('searchCity');
inputCity.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        let cityInfo = document.getElementById('cityInfo');
        cityInfo.style.height = "auto";
        begin.style.display = "none";
        city = document.getElementById('searchCity').value;
        let urlRequest = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=44c20dd509e8eacb5ee1747132679982&units=metric&lang=fr";

        fetch(urlRequest)

            .then(response => response.json())
            .then(response => {
                console.log(response)
                //response.main = an objet of API, this object contane temp_max, temp_min, temp, feels_like, pressure.
                let temperature = response.main;

                //response.weather contain the clarity of the sky.
                let sky = response.weather;

                //response.wind contain the speed of the wind.
                let wind = response.wind;

                let titleCity = document.getElementById('titleCity');
                titleCity.innerHTML = `${city[0].toUpperCase()}${city.slice(1)}:`;

                //Actual temperature for each city specified on the input.
                let temp = document.getElementById('temp');
                temp.innerHTML = `Température: ${Math.trunc(temperature.temp)} °C`;

                //Max temperature of the day.
                let maxTemp = document.getElementById("maxTemp");
                maxTemp.innerHTML = `Température maximale: ${Math.trunc(temperature.temp_max)} °C`;

                //Min temperature of the day.
                let minTemp = document.getElementById("minTemp");
                minTemp.innerHTML = `Température minimale: ${Math.trunc(temperature.temp_min)} °C`;

                //The temperature feels like.
                let feel = document.getElementById('feel');
                feel.innerHTML = `Ressenti: ${Math.trunc(temperature.feels_like)} °C `;

                //The pressure of the day.
                let pressure = document.getElementById('pressure');
                pressure.innerHTML = `Pression atmosphérique: ${temperature.pressure} hpa`;

                //Clarity of the sky.
                let cielP = document.getElementById('ciel');
                cielP.innerHTML = `Ciel: ${sky[0].description}`

                let speedWind = document.getElementById('windSpeed');
                speedWind.innerHTML = `Vitesse du vent: ${wind.speed} km/h`;
                titleCity.style.color = "white";

            })
            .catch(() => {
                let title = document.getElementById('titleCity');
                title.style.color = "red";
                title.innerHTML = "Veuillez saisir un nom de ville valide.";
            });
    }


})




