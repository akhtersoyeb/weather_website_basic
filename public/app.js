getWeatherData();



const highAccuracyBtn = document.getElementById('highAccuracyBtn');
highAccuracyBtn.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;

            let response = await fetch(`highAccuracyWeather/${lat},${lon}`);
            let data = await response.json();

            let temperature = data.current.temperature;
            let weather_icon = data.current.weather_icons[0];
            let weather_description = data.current.weather_descriptions[0];
            let location_name = data.location.name;
            let location_region = data.location.region;

            console.log(temperature, weather_icon, weather_description, location_name, location_region);
        })
    } else {
        console.log('position is unavailable');
    }
})






async function getWeatherData() {
    let response = await fetch('/weather');
    let data = await response.json();

    let temperature = data.current.temperature;
    let weather_icon = data.current.weather_icons[0];
    let weather_description = data.current.weather_descriptions[0];
    let location_name = data.location.name;
    let location_region = data.location.region;

    console.log(temperature, weather_icon, weather_description, location_name, location_region);
}




