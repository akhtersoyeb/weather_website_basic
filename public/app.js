getWeatherData();



const highAccuracyBtn = document.getElementById('highAccuracyBtn');
highAccuracyBtn.addEventListener('click', () => {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            console.log(lat, lon);
            let response = await fetch(`highAccuracyWeather/${lat},${lon}`);
            let data = await response.json();
            // console.log(data);
            let temperature = data.main.temp - 273.15;
            let weather_icon_src = `http://openweathermap.org/img/wn/${data.weather['0'].icon}@2x.png`; //data.weather['0'].icon; 
            let weather_description = data.weather['0'].description;
            let location_name = data.name;
            console.log(temperature, weather_icon_src, weather_description, location_name);

            // comment out the below dom elements when you are developing on your own or modify them
            let user_data = `temperature : ${temperature},
                             weather description : ${weather_description},
                             location : ${location_name}`;
            document.getElementById('low_accuracy').textContent = user_data;
            document.getElementById('low_accuracy_img').src = weather_icon_src;
            // comment ends here 


        })
    } else {
        console.log('position is unavailable');
    }
})






async function getWeatherData() {
    let response = await fetch('/weather');
    let data = await response.json();
    // console.log(data);
    let temperature = data.current.temperature;
    let weather_icon_src = data.current.weather_icons[0];
    let weather_description = data.current.weather_descriptions[0];
    let location_name = data.location.name;
    console.log(temperature, weather_icon_src, weather_description, location_name);


    // comment out the below dom elements when you are developing on your own or modify them
    let user_data = `temperature : ${temperature},
                     weather description : ${weather_description},
                     location : ${location_name}`;
    document.getElementById('high_accuracy').textContent = user_data;
    document.getElementById('high_accuracy_img').src = weather_icon_src;
    // comment ends here 
}




