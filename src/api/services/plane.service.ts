import { getRepository } from 'typeorm'
import { Plane } from './../entities/plane.entity';

export const getManyPlane = async () => {
    const plaineRepo = getRepository(Plane);
    return await plaineRepo.find();
}

export const getOnePlane = async (id: string) => {
    const plaineRepo = getRepository(Plane);
    return await plaineRepo.findOne({ id: id });
}

export const createPlane = async (data: any) => {
    const plaineRepo = getRepository(Plane);
    return await plaineRepo.save(data);
}
