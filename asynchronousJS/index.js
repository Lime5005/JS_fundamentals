//let myPromise = new Promise((resolve, reject) => {
//    (Math.random() < 0.5) ? resolve('success'): reject('failure');
//});
//
//myPromise.then(function(msg) {
//    console.log(msg, 'The promise is resolved!');
//    return true;
//}, function(err) {
//    console.log(err, 'The promise is rejected!');
//    return false;
//}).then(function(val) {
//    console.log(val)
//}, function(err) {
//    console.log(err)
//});

//几种状态：
//pending:
//settled: either resolved or rejected
//a promise can only be fulfilled or rejected once, so it can only be settled once.
//then returns a new promise, either returns the first value or the return value of some handler either seccuss or failure.

//using AJAX:
function getNumberfact(url) {
    return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();

        request.onload = function() {
            if (request.status === 200) {
                resolve(request.responseText);
            } else {
                reject(request.statusText);
            }
        }

        request.open('GET', url, true);
        request.send();
    })
}

getNumberfact('http://numbersapi.com/0.777').then(
    response => console.log(response),
    error => console.log(error)
); //400, Bad request