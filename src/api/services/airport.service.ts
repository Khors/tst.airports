import { getRepository } from 'typeorm'
import { Airport } from './../entities/airport.entity';

export const getManyAirport = async () => {
    const airRepo = getRepository(Airport);
    return await airRepo.find();
}

export const getOneAirport = async (id: string) => {
    const airRepo = getRepository(Airport);
    return await airRepo.findOne({ id: id });
}

export const createAirport = async (data: any) => {
    const airRepo = getRepository(Airport);
    return await airRepo.save(data);
}


export const removeAirport = async (id: string) => {
    const airRepo = getRepository(Airport);
    return await airRepo.delete({ id: id });
}