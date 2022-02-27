import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Photo } from './photo.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', name: 'first_name', length: 255, nullable: true })
  firstName: string;

  @Column({ type: 'varchar', name: 'last_name', length: 255, nullable: true })
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany((type) => Photo, (photo) => photo.user)
  photos: Photo[];
}
