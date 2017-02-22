# Part I - Create the App

Install `angular-cli`

```
npm install -g @angular/cli
```

> If you have used the Angular-cli previously you should uninstall the previous version 

```
npm uninstall -g angular-cli @angular/cli
npm cache clean
npm install -g @angular/cli@latest
```

## Create App with Routing

```
ng new ng-quick-look --routing
```

> Options at https://github.com/angular/angular-cli/blob/master/docs/documentation/new.md


## Run the App

go into the directory 

```
cd ng-quick-look
```


and start the app with `ng serve`

```
ng serve
```

> options availible at https://github.com/angular/angular-cli/blob/master/docs/documentation/serve.md


If you didn't specify a port number open a browser and enter the address "http://localhost:4200/" and you should see =>

![App Works!](ng-00.png)

## Update something

If you go into the src/app folder and open app.component.ts and update line 9 


#### Original Title
```javascript
export class AppComponent {
  title = 'app works!';
}
```

#### New Title
```javascript
export class AppComponent {
  title = 'WIPDeveloper.com!';
}
```

# Part II - Add a Component

Add a Model for task in my model folder

#### `src/app/models/task.ts`
```language-javascript
export class Task{
  title:string;
  complete:boolean;
  description:string;
}
```

create a component to show all the tasks with the cli using the generate command

#### Create `TaskListComponent`
```
ng g component task-list
```

> docs at https://github.com/angular/angular-cli#generating-components-directives-pipes-and-services


# Part III - Create a Services

## Add a Service

#### Create `TaskService`
```
ng g service ./services/task
```

#### `task.service.ts`
```language-javascript
import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {

  constructor() { }

}
```

#### `task.service.spec.ts`
```language-javascript
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TaskService } from './task.service';

describe('TaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskService]
    });
  });

  it('should ...', inject([TaskService], (service: TaskService) => {
    expect(service).toBeTruthy();
  }));
});
```

## Share Data

#### Updated `task.service.ts`
```language-javascript
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

}
```

#### Updated `task-list.component.ts`
```language-javascript
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
```

#### Updated `task-list.component.html`
```language-markup
<ul>
  <li *ngFor="let task of _taskService.tasks">  <!-- This line changed -->
    <!-- Nothing else changed -->
  </li>
</ul>
```

## Register Service

#### Updated `app.module.ts`
```language-javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskService } from './services/task.service';              // <= This is new

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    TaskService                                                        // <= This is new
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

```


