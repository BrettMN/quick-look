Vue.component('task-list', {
  props: ['tasks'],
  template: `
    <ul>
      <li v-for="task in tasks">
        <div>
          <label for="task-title">
            <input type="checkbox" v-model="task.complete" /> {{ task.title }}
          </label>
          <p>
            {{ task.description }}
          </p>
        </div>
      </div>
    </li>
  </ul>
  `
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello WIPDeveloper.com!',
    tasks: [
      {
        title: 'test task one',
        complete: true,
        description: 'this is a task that is complete'
      },

      {
        title: 'test task two',
        complete: false,
        description: 'this is a task that is not complete'
      }
    ]
  }
})
