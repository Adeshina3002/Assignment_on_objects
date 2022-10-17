// 1. create an address object with three properties, street, city, and zip code using the object literal syntax. When you do that, then create a function called showAddress that takes an address object and displays all the properties of this object along with their value

const address = {
    street : "Fola Jinadu cresent",
    city : "Gbagada, Lagos",
    zip : 100266
}

function showAddress () {
    return address
}

const check = showAddress()
// console.log(check);



// 2a. using factory function to initialize an address object

function showAddressUsingFF (street, city, zip) {
    return {
        street,
        city,
        zip
    }
}

const confirm = showAddressUsingFF("Fola Jinadu cresent", "Gbagada, Lagos", 100266)
console.log(confirm);

// 2b. using constructor function 

function ShowAddress () {
    this.street = "Fola Jinadu cresent",
    this.city = "Gbagada, Lagos",
    this.zip = 100266
}

const affirm = new ShowAddress ()
console.log(affirm);

// 3. In this exercise, we're going to use the constructor function that we created in the last exercise to create two address objects, address1 and address2. I want you to create two functions. One is called areEqual, so we pass two address objects and we check to see if these two objects are equal. Now as I told you before, objects are reference types, so we can have two objects with the exact same properties, but these objects are in different memory locations, so when we use the equality operator we're essentially checking to see if these objects have the same reference. Now, to properly check to see if two objects are equal, we need to check their properties, we need to make sure that all their properties are equal. So that's the job of this function areEqual. If all the properties of these two objects are equal, this function should return true, otherwise it should return false. Now the other function I want you to write is areSame. And this function simply tells us if address 1 and address 2 are pointed to the exact same object. In other words, they're referencing the same object. Go ahead and solve this.

const address1 = new ShowAddress ()
// console.log(address1.city);
// console.log(address1.zip);
// console.log(address1.street);

const address2 = new ShowAddress ()

function areEqual () {
    for (let key1 in address1) {

        for (let key2 in address2) {

            if (key1 === key2) return (true)
            
            else return false
        }
    }
}

console.log(areEqual());

function areSame () {
    if (address1 === address2) 
    return true
    else 
    return false
}

console.log(areSame());

// 4. In this exercise I want you to create a blog post object with these properties. title, body, author, views, which represents the number of times this post has been viewed. Comments, now each comment should have a couple properties, author and body. And finally, another property, that each post should have is isLive. Now that can be either true or false. So once again you should use the object literal syntax to create and initialize a blog post. Give each property some value, the actual value doesn't really matter. I just want you to get comfortable with the object literal syntax.

const blogPost = {
    title : "Fundamentals of JavaScript",
    body : "Understanding the basics of JavaScript",
    author: "Etim Raphael",
    views : 10,
    comments : {
        author: "Etim Raphael",
        body : "Understanding the basics of JavaScript",
    },
    isLive: true
}

// console.log(blogPost);

// 5. 

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes:"http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// Write the command to add the language "Go" to the end of the languages array.

const append = programming.languages.push("GO");
// console.log(programming);

// Change the difficulty to the value of 7.

const ammend = programming.difficulty = 7;
// console.log(programming);

// Using the delete keyword, write the command to remove the jokes key from the programming object.

const remove = delete programming.jokes
// console.log(programming);

// Write the command to add a new key called isFun and a value of true to the programming object.

const add = programming.isFun = true;
// console.log(programming);

// Using a loop, iterate through the languages array and console.log all of the languages.

for (let key of Object.entries(programming.languages)) {
    console.log(key);
}

// Using a loop, console.log all of the keys in the programming object.

for (let key in programming) {
    console.log(key);
}

// Using a loop, console.log all of the values in the programming object.

for (let key in programming) {
    console.log(programming[key]);
}
