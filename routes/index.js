module.exports = function(app){

  app.get('/', require('./frontpage').get);
// @TODO fix routes
  // Index
  app.get('/documents', require('./documents').get);

  // Create
  app.post('/documents.:format?', function(req, res) {
  });

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
