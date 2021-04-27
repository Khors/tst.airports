// controller contains business logic of appication
// ofcourse we HAVE TO use validations for each request

import { getManyPlane, getOnePlane, createPlane } from './../services/plane.service';

export const getFlightList = async (req, res, next) => {
    try {
        const flights = await getManyPlane();
        res.status(200).json({ flights });
    } catch (error) {
        next(error);
    }
}

export const getFlight = async (req, res, next) => {
    try {
        const flight = await getOnePlane(req.params.planeId);
        res.status(200).json(flight);
    } catch (error) {
        next(error);
    }
}

export const postFlight = async (req, res, next) => {
    try {
        const flight = await createPlane(req.body);
        res.status(201).json(flight);
    } catch (error) {
        next(error);
    }
}
