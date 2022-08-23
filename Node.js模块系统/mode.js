var hello = require('./hello');
hello.world();


//main.js 
var Hello = require('./hello1'); 
hello = new Hello(); 
hello.setName('BYVoid'); 
hello.sayHello(); 