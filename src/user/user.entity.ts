import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@Unique(['userId', 'email'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column({ length: 255 })
  userId: string;

  @Column({ length: 255 })
  password: string;

  @Column({ length: 100 })
  salt: string;

  @Column({ length: 255 })
  email: string;

  @Column('smallint')
  level: number;

  @Column('')
  role: string;

  // @CreateDateColumn({type: 'timestampe'})
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
