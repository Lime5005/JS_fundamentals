//length表示公式内的变量有几个
function testFunction(arg1, arg2) {
    return arg1 + arg2;
}

//console.log(testFunction.length); //2

//call, apply, bind
let person = {
    name: 'Joe',
    job: 'developer'
};

let person1 = {
    name: 'Lili',
    job: 'sales'
}

/*function introduce() {
    console.log(`Hi, my name is ${this.name} and I'm a ${this.job}`);
}
//如何唤起这个公式？用call指定哪个this:
introduce.call(person); //Hi, my name is Joe and I'm a developer
introduce.call(person1); //Hi, my name is Lili and I'm a sales*/

//call还可以加入一个新的变量：
function introduce(inductee) {
    console.log(`Hi ${inductee}, my name is ${this.name} and I'm a ${this.job}`);
};
introduce.call(person, 'my friends'); //Hi my friends, my name is Joe and I'm a developer

//如果不知道有多少变量要加，用apply, (array)：
introduce.apply(person1, ['bob']); //Hi bob, my name is Lili and I'm a sales

//bind，把一个公式bind到一个object:
function addToCart(price) {
    if (!this.total) {
        this.total = 0;
    }
    this.total += price;
    return `${this.name}'s cart total is ${this.total}`;
}

let testCart = addToCart.bind(person);
console.log(testCart(50)); //Joe's cart total is 50
let testCart1 = addToCart.bind(person1);
console.log(testCart1(100)); //Lili's cart total is 100

//function 还可以加变量:
function addToCartWithFee(price, fee) {
    if (!this.total) {
        this.total = 0;
    }
    this.total += price += fee || 0;
    return `${this.name}'s cart total is ${this.total}`;
}

let testCart2 = addToCartWithFee.bind(person1, 10);
//this.total已经存在并使用过了，所以都要加：
console.log(testCart2(1000)); //Lili's cart total is 1110

//如果有定义fee， 则用fee, 如果没有定义，则是0
//let testCart2 = addToCartWithFee.bind(person1);
//console.log(testCart2(1000)); //Lili's cart total is 1100