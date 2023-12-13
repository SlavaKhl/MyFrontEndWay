//  Replace 'YOUR_API_KEY' with the actual API key you obtained from OpenWeatherMap
        const apiKey = 'YOUR_API_KEY';
        
        function getWeather() {
            const city = document.getElementById('city').value;
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    displayWeather(data);
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                    document.getElementById('weather-info').innerHTML = 'Error fetching weather data. Please try again.';
                });
        }

        function displayWeather(data) {
            const weatherInfoDiv = document.getElementById('weather-info');

            if (data.cod === '404') {
                weatherInfoDiv.innerHTML = 'City not found. Please enter a valid city name.';
                return;
            }

            const cityName = data.name;
            const temperature = Math.round(data.main.temp - 273.15); // Convert from Kelvin to Celsius
            const description = data.weather[0].description;

            const weatherHTML = `
                <h3>${cityName}</h3>
                <p>Temperature: ${temperature}°C</p>
                <p>Description: ${description}</p>
            `;

            weatherInfoDiv.innerHTML = weatherHTML;
        }