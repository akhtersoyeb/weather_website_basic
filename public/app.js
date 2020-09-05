getWeatherData();

async function getWeatherData() {
    const response = await fetch('/weather');
    const json = await response.json();
    console.log(json);
}