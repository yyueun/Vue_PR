const http = require('http'); 
const fs = require('fs'); //파일 시스템 

const mySet = function(request, response){
    let url = request.url;
    if(url === '/'){
        url = '/index.html'; //이 문자열을 url이라고 해라
    }
    response.writHead(200,{'Content-Type' : 'text/html'});
    var htmlFile = fs.readFileSync(__dirname + url); //파일을 찾아서 ..*요청메세지 작성 
    response.end(htmlFile);
}
const app = http.createServer(mySet); // 서버 만드는 함수에 태우기  *서버 만들어짐 
app.listen(8080) //8080포트에서 listen 

