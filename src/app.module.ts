import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { CartitemModule } from './cartitem/cartitem.module';

@Module({
  imports: [AuthModule, UserModule, ProductModule, CartitemModule]
})
export class AppModule {}
