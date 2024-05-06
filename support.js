let str1 ='   Hi, how are', str2 =' You?   ';

let str = str1.concat(str2);
console.log(str);

console.log(str.toLowerCase().includes('you'));
let ind = str.indexOf('o');
console.log(ind);
console.log(str.indexOf('o', ind+1));
console.log(str.toLowerCase().match("you"));
console.log(str.toLowerCase().replaceAll("h","B"));
let word =str.trim().split(' ');
console.log(word.length);
console.log(str.slice(ind, 16))