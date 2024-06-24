import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Body } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
//we split controller from busness lgic bc its easy to test and maintain and
//controller work is to recieve req and send response only

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  //this constructor achieve dp injection and singlton we inject service and if no
  //instance of TasksService we create one otherwise we dont which is the singlton

  // @Get()
  // getAllTasks(): Task[] {
  //   return this.tasksService.getAllTasks();
  // }
  // //this is the get request to get all the tasks

  // @Get(':/id')
  // getTaskById(@Param('id') id: string): Task {
  //   return this.tasksService.getTaskById(id);
  // }

  // @Delete(':/id')
  // deleteTaskById(@Param('id') id: string): void {
  //   return this.tasksService.deleteTaskById(id);
  // }

  // @Post()
  // createTask(@Body() createTaskDto: CreateTaskDto): Task {
  //   return this.tasksService.createTask(createTaskDto);
  // }
}
