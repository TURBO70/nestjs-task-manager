import { EntityRepository, Repository } from "typeorm";
import { Task } from "./task.entity";

@EntityRepository(Task)
/**
 * Repository class for managing tasks.
 */
export class TaskRepository extends Repository<Task> {}
