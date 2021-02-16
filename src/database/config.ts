import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const type = 'mysql';
const port = 3306;
const host = 'localhost';
const username = 'kbj_sample_nest';
const password = 'kbj_sample_nest';
const database = 'kbj_sample_nest';

export const dbConfig: TypeOrmModuleOptions = {
  type,
  port,
  host,
  username,
  password,
  database,
  entities: [` ${__dirname}/../**/*.entity.{js,ts}`],
  synchronize: true,
  // Camel 컬럼명을 Underscore로
  namingStrategy: new SnakeNamingStrategy(),
};
