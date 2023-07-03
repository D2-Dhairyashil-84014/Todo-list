import { Injectable } from '@nestjs/common';
import { TaskEntity } from './entities/task.entity';
import { TaskInputType } from './types/task.input.type';
import { UserEntity } from 'src/user/entities/user.entity';

@Injectable()
export class TaskService {

    async task(id: number) {
        return await TaskEntity.findBy({ userId: id })
    }

    async createtask(user: UserEntity, input: TaskInputType
    ) {
        const { title, details } = input
        const task = new TaskEntity()
        task.title = title;
        task.details = details;
        task.isCompleted = false;
        task.user = user;
        await task.save()
        return task
    }

    async completeTask(userId: number, id: number) {
        const task = await TaskEntity.findOneBy({userId, id});
        if (!task) {
          return 'Task not found';
        }
        task.isCompleted = true;
       await task.save();
        return task;
      }
    

    async deleteTask(userId: number, id:number){
        const task  = await TaskEntity.findOneBy({userId, id});
        if(task){
            await task.remove();
            return "deleted"
        }
        return "does not exist"

    }
}
