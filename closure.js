//捆绑函数及其周围词汇环境的组合，由内而外的访问函数，使用关键字return：
function order() {
    let total = 0;
    return function addProduct(price) {
        let salesTax = price * 0.17;
        let fee = price * 0.05;

        total += price + salesTax + fee;

        return total;
    }
}

let myOrder = new order();
console.log(myOrder(300)); //366
console.log(myOrder(1000)); //1586


const add = (a, b) => a + b;
const partialApply = (fn, ...fixedArgs) => {
    return function(...remainingArgs) {
        return fn.apply(this, fixedArgs.concat(remainingArgs)); //concat: Join two or more arrays
    };
};
const add10 = partialApply(add, 10);
console.log(add10(5)); //15