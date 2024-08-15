document
  .getElementById("weather-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const city = document.getElementById("city").value;
    await fetchWeather(city);
  });

async function fetchWeather(city) {
  const apiKey = "your_api_key"; // Replace with your API key
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();

    document.getElementById("temperature").textContent = `${data.main.temp}°C`;
    document.getElementById("condition").textContent =
      data.weather[0].description;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}
