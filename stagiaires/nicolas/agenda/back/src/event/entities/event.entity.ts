import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Tag } from '../../tag/entities/tag.entity';
import { AddInfos } from './addInfos.entity';

@Entity()
export class Event {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name:string;

  @Column()
  startDate:Date;

  @Column()
  endDate:Date;

  @Column({nullable:true})
  url:string;

  @Column({nullable:true})
  description:string;

  @Column("point",{nullable:true})
  coordinates:string;

  @Column({nullable:true})
  image:string;

  @Column({nullable:true})
  country:string;

  @Column({nullable:true})
  department:string;

  @Column({nullable:true})
  city:string;

  @Column({nullable:true})
  address:string;

  @Column({nullable:true})
  postalCode:string;

  @OneToMany(type => AddInfos, addInfos => addInfos,{nullable:true})
  contacts:AddInfos[];

  @Column({nullable:true})
  phone:string;

  @Column({nullable:true})
  email: string;

  @ManyToMany(type => Tag, tag => tag.events,
    { eager: true, nullable:true },
  )
  @JoinTable()
  tags: Tag[];
  
}
