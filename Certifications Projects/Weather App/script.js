const cityOption = document.getElementById("city-options");
const getWeatherBtn = document.getElementById("get-weather-btn");

getWeatherBtn.addEventListener("click", () => {
  const city = cityOption.value;
  if (city === "") {
    return;
  } else {
    showWeather(city);
  }
});

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${city}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function showWeather(city) {
  const weatherData = await getWeather(city);
  if (!weatherData) {
    alert("Something went wrong, please try again later");
    return;
  }
  const { name, weather, main, wind } = weatherData;

  //Location
  document.getElementById("location").textContent = name ?? "N/A";

  // Temperature + humidity
  document.getElementById("main-temperature").textContent =
    main.temp !== undefined ? `${main.temp}° C` : "N/A";
  document.getElementById("feels-like").textContent =
    main.feels_like !== undefined
      ? `Feels Like: ${main.feels_like}° C`
      : `Feels Like: N/A`;

  // Humidity
  document.getElementById("humidity").textContent =
    main.humidity !== undefined
      ? `Humidity: ${main.humidity}%`
      : "Humidity: N/A";

  // Weather type + icon
  document.getElementById("weather-main").textContent = weather[0].main ?? "";
  document.getElementById("weather-icon").src = weather[0].icon ?? "";

  //Wind speed + gust
  document.getElementById("wind").textContent =
    wind.speed !== undefined ? `Wind: ${wind.speed} m/s` : "Wind: N/A";
  document.getElementById("wind-gust").textContent =
    wind.gust !== undefined ? `Gusts: ${wind.gust} m/s` : "Gusts: N/A";

  // Compass arrow
  const windArrow = document.getElementById("wind-arrow");
  windArrow.style.transform =
    wind.deg !== undefined ? `rotate(${wind.deg}deg)` : "rotate(0deg)";
}
