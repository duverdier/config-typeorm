import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', name: 'first_name', length: 255, nullable: true })
  firstName: string;

  @Column({ type: 'varchar', name: 'last_name', length: 255, nullable: true })
  lastName: string;
}
