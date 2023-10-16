$(document).ready(function(){
    $("#form-submit").submit(function(event){
        performSearch(event);
    });
});

function performSearch(event){
    var request;
    console.log(event);
    event.preventDefault();

    request = $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather',
        type: "GET",
        data: {
            q: $("#city").val(),
            appid: 'dbab9f2ebe4270f32947b01317d73619',
            units: 'metric'
        }
    });

    request.done(function(response){
        formatSearch(response);
    });
}

function formatSearch(jsonObject){
    var city_name = jsonObject.name;
    var city_weather = jsonObject.weather[0].main;
    var city_temp = jsonObject.main.temp;
    var icon = jsonObject.weather[0].icon;
    var iconUrl = "https://openweathermap.org/img/wn/" + icon + ".png";

    $("#weatherIcon").attr("src", iconUrl);
    $("#city-name").text("City: " + city_name);
    $("#city-weather").text("Weather: " + city_weather);
    $("#city-temp").text("Temperature: " + city_temp + " Celcius");
}