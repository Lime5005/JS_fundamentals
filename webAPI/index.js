//通过CSS元素来选择操作对象，比如id, ul等, css selector:
let heading = document.querySelector('#mainHeading');
console.log(heading);
//let list = document.querySelector('ul li'); //only show the first child
let list = document.querySelectorAll('ul li'); //show all list
console.log(list);

//geolocation API:会弹出对话框选择是否允许查看地址，callback是指随后要做的动作
//navigator.geolocation.getCurrentPosition(location => console.log(location));
//增加一个error callback:
//navigator.geolocation.getCurrentPosition(location => console.log(location), err => console.log(err));
//增加一个configuration object 作为第三个条件：
navigator.geolocation.getCurrentPosition(
    location => console.log(location),
    err => console.log(err), { timeout: 0 });
//error message: Timeout expired.

//除了getCurrentPosition之外，还有watchPosition(show a position id), both asynchronous(pass callbacks)