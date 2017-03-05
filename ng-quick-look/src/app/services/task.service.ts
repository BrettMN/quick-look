import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable()
export class TaskService {

  tasks: Task[];

  constructor() { }

  init() {

    if (typeof this.tasks === 'undefined') {
      this.tasks = [
        {
          "title": "First Item",
          "complete": true,
          "description": "first task to do"
        }
      ];
    }
  }

  addTask(newTask: Task) {

    return new Promise((resolve, reject) => {
      console.log('pretend we called a service with our new task here')
      this.tasks.push(newTask);

      resolve();
    });
  }
}
