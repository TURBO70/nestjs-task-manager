import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

//we split controller from busness lgic bc its easy to test and maintain and
//controller work is to recieve req and send response only

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  //this constructor achieve dp injection and singlton we inject service and if no
  //instance of TasksService we create one otherwise we dont which is the singlton

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks;
  }
}
