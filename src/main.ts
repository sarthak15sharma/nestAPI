import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
import { Product } from './entities/Product';
import { CartItem } from './entities/CartItem';

export const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "sarthak",
  database: "test",
  entities: [Product, CartItem],
  synchronize: true
})

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  dataSource.initialize().
    then(() => {
      console.log('database successfully connected');
    }).catch((error) => console.log(error));
  await app.listen(process.env.PORT | 3000);
}
bootstrap();
