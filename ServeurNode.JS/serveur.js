let url=require('url');
let http= require('http');
let fs= require('fs');
let serveur= http.createServer();

serveur.on('request', (request, response)=>{
    let query = url.parse(request.url, true).query
    let name = query.name === undefined ? 'anonyme': query.name


    fs.readFile('Site/index.html','utf8', (err,data)=>{
        if (err) {
            response.writeHead(404);
            response.end("Ce fichier n'existe pas")
        }
        response.writeHead(200,{
            'content-type': 'text/html; charset=utf-8'
        });
        data = data.replace('{{name}}', name)
        response.end(data);
    });   
});
serveur.listen(8080);


