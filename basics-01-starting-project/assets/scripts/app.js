// let currentResult = 0;

// currentResult = currentResult + 10;

// outputResult(currentResult, '');

// const defaultResult = 0;
// let currentResult = defaultResult;
 

// // function
 
// function add (num1, num2) {
//     const result = num1 + num2;
//     return result;
// }

// currentResult = add(1, 2);

// let currentDescription = `(${defaultResult} + 10) * 3 / 2- 1`;
// outputResult(currentResult, currentDescription);


/*function greet(firstName, lastName){
    return ('Hello' + firstName + ' ' + lastName)
}

console.log(greet(" John", "Doe"))*/

// OR

/*function greet(firstName, lastName){
    if(firstName === undefined){firstName = "John"}
    if(lastName === undefined){lastName = "Doe"}
    return ('Hello ' + firstName + ' ' + lastName)
}

console.log(greet())*/

/*function greet(firstName = "John", lastName = "Doe"){
    return ('Hello ' + firstName + ' ' + lastName)
}

console.log(greet())*/

/*const square = function (x, y=9){
  return x*x + y*y
}

console.log(square(8))*/

// IIEFs = IMMEDIATELY INVOKABLE FUNCTIONS
//(function (name){console.log("My name is " + name)})("Blessing")

// PROPERTY METHOD
/*const todo = {
    add : function() {
        console.log('Blessing Patrick');
    },
    edit: function(id){
        console.log(` Blessing Patrick ${id}`);
    },
    delete: function(){
        console.log('Blessing Patrick');
    }
}

todo.add();
todo.edit(22);
todo.delete();
*/

// FOR LOOP

// for(let i = 0; i <= 10; i++){
//     if(i === 5){
//         console.log("five is an amazing number")
//     }

//     if(i === 8){
//         console.log("stop the loop")
// break;
//     }
//     console.log(i)
// }

// WHILE LOOP
//  let i = 0;

//  while(i < 5){
//      i++
//      console.log("Number" + i)
//  }

// DO WHILE
//  let i = 0;
//  do{ i++
//     console.log("Number" + " " + i)
//  }
// while(i < 10)

// ARRAY LOOPS 
// const cars = ['ford', 'Toyota', 'Bently', 'Porshe', 'Lexus'];

// for(let i = 0; i < cars.length; i++){
//   console.log(cars[i])
// }

// it is advisable to use a forEach for array loops
//const cars = ['ford', 'Toyota', 'Bently', 'Porshe', 'Lexus'];
// 1.
// cars.forEach(function(car){
//  console.log(car)
// })

// 2.
// cars.forEach(function(car, index, array){
//     console.log(`${car} : ${index}`);
//     console.log(array);
// })

//MAP
// object of array
//  const users = [
//     {id:1, name:'Bee'},
//     {id:2, name:'Dee'},
//     {id:3, name:'Tee'},
//     {id:4, name:'Pee'}
//  ]
//  const ids = users.map(function(user){
//     return user.id;
//  })

// console.log(ids)

// FOR IN LOOPS
const colors = {
    firstColor : 'red',
    secondColor : 'blue',
    thirdColor : 'green',
}

for (let x in colors){
    console.log(`${x} : ${colors[x]}`)
}


if(typeof id !== 'undefined'){
    console.log(` My favorite number is ${id}`)
} else{
    console.log("NO ID")
}

// IF ELSE 
const color = 'yellow';
if ( color === 'yellow'){
 console.log("Yellow is my best color")
}
else if (color === 'blue'){
    console.log("Blue use to be my favorite")
}else{
    console.log("This is a new color")
}

// LOGICAL OPERATORS
const surname = 'Patrick';
const age = 15;

// AND &&
if (age > 0 && age < 12){
    console.log(`${surname} is a child`)
}
else if(age >= 13 && age <= 19){
    console.log(`${surname} is a teenager`)
}else{
    console.log(`${surname} is an adult`)
}

//OR 
if (age <= 17 || age >= 60){
    console.log("You cannot be in the race")
}else{
    console.log("You are now registered")
}

//TERNARY OPERATORS
//where the else if is = ? and the else = :

const figure = 100;
console.log(
    figure === 100 ? 'CORRECT' : 'INCORRECT')

// SWITCH
const tv = 'gotv'
switch(tv){
  case 'gotv':
    console.log("Gotv is for the masses")
    break;
    case 'dstv':
    console.log("Dstv is for the Elite")
    break;
    case 'Hitv':
    console.log("No one uses Hitv anymore");
    break;
    default:
        console.log("The deal is good viewing")
}

// day of the week
 let day;

 switch(new Date().getDay()){
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;

 }
 console.log(`Today is ${day}`)

 //OBJECT LITERAL
 let person = {
    lastName  : "Bee",
    job : "Opay",
    siblings : 5,
    hobbies : ["singing", "dancing", "hiking"],
    projects : {
        making : "shoes",
        skills : "bags"
    },
    // functions in Objects
    getBirthYear : function(){
        // for instrance you want to substract inside an object, you use the keyword this
        return 2000 - this.siblings
    }
 }

 let val;
 val = person;
 console.log({val})
 // here is how to console log functions
 console.log(person.getBirthYear())

// you can have an object in an array
const things = [
    {cloth : 'trouser', drink : 'sprite'},
    {cloth : 'top', food : 'chicken'},
    {cloth : 'blouse', food : 'turkey'}
]

for (let i = 0; i < things.length; i++)

console.log(things[i].cloth)

// without template strings

const father = "Patrick";
const mother = "Peace";
const brother = "Daniel";
const sister = "Esther";

let html;

html = '<ul><li>Father: '+ father +' </li><li>Father: '+ father +' </li> <li>Father: '+ father +'</li> <li>Father: '+ father +' </li></ul>'
document.body.innerHTML = html;

//OR

html = '<ul>' +
       '<li>Mother: '+ mother +'</li>'+
       '<li>Mother: '+ mother +'</li>'+
       '<li>Mother: '+ mother +'</li>'+
       '<li>Mother: '+ mother +'</li>'+
     '</ul>'

     document.body.innerHTML = html;

     function greeting(){
        return "Good morning";
     }

// with template literals
html = `<ul>
       <li>brother: ${brother}</li>
       <li>brother: ${brother}</li>
       <li>brother: ${brother}</li>
       <li>brother: ${brother}</li>
       <li>${greeting}</li>
       </ul>`

       document.body.innerHTML = html;