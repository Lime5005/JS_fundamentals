//handling multiple asynchronous tasks with promise chaining.
//The then method returns a promise for chaining multiple promises.
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

getApiResponse('http://numbersapi.com/random').then(
    response => response.match(/^\d+/)[0].substring(0, 3),
).then(
    number => getApiResponse(`https://anapioficeandfire.com/api/characters/${number}`),
).then(
    character => console.log(character),
).catch(
    error => console.log('Error was', error)
);