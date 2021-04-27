import { Router } from 'express';
import { jsonParser } from './../middlewares/parser';
import { getFlight, getFlightList, postFlight} from './../controllers/flight.controller';

const router: Router = Router();

router.use(jsonParser);

router
    .get('/', getFlightList)
    .post('/', postFlight)
    .get('/:flightId', getFlight);


export const FlightRoute = router;