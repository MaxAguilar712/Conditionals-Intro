const win = 'True fact!'
const lose = 'LIES!'
const likesDogs = true

if(1+1 > 5){
    console.log(win)
} else { console.log(lose)};

if(4 * 5 === 20){
    console.log(win)
} else { console.log(lose)};

if(6 - 2 >= 0){
    console.log(win)
} else { console.log(lose)};

if(likeDogs = true){
    console.log('You are a Dog Person')
} else {console.log('you are a Cat Person')};


const Person = {
    language: 'French',
    personName: 'Jimmy McSlimjim',
}
let p = Person
let greet = ''

if (p.language === 'English') {
    greet = 'Hello, '
  } else if (p.language === 'French') {
    greet = 'Bonjour, '
  } else {
    greet = 'Hola, '
  }

console.log(greet + p.personName)

grade = 77
if (grade >= 0 && grade <= 69){
    console.log("You got an F");
  } else if (grade >= 70 && grade <= 76){
    console.log("You got a D");
  } else if (grade >= 77 && grade <= 84){
    console.log("You got a C");
  } else if (grade >= 85 && grade <= 92){
    console.log("You got a B");
  } else {
    console.log('You got an A');
  }
