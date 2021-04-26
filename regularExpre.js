//within forward slashes，使用test关键字：
let pattern = /@/;
console.log(pattern.test('me@domain.com')); //true

//看是否只包含一个字母：^hat character->begin, $the dollor character->the end, the square brackets->a group of characters.
let letterPattern = /^[A-Za-z]$/;
console.log(letterPattern.test('io')); //false
//看是否只包含一个或者多个字母：+ plus symbol
let lettersPattern = /^[A-Za-z]+$/;
console.log(lettersPattern.test('io')); //true
console.log(lettersPattern.test('5io')); //false
//包含numbers and letters:
let lettersAndNumbersPattern = /^[A-Za-z0-9]+$/;
console.log(lettersAndNumbersPattern.test('5io')); //true
//* star character-> zero or more, + plus character means one or more, ? question mark means 0 or one
//{} curly brackets, 限制数量
let numberFormat = /^[0-9]{3}-[0-9]{6}-[0-9]{3}$/;
console.log(numberFormat.test('000-111111-222')); //true
console.log(numberFormat.test('000-11111-222')); //false

// \ backslashes, escape another character that has a special meaning, 这里代表本义，不代表代指意义
let numbersFormat = /^[0-9]{3}\*[0-9]{6}\*[0-9]{3}$/;
console.log(numbersFormat.test('000*111111*222')); //true
//这里*代表代指意义zero or more
let testFormat = /^[0-9]*-[0-9]*-[0-9]{3}$/;
console.log(testFormat.test('-111111-221')); //true

// \d, matches any digital number ===[0-9]
let test1Format = /^\d{3}\*\d{6}\*\d{3}$/;
console.log(test1Format.test('000*111111*222')); //true