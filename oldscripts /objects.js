var firstname = "Marisa";
var lastname = "Sammons";
var email = "marisa.sammons@interapthq.com";
var phone = "886.0051";
var birthday = "Aug 21, 1992";

var person= {
    firstname:"Marisa",
    lastname:"Sammons",
    email:"marisa.sammons@interapthq.com",
    phone:"606.886.0051",
    birthday:"Aug 21, 1992",

};

function printDetails (p) {
    console.log(p.firstname);
    console.log(p.lastname);
    console.log(p.email);
    console.log(p.phone);
    console.log(p.birthday);

}

printDetails(person);