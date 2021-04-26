let array = ['x', 'y', 'z'];
array.forEach(function(item) {
    console.log(item);
})

// some: iterate untill callback returns true
array.some(function(curItem) {
        console.log('iterating...');
        return curItem === 'z'; //'iterating...' * 3 如果一直没有达到callback，return false
        //return curItem === 'y'; 'iterating...' * 2 运转直到callback变成true
    })
    // 与some相反的是every:
    // every: iterate untill callback returns false
array.every(function(curItem) {
    console.log('still iterating...');
    return curItem !== 'z'; //still iterating... * 3 只要不是'z'就一直转，直到callback变成true
})

// reduce(): reduce an array to a single value
let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce(function(previous, current) {
    return previous + current;
}, 0); //The reduce() method executes a provided function for each value of the array (from left-to-right).
console.log(sum); //15; 

// map: map an array into another array
let refs = {
    a: 'alpha',
    b: 'beta',
    c: 'gamma',
};
let arr2 = ['a', 'b', 'c'];
let result = arr2.map(function(currentItem) {
    return refs[currentItem];
});
console.log(result); //[ 'alpha', 'beta', 'gamma' ]