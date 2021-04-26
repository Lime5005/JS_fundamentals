//=>取代关键字function(),而且总是匿名的, 另外，它不能当作generator function
let fn = param1 => {
    let square = param1 * param1;
    return square;
}
console.log(fn(9)); //81

//等于：(如果只是一个简单的公式，可以省略大括号和return), 也叫implicit隐含的 return
let fn1 = param2 => param2 * param2;
console.log(fn1(5)); //25

//如果有多个变量：
let fn2 = (param1, param2) => param1 + param2;
console.log(fn2(1, 99)); //100

//如果没有变量：必须要用小括号，除非是只有一个变量的情况
let fn3 = () => console.log('woo');
//如何启动一个要console.log的公式？直接写下它的名字加括号，不必重复console.log():
fn3(); //woo

//如果用大括号：
let fn4 = () => { prop1: '1' };
console.log(fn4()); //undefined

//之所以undefined，因为大括号代表多行的公式，所以如果要回收一个object literal, 必须大括号外加上小括号：
let fn5 = () => ({ prop1: '5' });
console.log(fn5()); //{ prop1: '5' }

//arrow指向单独的大括号代表要多行定义新的公式：
let fn7 = () => {
    let param1 = 1;
    return param1 + 2;

}
console.log(fn7()); //3

//大括号内定义多行的变量还是要加小括号：
let fn8 = () => ({
    prop1: '1',
    prop2: '2'
})
console.log(fn8()); //{ prop1: '1', prop2: '2' }