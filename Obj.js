let newObj = {};
// 使用prototype功能,The JavaScript prototype property allows you to add new properties or new methods to object constructors
Object.prototype.mySpecialProperty = 'special';
console.log(newObj.mySpecialProperty); // special

let arr = [1, 2, 3];
if (!Array.prototype.head) { //以防万一js将来真的加了自定义的head的function，以免混淆
    Array.prototype.head = function() {
        return this[0];
    };
}

console.log(arr.head()); // 1

let obj1 = {
    prop1: 'property1',
    prop2: 'property2'
};

//Object.prototype.prop3 = 'property3'; 虽然继承了prototype，但是不会被循环到
//使用keys关键字循环提取
//Object.keys(obj1).forEach(function(item) {
//        console.log(obj1[item]); //property1, property2
//    })
//    //这里为了避免object被更改，使用freeze关键字：
//Object.freeze(obj1);
//obj1.opps = 'opps';
//测试obj是否被freeze:
//if(!Object.isFrozen(obj1)) {
//    //do something, eg: obj1.opps = 'opps';
//}

//或者seal关键字：如果object被seal了，可以更改，但不可删除或增加
//Object.seal(obj1);
obj1.prop1 = 'new value!';

//Object.keys(obj1).forEach(function(item) {
//        console.log(obj1[item]); //new value!, property2
//    })
//测试obj是否被seal:
if (!Object.isSealed(obj1)) {
    delete obj1.prop1;
}
Object.keys(obj1).forEach(function(item) {
        console.log(obj1[item]); //property2
    })
    //另外还有preventExtensions也是阻止增减：
Object.preventExtensions(obj1);
if (!Object.isExtensible(obj1)) {
    obj1.newProp = 'new';
}