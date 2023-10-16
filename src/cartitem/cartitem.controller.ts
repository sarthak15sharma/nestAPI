import { Controller, Post, Body, Delete, Get, Query } from "@nestjs/common";
import { CartitemService } from "./cartitem.service";
import { CartItemdto } from "src/dto/create-cartitem.dto";

@Controller('cartitem')
export class CartitemController {
    constructor(private cartitemService: CartitemService) { }

    // make a new cart
    @Post('newcart')
    newCart(@Body() obj: object): object {
        return this.cartitemService.makeCart(obj);
    };

    // add a cartitem
    @Post('newcartitem')
    newCartItem(@Body() cartItemdto: CartItemdto): object {
        return this.cartitemService.makecartitem(cartItemdto);
    }

    @Post('updatequantity')
    UpdateQuantity(@Body() cartItemdto: CartItemdto): object {
        return this.cartitemService.updatequantity(cartItemdto);
    }

    @Delete('deletecartitem')
    RemoveItem(@Body() cartItemdto: CartItemdto): object {
        return this.cartitemService.deletecartitem(cartItemdto);
    }

    @Get('getcart')
    GetCart(@Query('cartid') id: number): object {
        return this.cartitemService.getcartitems(id);
    }

}