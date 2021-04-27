// controller contains business logic of appication
// ofcourse we HAVE TO use validations for each request

import { getManyPlane, getOnePlane, createPlane } from './../services/plane.service';

export const getPlaneList = async (req, res, next) => {
    try {
        const planes = await getManyPlane();
        res.status(200).json({ planes });
    } catch (error) {
        next(error);
    }
}

export const getPlane = async (req, res, next) => {
    try {
        const plane = await getOnePlane(req.params.planeId);
        res.status(200).json(plane);
    } catch (error) {
        next(error);
    }
}

export const postPlane = async (req, res, next) => {
    try {
        const plane = await createPlane(req.body);
        res.status(201).json(plane);
    } catch (error) {
        next(error);
    }
}
