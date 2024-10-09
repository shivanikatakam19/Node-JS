var fs = require('fs');
var http = require('http');

http.createServer(
    function (req, res) {

        // readFile method is used to read the file from the computer
        fs.readFile('demo.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
        });

        // appendFile method appends specified content to a file. If the file does not exist, the file will be created.
        fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
            if (err) throw err;
            console.log('append file Saved!');
        });

        // method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing.
        // If the file does not exist, an empty file is created.
        fs.open('mynewfile2.txt', 'w', function (err, file) {
            if (err) throw err;
            console.log('open Saved!');
        });

        // method replaces the specified file and content if it exists.
        // If the file does not exist, a new file, containing the specified content, will be created.
        fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
            if (err) throw err;
            console.log('write file Saved!');
        });

        // method deletes the specified file.
        fs.unlink('mynewfile2.txt', function (err) {
            if (err) throw err;
            console.log('File deleted!');
        });

        // renames the existing file name
        fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
            if (err) throw err;
            console.log('File Renamed!');
        });

    }
).listen(8080, console.log('server started!'));