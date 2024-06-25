import { Injectable, NotFoundException } from "@nestjs/common";
import { TaskStatus } from "./task-status-enum";
import { CreateTaskDto } from "./dto/create-task.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { TaskRepository } from "./tasks.repository";
import { Task } from "./task.entity";

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
  ) {}

  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }

  async getTaskById(id: string): Promise<Task> {
    const found = await this.taskRepository.findOne({ where: { id } });
    if (!found) {
      throw new NotFoundException(`Task with id ${id} is not found `);
    }
    return found;
  }

  // deleteTaskById(id: string): void {
  //   this.tasks = this.tasks.filter((task) => task.id !== id);
  // }

  createTask(createTaskDto: CreateTaskDto): Promise<Task> {
   return this.taskRepository.createTask(createTaskDto);
  }
}
