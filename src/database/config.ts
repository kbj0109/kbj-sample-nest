import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { User } from 'src/user/user.model';

const type = 'mysql';
const host = 'localhost';
const port = 3306;
const username = 'kbj_sample_nest';
const password = 'kbj_sample_nest';
const database = 'kbj_sample_nest';

export const dbConfig: SequelizeModuleOptions = {
  dialect: type,
  host,
  port,
  username,
  password,
  database,
  models: [User],
  synchronize: true,
};
