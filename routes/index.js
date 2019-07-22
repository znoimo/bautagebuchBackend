const projectController = require('../controllers').project;
const diaryController = require('../controllers').diary;
const entryController = require('../controllers').entry;

module.exports = (app) => {
    app.get('/api',(req,res) => res.status(200).send({
        message: 'Welcome to the Todos API!',
    }));
    // projects routes
    app.get('/api/projects', projectController.findAll);
    app.post('/api/projects', projectController.create);
    app.put('/api/projects/:id', projectController.update);
    app.delete('/api/projects/:id', projectController.deleteById);
    
    // diary routes
    app.get('/api/diaries/:projectId', diaryController.findAllByProjectId);
    app.post('/api/diaries/:projectId', diaryController.create);
    app.delete('/api/diaries/:id', diaryController.deleteById);
    
    // entry routes
    app.get('/api/entries/:diaryId', entryController.findAllByDiaryId);
    app.post('/api/entries', entryController.create);
    app.put('/api/entries/:id', entryController.update);
    app.delete('/api/entries/:id', entryController.deleteById);
}