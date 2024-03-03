let a = 1;
const b=36;
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
let ternary =(x)=>{
    (x%2==0)?console.log('even'):console.log('odd')
}
ternary(5);