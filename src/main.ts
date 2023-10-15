import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
import { Product } from './entities/Product';
import { CartItem } from './entities/CartItem';

export const dataSource = new DataSource({
  type: "postgres",
  host: process.env.RDS_HOSTNAME,
  port: 5432,
  username: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DS_NAME,
  entities: [Product, CartItem],
  synchronize: true
})

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  dataSource.initialize().
    then(() => {
      console.log('database successfully connected');
    }).catch((error) => console.log(error));
  await app.listen(process.env.PORT);
}
bootstrap();
