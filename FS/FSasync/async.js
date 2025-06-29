const fs = require('fs');
const path = require('path');
const FilePath = path.join(__dirname, 'text.txt');
const FileName = "text.txt"
// fs.writeFile(FileName, "Hello, World!",'utf-8', (err) => {
//     if (err) console.error( err);
//     else console.log("File created successfully!");});


// const readfile = fs.readFile(FilePath, 'utf-8', (err, data) => {
//     if (err) console.error(err);
//     else console.log("File content:", data);
// });


// const updateFile = fs.appendFile(FilePath, " My name is Wahab", 'utf-8', (err) => {
//     if (err) console.error(err);
//     else console.log("File updated successfully!");
// });

fs.unlink(FilePath, (err) => {
    if (err) console.error(err);
    else console.log("File deleted successfully!");
}   
);