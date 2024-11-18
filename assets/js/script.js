
const API_KEY = 'd7bf79d90fff0e1ee932a834712e7b61'; 

function obtenerClima() {
    // Puedes cambiar la ciudad y el país aquí
    const ciudad = 'San Jose,cr';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}`;

    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        success: function (data) {
            const vars = data.main;
            const temp_c = vars.temp - 273.15; // Conversión a Celsius
            const temp_f = 1.8 * (vars.temp - 273.15) + 32; // Conversión a Fahrenheit

            // Actualiza el HTML 
            $('#lug').text(data.name);
            $('#tem').text(temp_c.toFixed(2)); 
            $('#hum').text(vars.humidity);
            $('#vie').text(data.wind.speed);
            $('#tiempoIcon').attr('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Error: " + errorThrown);
        }
    });
}

// Llama a la función para obtener el clima al cargar la página
$(document).ready(function() {
    obtenerClima();
});