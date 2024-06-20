import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = []; //priv bc no one in the app can access it

  getAllTasks() {
    return this.tasks;
  }
}
