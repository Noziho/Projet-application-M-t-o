let city;
let inputCity = document.getElementById('searchCity');
inputCity.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        city = document.getElementById('searchCity').value;
        let urlRequest = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=44c20dd509e8eacb5ee1747132679982&units=metric&lang=fr";
        fetch(urlRequest)
            .then(response => response.json())
            .then(response => {
                let temperature = response.main;

                let titleCity = document.getElementById('titleCity');
                titleCity.innerHTML = `${city}:`;

                let temp = document.getElementById('temp');
                temp.innerHTML = `Température: ${Math.trunc(temperature.temp)} °C`;

                let maxTemp = document.getElementById("maxTemp");
                maxTemp.innerHTML = `Température maximale: ${Math.trunc(temperature.temp_max)} °C`;

                let minTemp = document.getElementById("minTemp");
                minTemp.innerHTML = `Température minimale: ${Math.trunc(temperature.temp_min)} °C`;

                let feel = document.getElementById('feel');
                feel.innerHTML = `Ressenti: ${Math.trunc(temperature.feels_like)} °C `;

                let pressure = document.getElementById('pressure');
                pressure.innerHTML = `Pression atmosphérique: ${temperature.pressure} hpa`;

                titleCity.style.color = "white";

            })
            .catch (() => {
                let title = document.getElementById('titleCity');
                title.style.color = "red";
                title.innerHTML = "Veuillez saisir un nom de ville valide.";
            });
    }


})


