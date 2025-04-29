const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 5000;

const servePage = (res, fileName, contentType = 'text/html') => {
  const filePath = path.join(__dirname, fileName);
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.writeHead(500);
      return res.end('Internal Server Error');
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
};

const server = http.createServer((req, res) => {
  console.log(`Request: ${req.url}`);

  switch (req.url) {
    case '/':
    case '/home':
      servePage(res, 'home.html');
      break;
    case '/about':
      servePage(res, 'about.html');
      break;
    case '/contact':
      servePage(res, 'contact.html');
      break;
    case '/style.css':
      servePage(res, 'style.css', 'text/css');
      break;
    default:
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 - Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
