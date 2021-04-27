import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity({
    name: 'plane'
})
export class Plane {
    @PrimaryGeneratedColumn('uuid', {
        name: 'id'
    })
    id!: string;

    @Column({
        name: 'name'
    })
    name: string;

    @Column({
        name: 'model'
    })
    model: string;

    @Column({
        name: 'seatsNumber',
        type: 'smallint',
        unsigned: true
    })
    seatsNumber: number;

    // @Column({
    //     name: 'spaceId'
    // })
    // spaceId: string;


    // @ManyToOne(type => Space, space => space.links, {onDelete: 'CASCADE'})
    // @JoinColumn({
    //     name: 'spaceId'
    // })
    // space: Space

}