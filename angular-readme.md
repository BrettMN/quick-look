
 /var/run/cache/wipdeveloper.com
## Part I

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

And as long as you kept the server running when you made the change it should automatically reload the page with the change in the browser when you save after a quick rebuild.  Quick because we don't have anythign yet. 

#### Compile and Reload
![Compile and Reload](angular-quick-look-00.gif)

=== 
## Part II


Add a Model for task in my model folder
#### `task.ts`
```
export class Task{
  title:string;
  complete:boolean;
  description:string;
}
```

create a component to show all the tasks with the cli using the generate command


```
ng g component task-list
```

> docs at https://github.com/angular/angular-cli#generating-components-directives-pipes-and-services

This command generated a new folder named `task-list` with 4 files:

- task-list.component.css
- task-list.component.html
- task-list.component.spec.ts
- task-list.component.ts

##### task-list.component.css 

This is the component level css files

> this starts out empty. 

##### task-list.component.html 

This is the component html template.  the html can also be placed in the TypeScript or JavaScript file.

```
<p>
  task-list works!
</p>
```

##### task-list.component.spec.ts

This is the component test class

```
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TaskListComponent } from './task-list.component';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

##### task-list.component.ts

```
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
```