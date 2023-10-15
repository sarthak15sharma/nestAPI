import { Entity, PrimaryColumn, Column, BaseEntity } from 'typeorm';

@Entity('product')
export class Product extends BaseEntity{

    @PrimaryColumn()
    p_id: number;

    @Column()
    p_name: string;

    @Column()
    p_description: string;

    @Column({
        type: 'numeric'
    })
    p_price: number;

    @Column({
        nullable: true
    })
    p_imageurl: string;
}