import { Module } from '@nestjs/common';
import { CartitemController } from './cartitem.controller';
import { CartitemService } from './cartitem.service';

@Module({
    controllers: [CartitemController],
    providers: [CartitemService]
})
export class CartitemModule {}
