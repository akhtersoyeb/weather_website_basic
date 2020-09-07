const express = require("express");
const fetch = require('node-fetch');
require('dotenv').config();
const app = express();
app.use(express.static("public"));
app.use(express.json());
port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening at port ${3000}`);
});


const api_key_weather_stack = process.env.WEATHER_STACK_API_KEY;
const api_key_open_weather_map = process.env.OPENMAP_API_KEY;


app.get('/weather', async (request, response) => {
    const api_url = `http://api.weatherstack.com/current?access_key=${api_key_weather_stack}&query=fetch:ip`;
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    response.json(json);
});

app.get('/highAccuracyWeather/:latlon', async (request, response) => {

    latlon = request.params.latlon.split(',');
    lat = latlon[0];
    lon = latlon[1];
    const api_url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key_open_weather_map}`;
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    response.json(json);

})