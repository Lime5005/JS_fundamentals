// | pipe character, and/or condition
let urlPattern = /^http|https/;
console.log(urlPattern.test('https://google.com')); //true
console.log(urlPattern.test('http://google.com')); //true
//? zero or one, 只要有一个s都是true
let url1Pattern = /^http(s?)/;
console.log(url1Pattern.test('httpsss://google.com')); //true

//replace关键字只用在string上，不用在RegEx, g->globally replace, ()->a group, $->insert , i->case insensitive
let camelCased = 'camelCasedString';
console.log(camelCased.replace(/([A-Z])/g, '_$1')); //camel_Cased_String, //$1插入第一个匹配的字母之前
console.log(camelCased.replace(/([A-Z])/g, '_$')); //camel_$ased_$tring //如果没有找到匹配第几个，则取表面意义
let camel1Cased = 'camelCCasedStringTest';
console.log(camel1Cased.replace(/([A-Z])/g, '_$2')); //camel_$2_$2ased_$2tring_$2est

//match only if followed by(positive lookahead): ?=
let script = /java(?=script)/i;
console.log(script.test('Java')); //false
console.log(script.test('javascript')); //true

//match only if NOT followed by(negative lookahead)：?!
let script1 = /java(?!script)/i;
console.log(script1.test('Java')); //true
console.log(script1.test('javascript')); //false