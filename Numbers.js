console.log(Number.isNaN(3 * 'oops')); //true
let floatString = '1.5';
let intString = '3';
console.log(typeof Number.parseFloat(floatString)); //number
console.log(typeof Number.parseInt(intString)); //number
//let floatString = '1.5ok';
//let intString = '3 yes';
console.log(Number.parseFloat(floatString)); //1.5 带字母的string也能转换其中的数字
console.log(Number.parseInt(intString)); //3
//如果string是以字母开头的，要小心，parseFloat的结果会是NaN，然而typeof会错误的认为是number
let Stringfloat = 'this1.5ok';
console.log(Number.parseFloat(Stringfloat)); //NaN
console.log(typeof Number.parseFloat(Stringfloat)); //number

let num = 5.4567;
console.log(num.toFixed(2)); //5.46
console.log(num.toExponential()); //5.4567e+0
console.log(num.toLocaleString()); //5.457
console.log(num.toPrecision()); //5.4567
console.log(num.toString()); //5.4567