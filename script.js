let a = 2;
const b=36;
let arr = [34,25,41,85,94];

let product = {
    title: 'shoe',
    price: 250,
    category: 'sport'
}
function cat(){
    let cart = document.querySelector('.cart');
let cartItem = document.createElement('div');

cartItem.innerHTML=`<h2>${product.title}</h2>
<p>${product.price}</p>
<b>${product.category} </b>`;
cart.appendChild(cartItem);
}

// async function show(){
//      await fetch('/obj.json').then(res=>res.json()).then(json=>console.log(json));
// }
// show();
async function postJSON(data) {
    try {
      const response = await fetch("https://example.com/profile", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(response =>response.json()).then(console.log("Success:"))
      
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  const data = { username: "example" };
  postJSON(data);
/*
let Top = document.querySelectorAll('.top');
console.log(Top)


Top.forEach((x)=> x.addEventListener('click',() =>{ x.classList.remove('active');
 this.classList.add('active');
}))

*/








/*
let targ = document.querySelector('.line');
let src = document.querySelector('.addline');
function addLine(){
    console.log('kkkkk')
    src.innerHTML += `<p>This is new line</p>`
}
*/




/*
 check =(y) => y%2==0 ? console.log(`${y} is even`): console.log(`${y} is odd`);

check(26);*/




/*function update(){
    let x= 5;
    console.log(x);
}

update();*/
//object
/*let me = {
    cycle: true,
    bag: 'black',
    goggles: 1
}*/
/*
let you = Object.create(me);
you.bag = 'maroon'
console.log(you.bag);

let val =0;
function sum(){
val=val+5;
document.querySelector('.ko').innerHTML = val;
}
let bt = document.querySelector('.bt');

bt.addEventListener("click",sum);


*/



//class
/*class Student{
    constructor(id, name, course){
        this.id = id;
        this.name = name;
        this.course = course;
    }
    intro(){
        console.log(`I am ${this.name} learning ${this.course} and my id is ${this.id}`);
    }
}

let nishat = new Student('WD240236', 'nishat', 'web development');
let Sahadot = new Student('WD2402387', 'Sahadot', 'web development');
let sojib = new Student('WD240547', 'sojib', 'web development');
console.log(nishat, Sahadot, sojib);
nishat.intro();






//return
function addValue(){
return a=a+11;
}
let oddEven= ()=> a%2==0? console.log('even'):console.log('odd');


addValue();
console.log(a);
oddEven();
*/




/*console.log(a,b)

console.log(a,b);
if(typeof b =='number'&& b>30){
    console.log('pass')
}
else{
    console.log('fail');
}
if( typeof a =='string' || a>10){
    console.log('or')
}
else{
    console.log('er')
}









if(a===b){
    console.table('a is number');
}
else{
    console.table('a is string');
}
// if(typeof a =='string'){
//     console.log(typeof a);
// }


if(a<16){
    console.log('a is less than 16');
}
else if(a>16){
    console.log('a is greater than 16')
}
else{console.log('a is equal to 16');}
*/

/*switch(true){

    case (b>0 && b<10):
        console.log('b is less than 10');
        break;
    case (b>10 && b<20):
        console.log('b is 16');
        break;
    default: console.log('b is greater than 20');
    break;
}*/
/*for(let i=0; i<22; i++){
    console.log(i);
}

while(a<22){
    a++;
    console.log(a);
}*/

/*do{
    a++;
    console.log(a);
}while(a<20);*/
/*for(let i=0; i<10; i++){
    for(let j=0; j<=i; j++){
        console.log(j);
    }
    console.log(``);
}
console.log(a);*/
//function declare
/*function checkOddEven(x,y){
    function checker(){
        if(x<y){
           return console.log('y is big');
        }
        else return console.log('x is big');
    }
    checker();
    if(x%2==0){
       return console.log('x is even');
    }
    else return console.log('x is odd');
}
checkOddEven(10,20);*/

//variable function with ternary operator
/*let ternary =function ternaryCheck(x){
    (x%2==0)?console.log('even'):console.log('odd')
}
ternary(5);*/

//arrow function
/*let ternary =(x)=>{
    (x%2==0)?console.log('even'):console.log('odd')
}
ternary(5);*/


//parse to number
/*let x = '2024';
console.log(typeof x)
let y =Number.parseInt(x);
console.log(typeof y);*/
