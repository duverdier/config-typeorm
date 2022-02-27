import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './users.entity';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  url: string;

  @Column('text')
  description: string;

  @Column({ type: 'varchar', name: 'file_name', length: 255, nullable: true })
  fileName: string;

  @Column({ type: 'integer', name: 'views', nullable: true })
  views: number;

  @Column()
  isPublished: boolean;

  @ManyToOne((type) => User, (user) => user.photos)
  user: User;
}
