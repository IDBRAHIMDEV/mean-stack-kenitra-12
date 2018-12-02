const http = require('http');

const server = http.createServer((req, res) => {
    
    if(req.url === '/') {
        res.write("je suis à la page index");
        res.end()
    }

    if(req.url === "/api/courses") {
        res.write(JSON.stringify(['laravel', 'VueJS', 'Angular']));
        res.end();
    }
})

server.listen(3000);