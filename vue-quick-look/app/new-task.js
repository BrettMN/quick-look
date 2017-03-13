var newTask = Vue.component('new-task', {
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
