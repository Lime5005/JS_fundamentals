//增减元素：
let newDiv = document.createElement('div');
//document.body.appendChild(newDiv); //body最后增加了一个<div></div>

//关键字insertBefore, 增加到某个元素之前:
let referenceElement = document.getElementById('mainHeading');
document.body.insertBefore(newDiv, referenceElement); //h1之前增加了一个<div></div>

//删除一个子元素, 从父元素body下手：
//document.body.removeChild(newDiv);
//如果找不到这个子元素，会抛错，为了避免被抛错，先检查是否存在：
if (document.body.contains(newDiv)) {
    document.body.removeChild(newDiv);
}

//关键字replaceChild, 替换一个子元素：
let newP = document.createElement('p');
document.body.insertBefore(newP, referenceElement); //h1之前增加了<p></p>
document.body.replaceChild(newP, referenceElement); //h1元素不见了，只有<p></p>

let newElement = document.createElement('div');
newElement.textContent = 'new element!';

//let comment = document.createComment('new comment!');

//Fragment(分段)Create a documentFragment node and append a child to it (a list item).
let df = document.createDocumentFragment();
df.appendChild(newElement);
let target = document.getElementById('target'); //target是在html手动加上的
target.appendChild(df);