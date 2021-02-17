import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { dbConfig } from './database/config';
import { databaseProviders } from './database/database.providers';

@Module({
  imports: [SequelizeModule.forRoot(dbConfig), UserModule],
  controllers: [AppController],
  providers: [...databaseProviders, AppService],
})
export class AppModule {}
