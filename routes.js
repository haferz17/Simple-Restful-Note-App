'use strict'

const controller = require('./controller');

module.exports = function(app){
    app.get('/',controller.welcome);
    app.get('/notes',controller.viewNotes);
    app.get('/categories',controller.viewCategories);
    app.post('/notes',controller.addNote);
    app.post('/categories',controller.addCategory);
    app.put('/notes/:id',controller.updateNote);
    app.put('/categories/:id',controller.updateCategory);
    app.delete('/notes/:id',controller.delNote);
    app.delete('/categories/:id',controller.delCategory);
}
