import { TaskEntity } from "src/task/entities/task.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class UserEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name: string

    @Column()
    email:string

    @Column()
    gender:string

    @Column()
    password:string

    @OneToMany(() => TaskEntity, (task) => task.user, { eager: false })
  tasks: TaskEntity[];
}