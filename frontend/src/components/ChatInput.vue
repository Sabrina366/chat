<template>
  <div>
      <h1>Chat</h1>
        <form @submit.prevent="displayMessage">
            <input id="username" type="text" placeholder="name">
            <input id="new-message" type="text" placeholder="message..">
            <button type="submit">send</button>
        </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      sender: '',
      text: '',
      timestamp: Date.now()
    }
  },
  methods: {
    displayMessage(){
      let newMessage = {
        sender: this.sender,
        text: this.text,
        timestamp: this.timestamp
      }

      this.$store.commit('appendMessage', newMessage)

      
  }

}
</script>

<style>

</style>