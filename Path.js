const path = require('path');
const Path = require('path');
console.log(__dirname);
console.log(__filename);


const filePath = Path.join("folder","students","data.txt");
console.log(filePath);
Path.parse(filePath);
Path.resolve(filePath);
Path.basename(filePath);
path.basename(filePath);
console.log(Path.basename(filePath));
console.log(Path.parse(filePath));  
console.log(parsedPath);    
const parsedPath = Path.parse(filePath);