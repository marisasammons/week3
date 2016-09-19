function writeHelloWorld () {
    console.log("Hello World!");
}

writeHelloWorld ();

function writeMessage(message){
    console.log(message);
}
writeMessage ("My name is Marisa");

var msg ="some message";
writeMessage(msg);

function sum (number1, number2){
 var result= number1 + number2;
 return result;
}
var a =sum (10, 50);
console.log (a);

console.log(sum(2, 2));
console.log(sum(5, 7));
console.log(sum(100,-100));

// Write a function that takes 1 parameter 
//In that Function, count from 1 to that parameter, pritnting out the number 

function count(num){
    for (var i = 0; i<= num; i ++){
        console.log(i);
    }
}
count (10);
count (4);
count(15);

var name ="Johnny";
function hello (name){
    name ="Johnny"
    console.log ("Here's" + name);
}
{
var name = "Marisa";
console.log(name);
hello(name);
console.log(name);
}

//Functions Challenge//
// Write a function that returns your age, name it getAge()


function getAge() {
    return 24;
}
var age =getAge();
console.log(age);

//Write a function that is passed two integers as parameters, and returns their sum.

function add(a, b) {
    return a+b
}
console.log (add(2,2));

//Write a function that is passed a String, then returns the word backwards.
function reverse(string) {
    var restult ="";
    for(var i= string.length-1; i >=0; i--){
        result += string [i];
    }   
        return result;
}
console.log (reverse("Backwards"));
