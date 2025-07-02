import readline from 'readline';
import fs from 'fs';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const filecreation = () => {
    rl.question("Enter the name of the file to create: ", (filename) => {
        rl.question("Enter the content for the file: ", (content) => {
            const filePath = `./${filename}.txt`;

            fs.writeFile(filePath, content, 'utf-8', (err) => {
                if (err) {
                    console.error(`Error creating file: ${err.message}`);
                } else {
                    console.log(` File created successfully: ${filePath}`);
                }
                rl.close();
            });
        });
    });
};

filecreation();
