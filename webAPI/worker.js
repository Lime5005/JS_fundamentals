//onmessage is globally available:
onmessage = event => {
    console.log(event.data);
    postMessage('Hello message received!');
}