let template = `this is a template literal`; //模板文字
let a = '8',
    b = 'ok';
console.log(`a is ${a} and b is ${b}, and this ${reverse('thing')} is reversed`);
//a is 8 and b is ok, and this gniht is reversed
function reverse(string) {
    return string.split('').reverse().join(''); //string.split(''): Split a string into an array of substrings
} //reverse(): Reverse the order of the elements in an array

function buildStr(strings, ...values) {
    return strings[3] + values[2] + strings[2] + values[1] + strings[1] + values[0] + strings[0];
}

console.log(buildStr `a is ${a} and b is ${b}, and this ${reverse(b)} is reversed`);
//is reversedko, and this ok and b is 8a is
//8 == values[0], ok == values[1], ko == values[2]
//backticks``: multiline + token substitution 换行， 替代变量