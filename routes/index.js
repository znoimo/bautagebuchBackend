const projectController = require('../controllers').project;

module.exports = (app) => {
    app.get('/api',(req,res) => res.status(200).send({
        message: 'Welcome to the Todos API!',
    }));
    // projects routes
    app.get('/api/projects', projectController.findAll);
    app.post('/api/projects', projectController.create);
    app.put('/api/projects/:id', projectController.update);
    //app.delete('/api/projects/:id', projectController.update);
    // diary routes

    // entry routes
}