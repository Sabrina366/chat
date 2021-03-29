import {createRouter, createWebHistory} from 'vue-router'

const routes = [
   {
    name: 'Chat',
    path: '/',
    component: 'Chat'

   },
  
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router