const EventEmitter = require("events");
const emiter = new EventEmitter();
const eventcount ={
    "user-login":0,
    "user-logout":0,
    "user-purchase":0,
    "profile-update":0,
};

emiter.on("user-login",(a) => {
    eventcount["user-login"]++;
    console.log(`User ${a} logged in`); 
    console.log(`Total user-login events: ${eventcount["user-login"]}`);
});
emiter.on("user-logout",(a) => {
    eventcount["user-logout"]++;
    console.log(`User ${a} logged out`); 
    console.log(`Total user-logout events: ${eventcount["user-logout"]}`);
});
emiter.on("user-purchase",(a,b) => {
    eventcount["user-purchase"]++;
    console.log(`User ${a} purchased ${b}`); 
    console.log(`Total user-purchase events: ${eventcount["user-purchase"]}`);
});
emiter.on("profile-update",(a,b) => {
    eventcount["profile-update"]++;
    console.log(`User ${a} updated profile with ${b}`); 
    console.log(`Total profile-update events: ${eventcount["profile-update"]}`);
});

emiter.emit("user-login","Wahab")
emiter.emit("user-logout","Wahab")
emiter.emit("user-purchase","Wahab", "Laptop")
emiter.emit("profile-update","Wahab", "email")
