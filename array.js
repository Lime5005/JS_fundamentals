function logArgs() {
    let args = Array.from(arguments);
    console.log(args);
}
logArgs('a', 'b', 'c'); //[ 'a', 'b', 'c' ]

//用Array.from建立任何一个新的循环的array: 
let arr1 = Array.from('yes');
console.log(arr1); //[ 'y', 'e', 's' ]

//还可用map转换一个新的array: [一个array, 一个要被array里所有元素执行的公式， 一个所被this用到的值]
let mapObj = {
    1: 'one',
    2: 'two',
    3: 'three'
};
let numArr = [1, 2, 3];
let mapArr = Array.from(numArr, function(item) {
    return this[item];
}, mapObj);
console.log(mapArr); //[ 'one', 'two', 'three' ]

//其他的栗子，（只给需要的前两个参数）：
let arr0 = Array.from([1, 2, 3], x => x + x);
console.log(arr0); //[ 2, 4, 6 ]
let obj0 = Array.from({ length: 5 }, (v, k) => k);
console.log(obj0); //[ 0, 1, 2, 3, 4 ]