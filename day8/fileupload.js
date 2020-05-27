var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var mysql = require('mysql');

http.createServer(function (req, res) {
if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var title=fields.title;
        var description=fields.description;
        var filename=files.photo.name;

        var con = mysql.createConnection({host: "localhost",user: "root",password: "",database: "test",port:"3306"});
        con.connect(function(err) {
            if (err) throw err;
            var sql = "INSERT INTO gallery (title, description,photofile) VALUES ('"+title+"','"+description+"','"+filename+"')";
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log("Record saved");
            });
        });

        var oldpath = files.photo.path;
        var newpath = '/home/drbpsharma/Desktop/nodejs/uploads/' + files.photo.name;
        fs.rename(oldpath, newpath, function (err) {
            if (err) throw err;
            res.write('File uploaded and moved!');
            res.end();
        });
    });
} 
else 
{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Photo Gallery</h1>');
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('Upload Photo : <input type="file" name="photo"><br>');
    res.write('Title : <input type="text" name="title"><br>');
    res.write('Description : <textarea name="description" rows="5" cols="20"></textarea><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
}
}).listen(9999);
