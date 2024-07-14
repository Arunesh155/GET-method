http=require('http');
url=require('url');
querystring = require('querystring');

function sample(request,response)
{   
    if(request.url.includes('/login'))
    {
    console.log('URL '+request.url+' received.');
    
    var path = url.parse(request.url).pathname;
    console.log('Request for '+path+' received.');
    
    
    var query =url.parse(request.url).query;
    console.log("Query is:");
    console.log(query);
    
    qs=querystring.parse(query);
    console.log("Query string is:");
    console.log(qs);
    var name = qs["name"];
    var email=qs["email"];
    var mobile=qs["mobile"];
    var age=qs["age"];
    
    response.write('Hi ' + name + ', your email id and moblie number is registered...')
    response.end();
    }
    else
    {}
}
http.createServer(sample).listen(4444);
console.log('Server Running....');
