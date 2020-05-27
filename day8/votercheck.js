const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
    var u=url.parse(request.url,true);
    if(u.pathname=='/voter')
    {
        var name=u.query.name;
        var age=parseInt(u.query.age);
        response.writeHead(200, {'Content-Type': 'text/html'});
        if(age>=18)
            response.write("Valid Voter");
        else
            response.write("Invalid Voter");
    }
    response.end();
});

server.listen(9999);