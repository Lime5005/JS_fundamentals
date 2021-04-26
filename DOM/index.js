//getElementById is a method of the document object, the DO represents the web page
//the window object represents the browser, the document object represents the page loaded within the browser
console.log(document.getElementById('mainHeading'));

//多种方法，如果要提取一个collection of elements:
//by a class name，注意elements加了s:
let items = document.getElementsByClassName('item');
console.log(items); //HTMLCollection(3) [li.item, li.item, li.item] //a node collection

//by tag name:
console.log(document.getElementsByTagName('li'));

//by name (if there is a name element in the html):
//console.log(document.getElementsByName(''));