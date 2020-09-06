const express = require("express");
const fetch = require('node-fetch');
const app = express();
app.use(express.static("public"));
app.use(express.json());
port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening at port ${3000}`);
});


const api_key_weather_stack = '7c3d00941c27d3b07020e56481c99d19';
const api_key_open_weather_map = '9dd5b799f3bc67aa379bb2b47a558d96';

app.get('/weather', async (request, response) => {
    // const api_url = `http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=9dd5b799f3bc67aa379bb2b47a558d96`;
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