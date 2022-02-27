import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.API_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: ['dist/**/**/*.entity.{ts,js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  migrationsRun: false,
  migrationsTableName: 'migration',
  logging: true,
  logger: 'file',
  cli: {
    migrationsDir: 'migrations',
  },
  synchronize: false,
};
export default config;
