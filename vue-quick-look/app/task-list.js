var taskList = Vue.component('task-list', {
  template: `
  <div>
    <router-link to="/newtask">Add Task</router-link>
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
      </li>
    </ul>
  </div>
  `,
  data: function () {
    return {tasks}
  }
})
