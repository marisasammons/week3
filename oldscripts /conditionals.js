
//Examples of if / if else/ else*
var inchesofsnow = 10;

if (inchesofsnow >=12){
    console.log("It's a snow day!");
}
else if (inchesofsnow >= 4 && inchesofsnow <= 12){
    console.log("wait to see if school might be cancled...");
}

var dayofweek ="Mon";

switch (dayofweek) {
    case "Mon":
    console.log("somebody has a case of the Monday's!");
    break;
case "Tues":
case "Wed":
case "Thurs":
case "Fri":
    console.log("gotta go to work");
    break;

default:
console.log("Enjoying the weekend!");
break;
}
//Conditions Challenge//

//Bronze//

var likecats = false;
var likedogs = true;
if (likedogs && !likecats) {
    console.log("my kinda guy");
}
else {
    console.log("get outta here");
} 
//silver//
 
 var patriotwins = 4
 var coltswin