import { Component, OnInit } from '@angular/core';
// import { Task } from '../models/task';               // <= Remove this                 
import { TaskService } from '../services/task.service'; // <= This is new

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  // tasks: Task[];                                        // <= Remove this

  constructor(private _taskService: TaskService) { }       // <= This Changed

  ngOnInit() {
    // this.tasks = [                                      // <= Remove this
    //   {                                                 // <= Remove this
    //     "title": "First Item",                          // <= Remove this
    //     "complete": true,                               // <= Remove this
    //     "description": "first task to do"               // <= Remove this
    //   }                                                 // <= Remove this
    // ];                                                  // <= Remove this

    this._taskService.init()                               // <= This is new
      
  }

}
