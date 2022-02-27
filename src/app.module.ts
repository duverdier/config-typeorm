import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './database/ormconfig';
import * as controllers from './controllers';
import * as services from './services';
import * as repositories from './query/repositories';
import { dbProviders } from 'query/providers';
import { DatabaseModule } from 'database/database.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [...Object.values(controllers)],
  providers: [
    ...Object.values(services),
    ...Object.values(repositories),
    ...dbProviders,
  ],
})
export class AppModule {}
