//这个event object包含许多内容，比如target
let heading = document.getElementById('mainHeading');
heading.addEventListener('click', event => console.log('heading was clicked', event));

//在父上加的event，会传递到子元素上：don't forget the [0], otherwise error
let list = document.getElementsByTagName('ul')[0];
//list.addEventListener('click', event => console.log(event));

//这样会同时启动list的event和这个满屏event
//document.addEventListener('click', event => console.log('yes'));

//为了避免启动所有的event, 有一个方法stopPropagation:
list.addEventListener('click', event => {
    console.log(event);
    event.stopPropagation();
});

//preventDefault method, anchor element
let anchor = document.createElement('a');
anchor.textContent = 'link';
anchor.setAttribute('href', 'http://google.com');
document.body.appendChild(anchor);
anchor.addEventListener('click', event => event.preventDefault());

//removeEventListener: named function references instead of the arrow function:
function handleClick(event) {
    console.log('click happened!');
}
document.addEventListener('click', handleClick);
document.removeEventListener('click', handleClick);

//event DOM 包含scroll, click, search, select, toggle，drag等等