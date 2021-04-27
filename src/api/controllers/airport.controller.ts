// controller contains business logic of appication
// ofcourse we HAVE TO use validations for each request

import { getManyAirport, getOneAirport, createAirport, removeAirport } from './../services/airport.service';

export const getAirportList = async (req, res, next) => {
    try {
        const airports = await getManyAirport();
        res.status(200).json({ airports });
    } catch (error) {
        next(error);
    }
}

export const getAirport = async (req, res, next) => {
    try {
        const airport = await getOneAirport(req.params.airportsId);
        res.status(200).json(airport);
    } catch (error) {
        next(error);
    }
}

export const postAirport = async (req, res, next) => {
    try {
        const airport = await createAirport(req.body);
        res.status(201).json(airport);
    } catch (error) {
        next(error);
    }
}

export const deleteAirport = async (req, res, next) => {
    try {
        await removeAirport(req.params.airportsId);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
}