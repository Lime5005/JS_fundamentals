// use postMessage interface: this is dedicated worker, there is also shared worker
//use command line: npm i -g http-server->http-server(where the index.html folder is)->copy paste the address
let worker = new Worker('worker.js');
worker.postMessage('Hello from the main script');
worker.onmessage = event => console.log(event.data);

//terminate method:
setTimeout(() => {
    worker.terminate()
}, 200);
//using postMessage and onmessage event handlers to communicate between threads(pages);
//Spawn new threads separate from the main UI thread.