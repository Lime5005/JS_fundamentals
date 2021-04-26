//asterisk * 可以暂停，让其它程序先跑，然后再被启动的公式，关键字yield，必须制造一个object/iterator，必须被next循环启动：
function* square(x) {
        yield x * x;
        console.log('generator resuming');
    }
    //console.log(square(8)); //Object [Generator] {}
    //console.log(square(8).next()); //{ value: 64, done: false }
    //console.log(square(8).next()); //{ value: 64, done: false } 循环不下去了，必须用iterator迭代器
let squareIterator = square(8);
console.log(squareIterator.next()); //{ value: 64, done: false }
console.log(squareIterator.next()); //generator resuming, { value: undefined, done: true }
console.log(squareIterator.next()); //{ value: undefined, done: true }

let squareIterator1 = square(9);
console.log(squareIterator1.next()); //{ value: 81, done: false }
console.log(squareIterator1.next()); //generator resuming, { value: undefined, done: true }
console.log(squareIterator1.next()); //{ value: undefined, done: true }

//在生产中加入新的值，sending new values into the generator:
function* squareWithY(x) {
    let y = (yield x * x) * x;
    console.log('generator resuming', y);
}
let squareIterator2 = squareWithY(10);
console.log(squareIterator2.next()); //{ value: 100, done: false }
//y become 2, multiple by 10, 二次循环的时候，第一次循环所生成的yield x*x就不见了，取而代之的是y = y * x
console.log(squareIterator2.next(2)); //generator resuming 20, { value: undefined, done: true }

function* someGeneratorFunction() {
    for (const hero of['Batman', 'Superman']) {
        yield hero; // OK
    }
}
let oooo = someGeneratorFunction();
console.log(oooo.next()); //{ value: 'Batman', done: false }
//here I can do other things before next
console.log(oooo.next().value); //Superman
console.log(oooo.next()); //{ value: undefined, done: true }