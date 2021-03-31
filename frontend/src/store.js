import {createStore} from 'vuex'
let ws;

const state = {

    messages: [

    ]
}

const mutations = {
  loadMessages(state, newMessageList){
    state.messages = newMessageList
  },
  appendMessage(state, messageToAppend){
    state.messages.push(messageToAppend)
  }
}

const actions = {

    async initMessage(store) {
    
      let messages = await fetch('/rest/messages')
      messages = await messages.json()

      store.commit('loadMessages', messages)
    },
    
    

    
}

export default createStore({state, mutations, actions})