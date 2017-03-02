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
Vue.component('new-task', {
  props: ['tasks'],
  template: `
    <div>
    <div>
      <label for="title">
        <input v-model="title" name="title" type="text">
      </label>
    </div>
    <div>
      <label for="description">
        <textarea v-model="description" name="description"></textarea>
      </label>
    </div>
    <input v-on:click="addTask()" type="button" value="Add Task">
  </div>
  `,
  data: {
    title: '',
    description: ''
  },
  methods: {
    addTask: function () {
      this.tasks.push({'title': this.title, 'description': this.description})
      this.title = ''
      this.description = ''
    }
  }
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
