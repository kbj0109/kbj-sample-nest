import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { dbConfig } from './database/config';

@Module({
  imports: [TypeOrmModule.forRoot(dbConfig), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
