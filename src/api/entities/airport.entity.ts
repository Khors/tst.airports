import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Flight } from './flight.entity';

@Entity({
    name: 'airport'
})
export class Airport {
    @PrimaryGeneratedColumn('uuid', {
        name: 'id'
    })
    id!: string;

    @Column({
        name: 'name'
    })
    name: string;

    @Column({
        name: 'city'
    })
    city: string;

    @Column({
        name: 'weather',
        type: 'enum',
        nullable: false,
        enum: ['CLEAR', 'CLOUDLY', 'STORM'],
        default: 'CLEAR'
    })
    weather: string = 'CLEAR';

    // @Column({
    //     name: 'spaceId'
    // })
    // spaceId: string;


    // @OneToMany(type => Flight, flight => flight.toAirport, { onDelete: 'CASCADE' })
    // @JoinColumn({
    //     name: 'spaceId'
    // })
    // space: Space

}