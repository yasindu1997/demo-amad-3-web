var employees = [{ "name": "samantha", "salary": 40000 }, { "name": "priyantha", "salary": 45000 }, { "name": "nuwan", "salary": 32000 }, { "name": "kamal", "salary": 47000 }]
console.log(employees);


var newEmployees = [];
for (var i = 0; i < employees.length; i++) {

    console.log(employees[i].salary);
    var incrementSalary = employees[i].salary / 100 * 12
    var newSalary = employees[i].salary + newEmployees;
    newEmployees.push({ "name": employees[i].name, "salary": newSalary })
    console.log(newEmployees);


}

//functions

function saveStudent() {
    console.log("function called...")
}

//function calling statment
saveStudent();

///////////////////////////////

//function parameters
function sumElements(x, y) {
    console.log(x * y);
}

//pass arguments
sumElements(12, 2);

/////////////////////////////

//return type
function checkEven(x) {
    var val = x / 2;
    return val;
}

var answer = checkEven(14);
console.log(answer);

//arrow function
var deleteData = () => {

}

deleteData();

///////////////////////

function getAll() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => console.log(json));

    //for loop
}

getAll();

function savePost() {
    //valuess get

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'food',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}