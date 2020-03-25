const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();


/*

 Tipos de parâmetros

 Query Params: através da url com ? (request.query)
 Route Params: através dos recursos (reqeust.params)
 Request body: corpo da requisição (request.body)

*/

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id',IncidentController.delete);

module.exports = routes;