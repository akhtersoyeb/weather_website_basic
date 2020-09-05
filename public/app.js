getWeatherData();

async function getWeatherData() {
    const response = await fetch('/weather');
    const data = await response.json();

    let temperature = data.current.temperature;
    let weather_icon = data.current.weather_icons[0];
    let weather_description = data.current.weather_descriptions[0];
    let location_name = data.location.name;
    let location_region = data.location.region;

    console.log(temperature, weather_icon, weather_description, location_name, location_region);
}