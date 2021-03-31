<template>
  <div>
        <form @submit.prevent="displayMessage">
            <input v-model="sender" type="text" placeholder="name">
            <input v-model="text" type="text" placeholder="message..">
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
}
</script>

<style scoped>
  form {
  max-width: 350px;
  display: grid;
  grid-template-columns: 80px 1fr 40px;
  column-gap: 5px;
  margin: auto;
  }
  input{
    background-color: snow;
    border-style: none;
  }
  button{
    border-style: none;
    background-color:silver;
    border-radius: 5px;
  }
</style>