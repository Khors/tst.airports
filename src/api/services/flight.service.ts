import { getRepository } from 'typeorm'
import { Flight } from './../entities/flight.entity';

export const getManyFlight = async () => {
    const flightRepo = getRepository(Flight);
    return await flightRepo.find();
}

export const getOneFlight = async (id: string) => {
    const flightRepo = getRepository(Flight);
    return await flightRepo.findOne({ id: id });
}

export const createFlight = async (data: any) => {
    const flightRepo = getRepository(Flight);
    return await flightRepo.save(data);
}
