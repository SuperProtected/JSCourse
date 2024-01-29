function CanSmoke(age) {

    if (age >= 18) {
        console.log("you can smoke")
    }

    if (age < 18) {
        console.log("you cant smoke")
    }
}

CanSmoke(18);

function myFunction() {};

let a = function () {};

let arrowFunct = () => {};

function allowedTOIn(name, age, department) {

    if (name === "Serhii" || name === "Raman") {
        console.log("name existing");
    }

    if (18 <= age) {
        console.log("age enough");
    }

    if (department === "Qa" || department === "QA" || department === "qa") {
        console.log("You Qa Engineer");
    }

}

allowedTOIn("Serhii", 18, qa)

let date = new Data()