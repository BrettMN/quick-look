import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';                  // <= this is new

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[];                                        // <= this is new

  constructor() { }

  ngOnInit() {
    this.tasks = [                                      // <= this is new
      {                                                 // <= this is new
        "title": "First Item",                          // <= this is new
        "complete": true,                               // <= this is new
        "description": "first task to do"               // <= this is new
      }                                                 // <= this is new
    ];                                                  // <= this is new
  }

}
