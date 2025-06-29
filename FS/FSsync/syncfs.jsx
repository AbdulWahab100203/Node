const fs = require('fs');
const path = require('path');
const FilePath = path.join(__dirname, 'text.txt');

const FileName = "text1.txt"
// fs.writeFileSync(FileName, "Hello, World!",'utf-8');
// console.log("File created successfully!");

// const readfile=fs.readFileSync(FilePath, 'utf-8'  )
// console.log("File content:", readfile);



// const updateFile = fs.appendFileSync(FilePath, " My name is Wahab","utf-8");
// console.log("File updated successfully!");

fs.unlinkSync(FilePath);
console.log("File deleted successfully!");