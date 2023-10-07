console.log("This is demo js for AMAD");

//single line comment

/* This is a
multiline commnet
by Yasindu Sathsara*/

//js variable

//variable types
//var, let, const

var stdName = "Yasindu";
var age = 27;

var physicsGrade = 'A';

console.log(age)

var num1 = 40;
var num2 = 23;

console.log("Answer is : " + (num1 + num2));

//-, *, /, %

//functions
function saveStudent() {
    var myAge = 27;
    console.log("This is a function - save student " + myAge)
    alert("Helloooo......")
}

function login() {
    var email = document.getElementById('txtEmail').value
    var password = document.getElementById('txtPassword').value

    document.getElementById('result').innerHTML = email + password
}

//display a text input to get first number ---> 5
//display a text input to get second number ----> 6
//add 4 buttons to +, -, *, /
//Ex ---> +, 11

function addition() {
    var num1 = +document.getElementById('num1').value
    var num2 = +document.getElementById('num2').value

    document.getElementById('res').innerHTML = num1 + num2;
}

//////////////////////////////////////

//flow controllers ----> if, else, elseif, switch case

//true, false, a statement that genarates true or false

var userAge = 15;

if (userAge > 18) {
    console.log("Helloooooooooo.....................");
}

var marks = 67;
var attendance = 3;

if (marks >= 50 && attendance == 5) {
    console.log("PASS");
} else if (attendance > 3) {
    console.log("Little chance for the exam...");
}
else if (marks >= 20) {
    console.log("Scond shy avaiable..");
}
else {
    console.log("FAIL");
}

//relational operators ----> >, <, >=, <=, ==, !=
//logical operators -----> &&, ||


//drop down ----> male, female
//get age

//when buton click

//male, age>18 ---> you have access
//female, age>30 ----> you have access
//male , age==12 ----> call police
//other cases ----> arrest

function genarate() {
    var gender = document.getElementById('gender').value
    var age = document.getElementById('age').value;

    if (gender == "male" && age > 18) {
        alert("You have access")
    } else if (gender == "female" && age > 30) {
        alert("You have access")
    }
}

//email
//password

var dbEmail = "yasindu@gmail.com";
var dbPassword = "yasindu123"

var val2 = 12;

if (val2 == 10) {
    console.log("Hiiiii....");
}

//switch case

//control variable
switch (val2) {
    case "january":
        alert("Yasindu");
        break;
    case 10:
        alert("Nipun");
        break;
    case 34:
        alert("Sathsara")
        break;
    default:
        alert("No any matching value...")
}

//task
//January ----> Duruthu
//February ----> Nawam

//input english month name by user
//button ---> get sinhala name
//resutl ----> Duruthu


function getMonth() {
    var month = document.getElementById('month').value

    switch (month) {
        case "january":
            document.getElementById('monthRes').innerHTML = "Duruthu"
            break;
        case "february":
            document.getElementById('monthRes').innerHTML = "Nawam"
            break;
        default:
            document.getElementById('monthRes').innerHTML = "No any matching value..."
    }
}

//loops ---> for loop, while loop, do-while loop, foreach

var t = 4;

//t = t+6;
t += 6;
console.log(t);

var p = 5;
//p=p+1;
//p+=1;
//p++; ---> increment , p-- ---->decrement
//++p ----> pre increment
//p++ ----> post increment

console.log(--p);

//for loop
for (var i = 0; i < 5; i++) {
    console.log("Hiiiiiiiii.....");
}

//////////////////////////////////

//get user's name as user input
//get charaters of above name and console log them

//Yasindu ----> Y,a, s, i, n, d, u

///////////////////////////////

//user can enter username and password
//when login button pressed, if username and password matched with dbUserName and dbPassword alert login success !
//and end the application
//if username or password mismatched alert login failed, try again...
//clear text inputs (usename and password)
//a user can enter incorrect username and password for 5 time
//on 5th time alert account locked
//end the appication

//arrays

//variable
var mathsMark = 89; //single data

//js array
var studentMarks = [34, 56, 78, 32, 45, 67];

console.log(studentMarks[5]);

var cars = ['Toyota', 'Mazda', 'BMW', "Jeep", "Audi"]

console.log(cars[2]);

var data = [34, "Yasindu", "Toyota", 56.7, "ACPT"];

for (var i = 0; i < data.length; i++) {
    console.log(data[i])
}

//data.length, 5

var data2 = 17;

console.log("Answer = " + (data2 % 3)); //modular operator

var numbers = [34, 56, 13, 45, 68, 32, 10, 3];

//display only even numbers

var evenNumbers = [];

evenNumbers.push(900);

console.log(evenNumbers);

////////////////////////////

//js object
var obj = { "name": "Yasindu", "salary": 25000, "address": "panadura" }

console.log(obj.salary);

var employees = [{ "name": "Yasindu", "salary": 25000, "address": "Panadura" }, { "name": "Kavindu", "salary": 30000, "address": "Panadura" },
{ "name": "Malindu", "salary": 50000, "address": "Mathugama" }, { "name": "Raveen", "salary": 70000, "address": "Colombo" }]

console.log(employees);

//increment every employee's salary by 12%
//store new data to a another array and display it

var newEmployees = [];

for (var i = 0; i < employees.length; i++) {
    var incrementedVal = employees[i].salary / 100 * 12

    var newSalary = employees[i].salary + incrementedVal;

    newEmployees.push({ "name": employees[i].name, "address": employees[i].address, "Salary": newSalary })
}

console.log(newEmployees);

/////////////////////////////////////////

//while loop

//true, false, a stament that genarates true or false

while(false){
console.log("Hiiiii")
}

console.log("Hello...");








