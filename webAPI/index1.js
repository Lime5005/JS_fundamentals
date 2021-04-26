//Web Storage: session storage, local storage
//cookies, store locally on the user's machine
//sessions, store the data while the window is open
//local storage is between the two, can store data as the user wants
//关键字setItem，(key, value) pair in string format.
//console.log(window.sessionStorage.setItem('testItem', true));
//see Application->Session Storage->file, can last until we close the window
// 如何存储这个数据，如果是复杂数据，先JSON.stringify一下：
console.log(window.sessionStorage.setItem('testItem', JSON.stringify({ testData: 'test' })));
//如何提取数据： 关键字getItem, JSON.parse method,
console.log(window.sessionStorage.getItem('testItem')); //{ testData: 'test' }
console.log(window.sessionStorage.key(0)); //testItem
//如何移除session item:
console.log(window.sessionStorage.removeItem('testItem')); //undefined数据消失了
//localStorage一样的用法：
console.log(window.localStorage.setItem('localtest', true));
console.log(window.localStorage.removeItem('localtest'));