const location = "Mexicali, MX"
const api_key = '7f05b9413f850e901cd9f54018053c1d';
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}&units=metric`;
 