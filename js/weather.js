const div = document.createElement('div');
const weather_content = document.querySelector(".weather-content");

let index = 0;

const updateCity = () => {
    fetch(`https://api.openweathermap.org/data/2.5/group?id=745044,323786,311046,750269&appid=65df515c830ddb1cd59ccbe33d79985e&units=metric&lang=tr`)
        .then(response => response.json())
        .then(data => {
            const cityData = data.list[index];
            const city = cityData.name;
            const temp = cityData.main.temp;
            const description = cityData.weather[0].description;
            const content = `${city}: ${temp}°C, ${description}`;
            div.innerHTML = content;
            index = (index + 1) % data.list.length;
            weather_content.appendChild(div);
        });
}

updateCity();
setInterval(updateCity, 5000);