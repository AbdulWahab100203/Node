const EventEmitter = require("events");
const emiter = new EventEmitter();

// emiter.on("greet",() => {
//     console.log("Hello World"); 
// });
// emiter.emit("greet");


emiter.on("greet",(a) => {
    console.log(`Hello ${a.name} ${a.age}`); 
});
emiter.emit("greet",{name:"wahab",age:"22"});