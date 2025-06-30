const fs = require('fs');
const path = require('path');
const FilePath = path.join(__dirname, 'async.txt');
const file = __dirname; 

// const readfolder = async (file) => {
//   try {
//     const data = await fs.promises.readdir(file);   
//     console.log("File content:", data);
//   } catch (err) {
//     console.error("Error reading file:", err);
//   } 
// };


// const writefile = async () => {
//     try {
//         await fs.promises.writeFile(FilePath, "Hello World","utf-8");
//         console.log("File written successfully");   
//     } catch (err) {
//         console.error("Error writing file:", err);
//     }   
// };

// writefile();


const updatefile = async () => {
    try {
        await fs.promises.appendFile(FilePath, "\n Hello World","utf-8");
        console.log("File written successfully");   
    } catch (err) {
        console.error("Error writing file:", err);
    }   
};

updatefile();