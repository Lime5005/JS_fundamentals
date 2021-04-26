//Miscellaneous杂烩
//自动从左到右分配, works for both array and object:

let [x, y] = ['a', 'b'];
console.log(x, y); //a b

//当我们要destruture object的时候，左右的数据名字要相对应
let { a, b } = { a: '1', b: '2' };
console.log(a, b); //1 2

//比如只对应一个数据的情况：
let { m } = { m: 'Yes', n: 'no' };
console.log(m); //Yes

//当我们只取array一个值的情况：
let [o] = ['8', '9'];
console.log(o); //8

let [, p] = ['8', '9'];
console.log(p); //9

let [s, ] = ['8', '9'];
console.log(s); //8

//return multiple arrays from a function:
function returnMultipleArrays() {
    return [
        ['a', 'b', 'c'], //注意这里的abc属性得是string，否则错误
        [1, 2, 3]
    ];
}
let [arr1, arr2] = returnMultipleArrays();
console.log(arr1, arr2); //[ 'a', 'b', 'c' ] [ 1, 2, 3 ]

//右边的数据越复杂，左边的也会随之复杂：
let { firstName, lastName, job: { status } } = {
    firstName: 'Dan',
    lastName: 'Wellman',
    job: { status: 'coding' }
};
console.log(firstName, lastName, status); //Dan Wellman coding