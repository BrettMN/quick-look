import { Injectable } from '@angular/core';
import { Task } from '../models/task';                  // <= This is new

@Injectable()
export class TaskService {

  tasks: Task[];                                        // <= This is new

  constructor() { }

  // New Method
  init() {
    this.tasks = [
      {
        "title": "First Item",
        "complete": true,
        "description": "first task to do"
      }
    ];
  }

  // New Method
  addTask(newTask: Task) {


    return new Promise((resolve, reject) => {

      console.log('pretend we called a service with our new task here')
      this.tasks.push(newTask);

      resolve();

    });
  }

}
