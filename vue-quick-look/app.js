var routes = [
  {
    path: '/',
    component: taskList
  },
  {
    path: '/newtask',
    component: newTask
  }
]

var router = new VueRouter({routes})

var app = new Vue({
  router: router,
  el: '#app',
  data: {
    message: 'Hello WIPDeveloper.com!',
    tasks: tasks
  }
})
