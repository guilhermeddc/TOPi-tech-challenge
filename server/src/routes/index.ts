import {Router} from 'express';

import RepositoryController from '../controllers/RepositoryController';

const routes = Router();

routes.get('/repositories/:lang', RepositoryController.index);

export default routes;
