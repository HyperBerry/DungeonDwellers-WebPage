//Object
let person = {
    name: 'Luca',
    age: 15,
    experience: null
};

//Dot Notation
person.name = 'Bob';

// Bracket Notation
let selection = 'name';
person[selection] = 'Mark';

//Array ( it is technically an object )
let selectedColors = ['red','blue'];
selectedColors[2] = 'Green';
selectedColors[3] = 2;

//A Function
function greet(variable) {
    console.log(variable);//statement
}//no ';'

//calculating a value
function square(number) {
    return number*number;
}

greet(selectedColors);//statements need ';'
greet(selectedColors[2]);
greet(square(2)); //function in a function