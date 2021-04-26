//date必须用new来启动
let now = new Date();
console.log(typeof(now)); //2020-09-10T20:30:55.629Z
let now1 = Date();
console.log(now1);
//Thu Sep 10 2020 22: 33: 20 GMT + 0200(Central European Summer Time)
//加关键字new的区别，一个是object，一个是string, 用typeof()可测出
let partyTime = new Date(946684799000);
console.log(partyTime); //1999-12-31T23:59:59.000Z
let dob = new Date('October 9 2006');
console.log(dob); //2006-10-08T22:00:00.000Z