const infome = require('./information.js'); 

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hi, my name is ${infome.name} and my campus is ${infome.campus}`,
    e : "oO",
    T : "U "
}));











