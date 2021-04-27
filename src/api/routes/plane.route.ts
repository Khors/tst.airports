import { Router } from 'express';
import { jsonParser } from './../middlewares/parser';
import { getPlane, getPlaneList, postPlane } from './../controllers/plane.controller';

const router: Router = Router();

router.use(jsonParser);

router
    .get('/', getPlaneList)
    .post('/', getPlane)
    .get('/:planeId', postPlane);

export const PlaneRoute = router;