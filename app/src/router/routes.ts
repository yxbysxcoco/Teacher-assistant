const routes = [
  {
    path: '/',
    name: 'todo',
    component: () => import('../views/todo.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login'),
  },
  {
    path: '/show',
    name: 'show',
    component: () => import('../views/show.vue'),
  },
];

export default routes;
