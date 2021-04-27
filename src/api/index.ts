import { Router } from 'express';
import { AirportRoute } from './routes/airport.route';
import { FlightRoute } from './routes/flight.route';
import { PlaneRoute } from './routes/plane.route';

const router: Router = Router();

router.use('/airport', AirportRoute);
router.use('/plane', PlaneRoute);
router.use('/flight', FlightRoute);

export const api = router;