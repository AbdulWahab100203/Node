import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

// API setup
const apikey = '27cfc8d0c4b8df5f08069ec450b5cff7';
const url = `https://api.openweathermap.org/data/2.5/weather`;

// Create readline interface
const rl = readline.createInterface({ input, output });

const getWeather = async () => {
    try {
        const city = await rl.question('Enter the city name: ');
        const response = await fetch(`${url}?q=${city}&appid=${apikey}&units=metric`);

        if (!response.ok) {
            throw new Error(`City not found: ${city}`);
        }

        const data = await response.json();
        console.log(`\n🌤️ Weather in ${data.name}: ${data.weather[0].description}`);
        console.log(`🌡️ Temperature: ${data.main.temp}°C`);
        console.log(`💧 Humidity: ${data.main.humidity}%`);
        console.log(`🌬️ Wind Speed: ${data.wind.speed} m/s`);
    } catch (error) {
        console.error(`❌ Error: ${error.message}`);
    } finally {
        rl.close();
    }
};

getWeather();
