const jsonServer = require('json-server');
const auth = require('json-server-auth');
const server = jsonServer.create();
const router = jsonServer.router('api-mock/db.json');
const middlewares = jsonServer.defaults();

// Bind the router db to the app
server.db = router.db;

server.use(middlewares);
server.use(auth);
server.use(router);
console.log(router)

server.listen(3000, () => {
  console.log('JSON Server is running on http://localhost:3000');
});


