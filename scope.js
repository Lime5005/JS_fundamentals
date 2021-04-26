//在公式内可以使用公式之前所定义的变量：
let myVar = '1';

function local() {
    let localVar = 'local';
    //let myVar = '2'; 如果在公式里重新定义变量，则原来的变量会被覆盖
    console.log(myVar, localVar);
}
//如何启动一个要console.log的公式？直接写下它的名字加括号，不必重复console.log():
local(); //1 local 如果在公式里重新定义变量, 此处可变成2 local
//console.log(localVar); //ReferenceError: localVar is not defined

for (let prop in { prop1: '1' }) {
    console.log(prop);
}
//console.log(prop); //ReferenceError: prop is not defined

//用var表示global, 可以在公式外使用
for (var prop0 in { prop2: '2' }) {
    console.log(prop0); //prop2
}
console.log(prop0); //prop2