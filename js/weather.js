const div = document.createElement('div');
const weather_content = document.querySelector(".weather-content");

let index = 0;

const updateCity = () => {
    fetch(`https://api.openweathermap.org/data/2.5/group?id=745044,323786,311046,750269&appid=65df515c830ddb1cd59ccbe33d79985e&units=metric`)
        .then(response => response.json())
        .then(data => {
            const cityData = data.list[index];
            const city = cityData.name;
            const temp = cityData.main.temp;
            const description = cityData.weather[0].description;
            // if(description == "broken clouds"){
            //     desc = "test"
            //     const content = `${city}: ${temp}°C, ${desc}`;
            //     div.innerHTML = content;
            //     index = (index + 1) % data.list.length;
            //     weather_content.appendChild(div);
            // }
            if(description === "broken clouds"){
                const iconCode = "10d"; // "broken clouds" sembolüne karşılık gelen kod
                const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
                const content = `${city}: ${temp}°C, <img src="${iconUrl}" alt="${description}">`;
                div.innerHTML = content;
                index = (index + 1) % data.list.length;
                weather_content.appendChild(div);
            }
            
            console.log(description);
        });
}

updateCity();
setInterval(updateCity, 5000);

// --- &lang=tr ----

// const iconCodes = {
//     "clear sky": "01d",
//     "few clouds": "02d",
//     "scattered clouds": "03d",
//     "broken clouds": "04d",
//     "shower rain": "09d",
//     "rain": "10d",
//     "thunderstorm": "11d",
//     "snow": "13d",
//     "mist": "50d"
//   };
  
//   const iconCode = iconCodes[description];
//   const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
//   const content = `${city}: ${temp}°C, <img src="${iconUrl}" alt="${description}">`;
//   div.innerHTML = content;
//   index = (index + 1) % data.list.length;
//   weather_content.appendChild(div);