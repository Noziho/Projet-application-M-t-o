const begin = $('#begin');
begin.html("Veuillez entrez un nom de ville dans le champ de recherche en haut à droite");
let city;
$('#searchCity').keypress((e) => {
    if (e.key === 'Enter') {
        $('#cityInfo').css('height', 'auto');
        begin.css('display', "none");
        city = $('#searchCity').get(0).value;

        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=44c20dd509e8eacb5ee1747132679982&units=metric&lang=fr",
            method: "GET",
            dataType: "json"
        })
            .done(function (response) {
                //response.main = an objet of API, this object contain temp_max, temp_min, temp, feels_like, pressure.
                let temperature = response.main;

                //response.weather contain the clarity of the sky.
                let sky = response.weather;

                //response.wind contain the speed of the wind.
                let wind = response.wind;

                $('#titleCity').html(`${city[0].toUpperCase()}${city.slice(1)}:`).css('color', 'white');

                //Actual temperature for each city specified on the input.
                $('#temp').html(`Température: ${Math.trunc(temperature.temp)} °C`);

                //Max temperature of the day.
                $('#maxTemp').html(`Température maximale: ${Math.trunc(temperature.temp_max)} °C`);

                //Min temperature of the day.
                $('#minTemp').html(`Température minimale: ${Math.trunc(temperature.temp_min)} °C`);

                //The temperature feels like.
                $('#feel').html(`Ressenti: ${Math.trunc(temperature.feels_like)} °C `);

                //The pressure of the day.
                $('#pressure').html(`Pression atmosphérique: ${temperature.pressure} hpa`);

                //Clarity of the sky.
                $('#ciel').html(`Ciel: ${sky[0].description}`);

                $('#windSpeed').html(`Vitesse du vent: ${wind.speed} km/h`).css('color', 'white');

            })
            .fail(() => {
                $('#titleCity').html("Veuillez saisir un nom de ville valide.").css('color', 'red');
            });
    }
})