import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';              
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  newTask: Task;

  constructor(private _taskService: TaskService, private _router: Router) { }

  ngOnInit() {
    this.newTask = new Task();
  }

  addTask(){
    this._taskService.addTask(this.newTask)
    .then(results =>{
      this.newTask = new Task();
      this._router.navigate(['./']);
    });
  }
}
