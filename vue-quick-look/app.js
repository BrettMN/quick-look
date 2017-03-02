
var tasks = [
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

var taskList = Vue.component('task-list', {
  // props: ['tasks'],
  template: `
  <div>
    <router-link to="/newtask">Add New Task</router-link>
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
  </div>
  `,
  data: function () {
    return {tasks}
  }
})
var newTask = Vue.component('new-task', {
  // props: ['tasks'],
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
    <router-link to="/">Cancel</router-link>
  </div>
  `,
  data: () => {
    return {
      title: '',
      description: '',
      tasks: tasks
    }
  },
  methods: {
    addTask: function () {
      this.tasks.push({'title': this.title, 'description': this.description})
      this.title = ''
      this.description = ''
      router.push('/')
    }
  }
})

var routes = [
  {
    path: '/',
    component: taskList
  },
  {path: '/newtask', component: newTask}
]

var router = new VueRouter({routes})

var app = new Vue({
  router: router,
  el: '#app',
  data: {
    message: 'Hello WIPDeveloper.com!'
  }
})

// var app = new Vue({
//   router
// }).$mount('#app')
