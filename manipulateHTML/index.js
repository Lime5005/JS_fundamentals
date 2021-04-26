// DOM traversal(遍历):
let heading = document.getElementById('mainHeading');
console.log(heading.id);
heading.id = 'newHeading!'; //inspect看Elements, 发现id变了
//关键字className property，增加一个class:
heading.className = 'class1 class2'; //class="class1 class2"
//关键字classList.add:  classList is an object
heading.classList.add('class3'); //class="class1 class2 class3"
//关键字remove, 移除一个class:
heading.classList.remove('class1'); //class="class2 class3"
//关键字contains, 看是否存在某个class:
console.log(heading.classList.contains('class2')); //true
//关键字tagName, 如果不知道什么type的element we are working with, 注意，结果总是大写字母
console.log(heading.tagName); //H1
//replace the structure and 增加一个新的child element:
//heading.innerHTML = '<span>New content!</span>';
//outerHTML: replace the content of the element and the element itself:
//heading.outerHTML = '<h2>new heading!</h2>'; //heading h1不见了，只有h2
//get or set the contents: change the text content property instead of innerHTML:
heading.textContent = 'More new contents!'; //h1 contents changed to this new content.

//add a new attribute on the elements:
heading.setAttribute('contenteditable', true); //现在就能即刻更改内容并显示了
//移除
heading.removeAttribute('contenteditable');

//关键字length, 看一个element有几个子元素：第一个ul元素序号[0]
let ul = document.getElementsByTagName('ul')[0];
console.log(ul.children.length); //3
//关键字firstElementChild， lastElementChild看第一个或者最后一个子元素：
console.log(ul.lastElementChild); //<li class="item">3</li>
console.log(ul.parentNode); //<body></body>

//关键字nextSibling(兄弟), working with HTML elements using nextElementSibling or previousElementSibling
console.log(ul.firstElementChild.nextElementSibling); //<li class="item">2</li>
console.log(ul.lastElementChild.previousElementSibling); //<li class="item">2</li>