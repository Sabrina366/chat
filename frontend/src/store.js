import {createStore} from 'vuex'
let ws;

const state = {

    messages: [

    ]
}

const mutations = {

  

}

const actions = {

    async initMessage(store) {
    
      let messages = await fetch('/rest/messages')
      messages = await messages.json()

      store.commit('loadMessages', messages)
    },
    
    async connect(){
      console.log('connecting');
      const protocol = location.protocol == 'https:' ? 'wss' : 'ws'
      ws = new WebSocket(`${protocol}://${location.host}/ws`)
      
      ws.onmessage = message => {
        let data = JSON.parse(message.data)
        appendMessage(data)
      }
    
      ws.onopen = () => console.log('connected');
    
      // try to reconnect every second
      ws.onclose = () => {
        console.log('disconnected');
    
        setTimeout(() => {
          connect()
        }, 1000);
      }
    },

    
}

export default createStore({state, mutations, actions})