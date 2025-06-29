const os =require('os');
console.log(os.platform()); // Returns the operating system platform
console.log(os.arch()); // Returns the architecture of the operating system 
console.log(os.cpus()); // Returns information about the CPU cores
console.log(os.freemem()); // Returns the amount of free system memory in bytes
console.log(os.totalmem()); // Returns the total amount of system memory in bytes
console.log(os.homedir()); // Returns the home directory of the current user
console.log(os.tmpdir()); // Returns the operating system's default directory for temporary files
console.log(os.uptime()); // Returns the system uptime in seconds
console.log(os.userInfo()); // Returns information about the current user
console.log(os.networkInterfaces()); // Returns network interfaces and their addresses
console.log(os.release()); // Returns the operating system release
console.log(os.hostname()); // Returns the hostname of the operating system