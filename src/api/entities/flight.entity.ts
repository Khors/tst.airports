import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Airport } from './airport.entity';
import { Plane } from './plane.entity';

@Entity({
    name: 'flight'
})
export class Flight {
    @PrimaryGeneratedColumn('uuid', {
        name: 'id'
    })
    id!: string;

    @Column({
        name: 'code'
    })
    code: string;

    @Column({
        name: 'city'
    })
    city: string;

    @Column({
        type: 'datetime'
    })
    dateStart: string;

    @Column({
        name: 'airportId'
    })
    from: string;

    @Column({
        name: 'planeId'
    })
    planeId: string;


    @ManyToOne(type => Airport, {onDelete: 'CASCADE'})
    @JoinColumn({
        name: 'from'
    })
    fromAirport: Airport

    @ManyToOne(type => Airport, {onDelete: 'CASCADE'})
    @JoinColumn({
        name: 'to'
    })
    toAirport: Airport

    @ManyToOne(type => Plane, {onDelete: 'CASCADE'})
    @JoinColumn({
        name: 'planeId'
    })
    plane: Plane
    

}