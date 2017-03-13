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
