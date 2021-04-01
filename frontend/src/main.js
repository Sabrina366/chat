import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store'
 /*let ws; 

async function connect(){
    console.log('connecting');
    const protocol = location.protocol == 'https:' ? 'wss' : 'ws'
    ws = new WebSocket(`${protocol}://${location.host}/ws`)
    
    ws.onmessage = message => {
      let data = JSON.parse(message.data)
      store.commit("appendMessage", data)
    }
  
    ws.onopen = () => console.log('connected');
  
    ws.onclose = () => {
      console.log('disconnected');
  
      setTimeout(() => {
        connect()
      }, 1000);
    }
  }
  connect()  */
  
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')