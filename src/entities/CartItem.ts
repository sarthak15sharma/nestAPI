import { Entity, PrimaryColumn, Column, BaseEntity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Product } from './Product';


@Entity('cartitem')
export class CartItem extends BaseEntity {
     
    @PrimaryGeneratedColumn()
    c_id: number;

    @ManyToOne(() => Product, {
        onDelete: 'CASCADE'
    })
    c_product: Product;

    @Column({
        nullable: true
    })
    c_quantity: number;

    @Column()
    c_cartid: number;
}