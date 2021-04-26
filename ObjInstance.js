let obj = {
    randomProp: 'random!'
};
obj.prop1 = "yes"; //这个obj不是constructor, 不用prototype，区别是constructor都用this关键字
console.log(obj.constructor); //[Function: Object] 凡是不直接被定义的都不是own property
console.log(obj.hasOwnProperty('constructor')); //false, 'constructor' is an inherited property from the constructor.
console.log(obj.hasOwnProperty('randomProp')); //true
console.log(obj.hasOwnProperty('prop1')); //true
console.log(obj.prop1); //yes
//for loop在其中的妙用：propertyIsEnumerable是false，表示这个值不会被循环到
console.log(obj.propertyIsEnumerable('constructor')); //false
console.log(obj.propertyIsEnumerable('prop1')); //true
//toString的作用：
console.log(obj.toString()); //[object Object]
console.log(obj.toString); //[Function: toString], 注意：不加括号就会直接抄function
//检查某个obj是否其实是array: array is a type of object
console.log(Object.prototype.toString.call([])); //[object Array]