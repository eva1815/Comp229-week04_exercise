//import third-party nodejs module Connect
const connect = require('connect');

//instantiate app-server
const app = connect();

//custom middleware

function helloWorld(req, res, next){
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello hello World!');
}
function byeWorld(req, res, next){
    res.setHeader('Content-type', 'text/plain');
    res.end('Bye bye World!');
}

//add middleware to connect application
app.use('/hello', helloWorld);
app.use('/bye', byeWorld);




// run app
app.listen(3000);

console.log('Server running at http://localhost:3000');