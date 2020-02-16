module.exports = function(app){

  app.get('/', require('./frontpage').get);
// @TODO fix routes
  // Index
  app.get('/documents/:format?', require('./documents').get);

  // Create
  app.post('/documents/:format?', require('./documents').post);

  // Show
  app.get('/documents/:id.:format?', function(req, res) {
  });

  // Update
  app.put('/documents/:id.:format?', function(req, res) {
  });

  // Delete
  app.del('/documents/:id.:format?', function(req, res) {
  });

};
