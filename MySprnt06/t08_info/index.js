'use strict'

// const http = require('http');
const process = require('process');
const path = require('path');
const os = require('os');
const express= require('express');
const app = express();


// http.createServer(function(request,response){
//     response.end(render());
// }).listen(3000, "127.0.0.1",function(){
//     console.log("Open http://127.0.0.1:3000/ \n Click Ctrl+C for stop server");
// });

app.get('/', function(request, response){

    console.log(render(request));
    let result = 'Результат просматривать в логах среды разработки - обновите страницу для обновления результата</br>';
    result += 'Посмотреть параметры GET запроса <a href="?one=1&two=eee&three=234">>>>></a>';
    response.send(result);

});


app.listen(3000,"127.0.0.1",function(){
    console.log("Open http://127.0.0.1:3000/ \n Click Ctrl+C for stop server");
});


function render(request) {
    let result = '';

    // a name of file of the executed script
    result += renderLog('a name of file of the executed script', path.basename(__filename));

    // arguments passed to the script
    result +=  renderLog('arguments passed to the script', process.argv.map((item) => {
        return item;
    }));

    // IP address of the server
    // result +=  renderLog('IP address of the server', request.connection.remoteAddress);
    // result +=  renderLog('IP address of the server', request.headers["x-forwarded-for"]);

    result +=  renderLog('IP address of the server', os.networkInterfaces().en0[1].address);

    // a name of host that invokes the current script
    result += renderLog('a name of host that invokes the current script', os.hostname());

    // a name and a version of the information protocol
    result +=  renderLog('a name and a version of the information protocol', request.protocol);

    // a query method
    result +=  renderLog('a query method', request.method);

    // User-Agent information
    result +=  renderLog('User-Agent information', request.headers["user-agent"]);

    // IP address of the client
    result +=  renderLog('IP address of the client', request.connection.remoteAddress);

    // a list of parameters passed by URL
   result +=  renderLog('a list of parameters passed by URL', JSON.stringify(request.query));

    return result;
}


function renderLog(name, value) {
    let result = '';
    result += `-------> ${name} <--------\n`;
    result += '-------> start <--------\n';
    result +=  value + '\n';
    result += '-------> end <--------\n\n';
    return result;
}