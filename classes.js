//关键字class：
class Employee {
    constructor(name) {
        this.name = name;
    }

    shoutName() {
        return this.name.toUpperCase();
    }

    static reverseName() {
        return this.name.split('').reverse().join('');
    }

    static reverseName1(ok) {
        return ok.name.split('').reverse().join('');
    }

    work() {
        console.log(this.name, 'is working');
    }

}

//关键字extends：子承父，可以覆盖同名的function
//super(arguments);  // calls the parent constructor (only inside the child constructor)
//关键字super,唤醒父的一个function
class Boss extends Employee {
    work() {
        console.log('Our boss: ', this.name, 'is bossing');
        console.log(super.shoutName());
    }
}

let person1 = new Employee('Joe');
let person2 = new Employee('Lily');
console.log(person1.shoutName()); //JOE
//需要重复使用的功能static function cannot be called by its instances, but by itself:
//console.log(person1.reverseName()); //TypeError: person1.reverseName is not a function
//console.log(Employee.reverseName()); //eeyolpmE
console.log(Employee.reverseName1(person1)); //eoJ
console.log(Employee.reverseName1(person2)); //yliL

let person3 = new Boss('Marie');
//console.log(person3.work());//这样会跑出一个undefined
//console.log(person1.work());//这样会跑出一个undefined
person3.work(); //Our boss:  Marie is bossing, MARIE//注意用中文输入法的；标点与法语输入法;不同，计算机不认得中文输入法的标点
person1.work(); //Joe is working