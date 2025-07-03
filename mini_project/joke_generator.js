import https from 'https';
import chalk from 'chalk';

const getJoke = () => {
    const url = 'https://official-joke-api.appspot.com/random_joke'; // ✅ HTTPS URL

    https.get(url, (response) => {
        let data = '';

        // Collect data chunks
        response.on('data', (chunk) => {
            data += chunk;
        });

        // Parse JSON and print the joke
        response.on('end', () => {
            try {
                const joke = JSON.parse(data);
                console.log(chalk.blue(`Joke: ${joke.setup}`));
                console.log(chalk.green(`Punchline: ${joke.punchline}`));
            } catch (err) {
                console.error(chalk.red('Failed to parse joke'));
            }
        });
    }).on('error', (err) => {
        console.error(chalk.red(`Error: ${err.message}`));
    });
};

getJoke();
