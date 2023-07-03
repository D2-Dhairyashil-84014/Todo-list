import { UserEntity } from "src/user/entities/user.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('task')
export class TaskEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number 

    @Column()
    title:string

    @Column()
    details:string
    
    @Column({default:false})
    isCompleted:boolean
    
    @Column()
  userId: number;

  @ManyToOne(() => UserEntity, (user) => user.tasks, { eager: false })
  user: UserEntity;
}