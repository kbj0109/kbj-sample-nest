import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/user/user.model';
import { dbConfig } from './config';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize(dbConfig);
      sequelize.addModels(dbConfig.models);
      await sequelize.sync();
      return sequelize;
    },
  },
];

export const db = { User: User };
