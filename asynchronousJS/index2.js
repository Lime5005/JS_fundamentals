//Async Function, it will always return a promise, and resolves it immediately.
//It enables the await operator.
function getApiResponse(url) {
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
//使用await颠倒了1与2的出现顺序，本来要即刻执行的程序1要等待2执行完了才能执行
//如果没有关键字await, 则先1再2
//async function makeRequest(url) {
//    //AJAX request for some data...
//    const prom = await getApiResponse(url);
//    console.log('1');
//    return prom;
//}

//使用多个await function: 3, 1, 2, gotPromise
//在1后的link加上/jhg，走过3，1就立刻走不通了
async function makeRequest(url) {
    try {
        const numberPromise = await getApiResponse(url);
        const number = numberPromise.match(/^\d+/)[0].substring(0, 3);
        console.log('1');
        const gotPromise = await getApiResponse(`https://anapioficeandfire.com/api/characters/${number}`);
        console.log('2');
        return gotPromise;
    } catch (e) {
        throw new error(e);
    }
}

makeRequest('http://numbersapi.com/random').then(result => console.log(result))
    .then(console.log('3'))
    .catch(error => console.log('The error is: ', error));

//The await operator只允许在同步公式中运用，目的是暂停一个同步程序，等待一个异步程序的完成再继续或者等另一个程序再继续
// async + await  约等于 generator + yield