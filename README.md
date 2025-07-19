🌦️ WEATHER DASHBOARD
COMPANY: CODTECH IT SOLUTIONS
NAME: Mo Aslam Khan
INTERN ID: CT08DN1583
DOMAIN: React.js Web Development.
DURATION: 8 WEEKS
MENTOR: NEELA SANTOSH



📄 TASK DESCRIPTION
The Weather Dashboard project is a part of my internship under CODTECH IT Solutions. It is a fully responsive, real-time weather web application developed using React.js. The goal of this project is to build a user-friendly weather interface that provides accurate and current weather data based on user input. This app communicates with the OpenWeatherMap API to fetch live weather data for any city entered by the user.

The user simply needs to type a city name, and the app displays essential information like current temperature (in Celsius), weather condition (like sunny, cloudy, rainy), humidity level, and wind speed. It also includes proper loading and error handling, so if the city name is invalid or there's a network issue, the app displays an appropriate message.

The weather data is fetched using the fetch() method in JavaScript and integrated with the OpenWeatherMap API. To keep the API key secure and not expose it in the GitHub repository, I have not uploaded my personal API key. Instead, I replaced the key with a placeholder like:

API = Enter Your API


🔧 Technologies Used:
React.js: For component-based frontend development

JavaScript (ES6+): For API interaction and logic

HTML & CSS: For styling and layout

OpenWeatherMap API: To fetch live weather data

Git & GitHub: Version control and code hosting

✅ Key Features:
Search weather by city name

Displays temperature, weather type, humidity, wind speed

Error message on invalid input

Loader or message during data fetch

Responsive design for mobile and desktop

Safe API integration with key hidden

The UI is kept clean and minimal, using soft colors and clear sections for each data point. The interface is mobile-friendly, ensuring users can access weather data on the go.


🔒 API Key Handling:
To avoid exposing sensitive keys, I did not upload the API key in the code. In the codebase, the API key part looks like:

https://api.openweathermap.org/data/2.5/weather?q=CityName&units=metric&appid=EnterYourAPIKeyHere

Anyone cloning this project must replace EnterYourAPIKeyHere with their actual OpenWeather API key in their local .env file or directly in the fetch URL for testing.


## 📸 Output

![Weather Dashboard](screenShot/Dashboard.png)
