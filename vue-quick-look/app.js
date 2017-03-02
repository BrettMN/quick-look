
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
