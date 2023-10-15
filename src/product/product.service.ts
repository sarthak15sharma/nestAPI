import { Injectable } from '@nestjs/common';
import { CreateProductdto } from 'src/dto/create-product.dto';
import { Product } from 'src/entities/Product';
import { dataSource } from 'src/main';

@Injectable({})
export class ProductService {

    async makeproduct(createProductdto: CreateProductdto) {
        try {
            await dataSource.createQueryBuilder()
                .insert()
                .into(Product)
                .values({
                    p_id: createProductdto.id,
                    p_name: createProductdto.name,
                    p_description: createProductdto.description,
                    p_price: createProductdto.price,
                    p_imageurl: createProductdto.imageURL
                }).execute()
                .then(() => console.log('product created'))
                .catch((error) => console.log(error))

            return {
                message: 'new product created'
            }
        }
        catch (e) {
            return {
                message: e
            }
        }
    }

    async getallproducts() {
        try {
            const products = await dataSource.getRepository(Product)
                .createQueryBuilder('product').getMany()

            return {
                content: products
            }
        } catch (e) {
            return {
                message: e
            }
        }
    }

    async getproduct(id: number) {
        try {
            const product = await dataSource.getRepository(Product)
                .createQueryBuilder('product')
                .where('p_id = :id', { id: id })
                .getOne();

            return {
                content: product
            }
        } catch (e) {
            return {
                message: e
            }
        }
    }
}