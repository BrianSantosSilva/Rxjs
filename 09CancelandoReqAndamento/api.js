const http = require('http');


http.createServer((req,res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    });


    const matchURL = /^\/response\/(.+)\/delay\/(\d+)\/?$/;

    // http://127.0.0.1:5200/respose/{"data":"hello world"}/delay/1000/

    if(!matchURL.test(req.url)) return res.end();

    const [, response, delay] = matchURL.exec(req.url);

   

    const jsonResponse = JSON.parse(decodeURIComponent(response));

    setTimeout(()=> {
        console.log('terminou mesmo assim')
        res.write(JSON.stringify(jsonResponse));
        res.end();
    }, +delay)

}).listen(5200);