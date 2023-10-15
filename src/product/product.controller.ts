
import { ProductService } from "./product.service";
import { Controller, Get, Post, Body, Query } from "@nestjs/common";
import { CreateProductdto } from "src/dto/create-product.dto";

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Post('newproduct')
    NewProduct(@Body() createProductdto: CreateProductdto): object {
        return this.productService.makeproduct(createProductdto);
    }

    @Get('getallproducts')
    GetAllProducts(): object {
        return this.productService.getallproducts();
    }

    @Get('getproduct')
    GetProduct(@Query('productid') id: number): object {
        return this.productService.getproduct(id);
    }

}