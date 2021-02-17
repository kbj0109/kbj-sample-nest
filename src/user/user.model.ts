import { Length } from 'class-validator';
import {
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  Model,
  PrimaryKey,
  Table,
  Unique,
  UpdatedAt,
} from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @PrimaryKey
  @Column
  idx: number;

  @Column({ unique: true })
  userId: string;

  @Length(255)
  @Column
  password: string;

  @Length(100)
  @Column
  salt: string;

  @Unique
  @Column({ unique: true, allowNull: false })
  email: string;

  @Column({ type: DataType.SMALLINT, defaultValue: 0 })
  level: number;

  @Column
  role: string;

  // @CreateDateColumn({type: 'timestampe'})
  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}
