//不必重复变量，自动匹配：
let x = 'test',
    y = 42;
let obj = {
    x,
    y,
    method() {
        return 'method!';
    },
    [x + y]: 'computed!'
};
console.log(obj); //{ x: 'test', y: 42, method: [Function: method], test42: 'computed!' }

//可以assign新的变量或者功能：(new object that will return, old object, new property)， 已存在的变量会被新的覆盖
let newObj = Object.assign({}, obj, { someotherProp: 'woohoo' });
console.log(newObj);
/*{
    x: 'test',
    y: 42,
    method: [Function: method],
    test42: 'computed!',
    someotherProp: 'woohoo'
  }*/