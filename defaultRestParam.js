//默认值
function logSomething(something = 'default value!') {
    console.log(something);
}
logSomething(); //default value!
logSomething('ok'); //ok

//增加一个默认值，并且默认值已经定义成string：
function myLogFunc(something = '1', somethingElse = something + ' 2') {
    console.log(something, somethingElse);
}
myLogFunc(); //1 1 2
myLogFunc(9, undefined); //9 9 2
myLogFunc(undefined, 'yeah'); //1 yeah

//Rest parameters, it turns n parameters into a true array, 让不确定数量的变量组合成一个array，可以用join公式：
function joinStuff(...stuffs) {
    console.log(stuffs.join(' '));
}
joinStuff('rest', 'params', 'rules'); //rest params rules