let Person = function(name) {
    this.name = name;
};

Person.prototype = {
    greet() {
        return `hi, my name is ${this.name}`;
    }
};

Person.prototype.sayhi = function() {
    return `Hello, ${this.name}`;
};

let fred = new Person('fred');
console.log(fred); //{ name: 'fred' }
console.log(fred.sayhi); //[Function (anonymous)]
console.log(fred.sayhi()); //Hello, fred
console.log(fred.greet()); //hi, my name is fred

//也可以使用create关键字创造新的instance, 但内容不能被循环到：
let lily = Object.create(Person.prototype, {
    name: { writable: true, value: 'Lily' }
});

console.log(lily.greet()); //hi, my name is Lily

//defineProperty and definePropertires关键字:
Object.defineProperty(lily, 'job', {
    value: 'developer',
    writable: true,
    configurable: true,
    enumerable: true
});

console.log(lily); //{ job: 'developer' }

//defineProperties 不能被循环到，但可以被点到
Object.defineProperties(lily, {
    heightInCm: {
        value: 170
    },
    weightInKg: {
        value: 50
    }
});

console.log(lily.weightInKg); //50
console.log(lily.name); //Lily
Object.keys(lily).forEach(function(item) {
    console.log(lily[item]); //developer???
})