//AJAX, Asynchronous Javascript and XML, 异步Java脚本和XML
//get response from the server without reloading the page
//make an ajax request ->create an XHR object ->manipulate the object to make the request
let xhr = new XMLHttpRequest();
console.log(xhr); // 注意there is an upload method for ajax upload, a series of properties, and a lot of event handlers
// open, send method: (三个变量：方式， api, 是否异步)
xhr.open('GET', 'http://numbersapi.com/42', true); //看network->response
xhr.send();
//attach the event handler to the xhr object to see the response:
xhr.onload = function() {
    console.log(this.response);
};