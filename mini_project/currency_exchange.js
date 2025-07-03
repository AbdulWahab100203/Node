import https from 'https';
import readline from 'readline';
import chalk from 'chalk';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const apikey = '43c18d3af9dec3ac494c5084';
const url = `https://v6.exchangerate-api.com/v6/${apikey}/latest/USD`;

const convert = () => {
    https.get(url, (response) => {
        let data = '';

        response.on('data', (chunk) => {
            data += chunk;
        });

        response.on('end', () => {
            try {
                const json = JSON.parse(data);
                const rates = json.conversion_rates;

                // 📊 Display currencies with rates
                console.log(chalk.blue('\n📌 Available Currencies and Exchange Rates (Base: USD):\n'));
                Object.entries(rates).forEach(([code, rate]) => {
                    console.log(`${chalk.yellow(code)}: ${chalk.cyan(rate)}`);
                });

                // 💬 Ask user for input
                rl.question('\nEnter the currency code you want to convert to: ', (currencyCode) => {
                    if (rates[currencyCode]) {
                        rl.question('Enter the amount in USD: ', (amount) => {
                            const num = parseFloat(amount);
                            if (isNaN(num)) {
                                console.log(chalk.red('❌ Invalid amount.'));
                                rl.close();
                                return;
                            }

                            const convertedAmount = (num * rates[currencyCode]).toFixed(2);
                            console.log(chalk.green(`\n✅ Converted Amount: ${convertedAmount} ${currencyCode}`));
                            rl.close();
                        });
                    } else {
                        console.log(chalk.red('❌ Invalid currency code.'));
                        rl.close();
                    }
                });
            } catch (err) {
                console.log(chalk.red('❌ Error parsing API response'));
                rl.close();
            }
        });

    }).on('error', (err) => {
        console.log(chalk.red(`❌ Error fetching data: ${err.message}`));
        rl.close();
    });
};

convert();
