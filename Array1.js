//let str = 'string';
//let anotherStr = 'Hell o World';
//console.log(str.length); //6
//console.log(anotherStr.length); //12 空格也算
//let str1 = 'he  llo   Wor  ld';
//let stringNoSpace = str1.replace(/ /g, ''); //g=global replacement
//console.log(stringNoSpace.length); //10

//array has 0 based index
let array = ['one', 'two', 'three'];
console.log(array.length); //3
array.push('four'); //从后加
array.unshift('-1', 'zero'); //从前加
array.pop(); //从后减
array.shift(); //从前减
console.log(array); //[ 'zero', 'one', 'two', 'three' ]

array.splice(0, 3, 'a', 'b', 'c'); //从0开始，减三个， 再从此处插入abc
console.log(array); //[ 'a', 'b', 'c', 'three' ]
console.log(array.reverse()); //[ 'three', 'c', 'b', 'a' ]

console.log([3, 10000, -1].sort()); //[ -1, 10000, 3 ]
console.log([3, 10000, -1].sort(function(a, b) {
        return a - b;
    })) //[ -1, 3, 10000 ] a，b相减的时候自动排序，从小到大
console.log([3, 2, 1].sort()); //[ 1, 2, 3 ] sort自动排序，从小到大

console.log(['b', 'C', 'a'].sort(function(a, b) {
        let lowercaseA = a.toLowerCase(),
            lowercaseB = b.toLowerCase();

        if (lowercaseA < lowercaseB) {
            return -1;
        } else if (lowercaseA === lowercaseB) {
            return 0;
        } else {
            return 1;
        }
    })) //[ 'a', 'b', 'C' ]
    // array to string: join
console.log(array.join('')); //threecba
console.log(array.indexOf('b')); //2, (是否包含'b'?以及在哪里?)
console.log(array.slice(0, 2)); //[ 'three', 'c'] 从0开始，提取2个数，组成新的array
console.log(array.slice(-2)); //[ 'b', 'a' ] Extract only the last two character