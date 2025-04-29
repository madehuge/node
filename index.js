const http = require('http');

// Define server port
const PORT = process.env.PORT || 5000;

// Routing logic
const handleRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html');

  switch (req.url) {
    case '/':
      res.statusCode = 200;
      res.end('<h1>Welcome to the Home Page</h1>');
      break;
    case '/about':
      res.statusCode = 200;
      res.end('<h1>About Us</h1><p>This is the about page.</p>');
      break;
    case '/services':
      res.statusCode = 200;
      res.end('<h1>Our Services</h1><p>We offer web development and design.</p>');
      break;
    default:
      res.statusCode = 404;
      res.end('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
  }
};

// Create and start the server
const server = http.createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`🚀 Server is running at ${PORT}`);
});