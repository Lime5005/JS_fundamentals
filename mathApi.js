//Math是已经存在于browser的一个global object, 随时可被调用
console.log(Math.PI); //3.141592653589793
console.log(Math.E); //2.718281828459045
console.log(Math.ceil(1.1)); //2 适用于pagination算法
console.log(Math.floor(1.6)); //1
console.log(Math.round(2.5)); //3 四舍五入
console.log(Math.max(1, 2, 3, 4)); //4
console.log(Math.abs(-9)); //9 转负为正
console.log(Math.sqrt(64)); //8 平方根
console.log(Math.pow(2, 3)); //8 a的b次方
console.log(Math.random()); //0.8307307467630136 0到1的随机数
//生成一个大于0的整数：
console.log(Math.floor(Math.random() * 10)); //8