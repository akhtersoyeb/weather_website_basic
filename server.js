const express = require("express");
const fetch = require('node-fetch');
const app = express();
app.use(express.static("public"));
app.use(express.json());
port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening at port ${3000}`);
});


const api_key = '7c3d00941c27d3b07020e56481c99d19';

app.get('/weather', async (request, response) => {
    const api_url = `http://api.weatherstack.com/current?access_key=${api_key}&query=fetch:ip`;
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    console.log(json);
    response.json(json);

});