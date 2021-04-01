import {createRouter, createWebHistory} from 'vue-router'
import Chat from './views/Chat.vue'
import ChatBot from './views/ChatBot.vue'

const routes = [
   {
    name: 'Chat',
    path: '/',
    component: Chat
   },
   {
       name: 'Chatbot',
       path: '/chatbot',
       component: ChatBot
   }
  
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router