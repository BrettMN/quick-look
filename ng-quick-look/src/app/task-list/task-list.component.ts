import { Component, OnInit } from '@angular/core';               
import { TaskService } from '../services/task.service'; 

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private _taskService: TaskService) { }   

  ngOnInit() {

    this._taskService.init()                      
  }

}
