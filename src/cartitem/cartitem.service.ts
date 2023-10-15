import { Injectable } from "@nestjs/common/decorators";
import { CartItemdto } from "src/dto/create-cartitem.dto";
import { CartItem } from "src/entities/CartItem";
import { Product } from "src/entities/Product";
import { dataSource } from "src/main";

@Injectable()
export class CartitemService {
    //make a new cart
    async makeCart(obj: object) {

        try {
            const product: Product = await dataSource.getRepository(Product)
                .createQueryBuilder().where("p_id = :pid", { pid: 0 })
                .getOne()

            await dataSource.createQueryBuilder()
                .insert().into(CartItem)
                .values({
                    c_product: product,
                    c_quantity: 0,
                    c_cartid: obj['cart_id']
                }).execute();
        }
        catch (e) {
            return {
                message: e
            }
        }
    }

    //make a new cartitem
    async makecartitem(cartItemdto: CartItemdto) {
        try {

            const product: Product = await dataSource.getRepository(Product)
                .createQueryBuilder().where("p_id = :pid", { pid: cartItemdto.product })
                .getOne()

            await dataSource.createQueryBuilder()
                .insert().into(CartItem)
                .values({
                    c_product: product,
                    c_quantity: cartItemdto.quantity,
                    c_cartid: cartItemdto.cartid
                })
                .execute();

            return {
                message: 'cart item added'
            }
        } catch (e) {
            return {
                message: e
            }
        }
    }

    async updatequantity(cartItemdto: CartItemdto) {
        try {
            await dataSource.createQueryBuilder()
                .update(CartItem)
                .set({
                    c_quantity: cartItemdto.quantity
                }).where("c_cartid = :cid and c_product = :pid", { cid: cartItemdto.cartid, pid: cartItemdto.product })
                .execute();

            return {
                message: 'quantity updated'
            }
        } catch (e) {
            return {
                message: e
            }
        }
    }

    async deletecartitem(cartItemdto: CartItemdto) {
        try {
            await dataSource.createQueryBuilder()
                .delete().from(CartItem)
                .where("c_product = :pid and c_cartid = :cid", { pid: cartItemdto.product, cid: cartItemdto.cartid })
                .execute();

            return {
                message: 'cartitem removed'
            }
        } catch (e) {
            return {
                message: e
            }
        }
    }

    async getcartitems(id: number) {
        try {
            const cart = await dataSource.getRepository(CartItem).createQueryBuilder('cartitem')
                .leftJoinAndSelect("cartitem.c_product", "product")
                .where('c_cartid = :id', { id: id })
                .getMany()

            return {
                content: cart
            };
        } catch (e) {
            return {
                message: e
            }
        }
    }

    async test(id: number) {

        const cart = await dataSource.getRepository(CartItem).createQueryBuilder('cartitem')
            .leftJoinAndSelect("cartitem.c_product", "product")
            .where('c_cartid = :id', { id: id })
            .getMany()

        return {
            ans: cart
        };
    }
}