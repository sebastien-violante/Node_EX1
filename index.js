const aboutMe = require('./information');
var cowsay = require("cowsay");

console.log(cowsay.think({
    text : aboutMe.name+' from '+aboutMe.campus,
    e : "-O",
    T : "U "
}));