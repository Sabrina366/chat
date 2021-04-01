<template>
  <div>

    <form>
      <textarea
      placeholder="Skriv ditt meddelande och klicka enter för att skicka"
      v-model="text"
      @keypress.enter.prevent="displayMessage"
      class="chat-input"
      ></textarea>
  </form>
        <!-- <form @submit.prevent="displayMessage">
            <input class="sender" v-model="sender" type="text" placeholder="name">
            <input class="message" v-model="text" type="text" placeholder="message..">
            <button type="submit" class="send-btn">send</button>
        </form> -->
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
    margin: 10px;
    align-content: center;
}

textarea{
    width: 90%;
    max-width: 960px;
    margin: 80px 0 0px 24.5%;
    background: white;
    margin-bottom: 6px;
    margin-top: -8px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
}






  /* form {
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
  .sender{
    
  }
  .message{
  
  }
  .send-btn{
    font-family: sans-serif;
    font-size: 15px;
    width: 50px;
    border-style: none;
    background-color:silver;
    border-radius: 5px;
  } */
</style>