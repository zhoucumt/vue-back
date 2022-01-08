let http = require('http');
let users = [
  { id: 1, name: '鲁班' },
  { id: 2, name: '亚瑟' },
  { id: 3, name: '孙悟空' },
];

let server = http.createServer(function (req, res) {
  console.log(req.method, req.url);
  if (req.url == '/api/users') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end(JSON.stringify(users));
  } else {
    res.end('Now Found!');
  }
});
server.listen(3000, () => {
  console.log('服务正在3000端口上启动!');
});
