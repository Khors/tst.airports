import { Router } from 'express';
import { jsonParser } from './../middlewares/parser';
import { deleteAirport, getAirport, getAirportList, postAirport } from './../controllers/airport.controller';

const router: Router = Router();

router.use(jsonParser);

router
    .get('/', getAirportList)
    .post('/', postAirport)
    .get('/:airportId', getAirport)

    // .put('/:airportId', ) update airport by ID

    .delete('/:airportId', deleteAirport);

export const AirportRoute = router;