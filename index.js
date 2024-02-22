const apiKey = "6adef*************************";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&unit=metric&q=";

const searchBox = document.querySelector(".userInput input");
const searchBtn = document.querySelector(".userInput button");
const weatherIcon = document.querySelector(".img");
async function checkWeather(city) {
  const respone = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (respone.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".displayCurrentCity").style.display = "none";
  } else {
    var data = await respone.json();
    console.log(data);
    let temp = data.main.temp;
    let convertTemp = temp - 273.15;
    document.querySelector(".Degree_City").innerHTML =
      Math.round(convertTemp) + "°c";
    document.querySelector(".cityName").innerHTML = data.name;
    document.querySelector(".windSpeed").innerHTML = data.wind.speed;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "./img/weather-app-img/images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "./img/weather-app-img/images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "./img/weather-app-img/images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "./img/weather-app-img/images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "./img/weather-app-img/images/mist.png";
    }
    document.querySelector(".error").style.display = "none";
    document.querySelector(".displayCurrentCity").style.display = "flex";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
