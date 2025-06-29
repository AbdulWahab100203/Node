const fs = require('fs');
const path = require('path');
const FilePath = path.join(__dirname, 'text1.txt');
const file = __dirname;
fs.promises.readdir(file)
  .then(data => {   
    console.log("File content:", data);
  })
  .catch(err => {
    console.error("Error reading file:", err);
  });

