import express from 'express';
import { UserRoutes } from '../Modules/User/User.route';

const route = express.Router();

export const moduleRoute = [
  {
    path: '/users',
    route: UserRoutes,
  },
];

moduleRoute.forEach((Route) => route.use(Route.path, Route.route));

export default route;
