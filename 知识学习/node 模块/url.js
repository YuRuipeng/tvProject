var url = require("url");
var str = url.parse("http://www.baidu.com?id=12&age=111");
console.log(str);

// 不加true
//  {
//   protocol: 'http:',
//   slashes: true,
//   auth: null,
//   host: 'www.baidu.com',
//   port: null,
//   hostname: 'www.baidu.com',
//   hash: null,
//   search: '?id=12&age=111',
//   query: 'id=12&age=111',
//   pathname: '/',
//   path: '/?id=12&age=111',
//   href: 'http://www.baidu.com/?id=12&age=111' }



var str = url.parse("http://www.baidu.com?id=12&age=111",true);
//加true
// {
//     protocol: 'http:',
//     slashes: true,
//     auth: null,
//     host: 'www.baidu.com',
//     port: null,
//     hostname: 'www.baidu.com',
//     hash: null,
//     search: '?id=12&age=111',
//     query: { id: '12', age: '111' },
//     pathname: '/',
//     path: '/?id=12&age=111',
//     href: 'http://www.baidu.com/?id=12&age=111' }