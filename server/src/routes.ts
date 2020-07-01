import express from 'express';
import knex from './database/connection';
import PointsController from './controlers/Points_controller'
import ItensController from './controlers/Itens_Controller'

const routes = express.Router();
const pointsController = new PointsController();
const itensController = new ItensController();

//index, create, updat, delete, show

routes.get('/itens', itensController.index);

routes.post('/points', pointsController.create)
routes.get('/points', pointsController.index)
routes.get('/points/:id', pointsController.show)




export default routes;