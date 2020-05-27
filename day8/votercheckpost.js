var http = require('http');
var formidable = require('formidable');

const server = http.createServer((request, response) => {
    if(request.url=='/voter')
    {
        var form=new formidable.IncomingForm();
        form.parse(request,function(err,fields,files)
        {
            if(err) throw err;
            var name=fields.name;
            var age=parseInt(fields.age);
            if(age>=18)
                response.write("Valid Voter");
            else
                response.write("Invalid Voter");
            response.end();
        });       
    }
    else
    {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write("<form action='voter' method='post'>");
        response.write("<input type='text' size='30' name='name' placeholder='Enter your name' required><br>");
        response.write("<input type='text' size='30' name='age' placeholder='Enter your age' required><br>");
        response.write("<input type='submit' value='Voter Check'>");
        return response.end();
    }
});
server.listen(9999);
