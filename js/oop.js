const output = document.getElementById('output');
const output2 = document.getElementById('output2');

/* STEP 1a: Create a new object using a regular function */
function createNewPerson(name) {
    var obj = {};
    obj.name = name;
    obj.greetings = function () {
        alert(`Hello My name is ${this.name}`);
    };
    return obj;
}

/* STEP 1b: Use the console to create a new person, and then invoke the function represented by .greeting() */
var person1 = createNewPerson("Person1");

/* STEP 2a: In order to be a bit more concise, JavaScript allows us to use constructor functions - 
rewrite the above function, without returning anything. Capitalize the name of the function. */
function Person(firstName, lastName, age, gender, interests) {
    this.name = {
        firstName: firstName,
        lastName: lastName,
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.greetings = function () {
        alert(`Hello My name is ${this.name}`);
    };
}

/* STEP 2b: Use the console to create a couple of different people, using the 'new' keyword, 
and again invoking the .greeting() method for each person */
var p1 = new Person("P1", "LP1", 50, "Male", ["swimming", "programming", "dancing"]);

/* STEP 3a: Build the complete constructor for the object Person (comment out the above function first).
 Include name (first and last), age, gender, interests, bio (function), and greeting (function). */

/* STEP 3b: Instantiate a new Person based on the above constructor */

/* STEP 3c: Attempt to access the various properties of person1 using the console. */
// person1['age']
// person1.interests[1]
// person1.bio()

/* STEP 4a: Alternatively, you can use the Object() constructor to create an object. eg. car*/
var car = new Object();
/* STEP 4b: Once 'car' is created, add various properties and methods… */
car.brand = "Subaru";
car.color = "Blue";
car.price = 35;
car.fun = function () {
    alert(`${car.brand} ${car.color} ${car.price}`);
}

/* STEP 4c: Change some of the properties of 'car' in the console, then invoke the car.fun() function */

/* STEP 5a: Yet another approach is to use the create() method. 
Let's see how the above car object can be used to create another object */
var anotherCar = Object.create(car);

/* STEP 5b: Output to the paragraph anotherCar.brand - you will see that it has retained the properties of the original object. */
console.log(anotherCar.brand);
// That's it! Now on to Lab 3...

// Create a JavaScript function that permits the creation of a hamburger object
// Consider that a hamburger has many options – that might include
/*
    different types of buns,
    vegetable garnishes, 
    assortments of cheeses, 
    specialty sauces, 
    different meat patties(beef, chicken, vegetarian), 
    single, double, or triple patty, 
    Pickles, hot peppers, olives etc.
*/
// add some extra if you want
// Make sure that the function allows for the output of a sentence that describes the hamburger, too

function createHamburger(type, buns, toppings, cheese, sauce, meat, patties, extras) {
    var hamburger = {};

    hamburger.type = type;
    hamburger.buns = buns;
    hamburger.toppings = toppings;
    hamburger.cheese = cheese;
    hamburger.sauce = sauce;
    hamburger.meat = meat;
    hamburger.patties = patties;
    hamburger.extras = extras;

    hamburger.describe = function () {
        var description = `Delicious ${hamburger.type} hamburger with ${hamburger.patties} ${hamburger.meat} patty(s), ${hamburger.buns} buns, topped with ${hamburger.toppings.join(', ')} and ${hamburger.cheese} cheese, and served with ${hamburger.sauce} sauce.`;
        if (hamburger.extras) {
            description += ` It also includes extras like ${hamburger.extras.join(', ')}.`;
        }
        return description;
    };

    return hamburger;
}

// Create a hamburger object with various options
var myHamburger = createHamburger("Classic", "sesame", ["lettuce", "tomato", "onion"], "cheddar", "ketchup", "beef", 1, ["pickles", "bacon"]);

// Describe the hamburger
output.innerHTML = myHamburger.describe();

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS