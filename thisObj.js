console.log(this); //{}

let obj = {
    method: function() {
        console.log(this);
    }
}
obj.method(); //{ method: [Function: method] }

function Person(name) {
    this.name = name;
}
let tim = new Person('Tim');
console.log(tim); //Person { name: 'Tim' }