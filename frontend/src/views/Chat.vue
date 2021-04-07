<template>
  <main>
    <div>
    <h1 class="h1-chat">BOTTITUDE</h1>
    <div class="message">
    <Message v-for="(m, index) of messages" :key="index" :message="m" />
    
    </div>
    <div class="input">
    
    <ChatInput/>    
    </div>
  </div>
  </main>
</template>

<script>
import Message from "../components/Message.vue";
import ChatInput from "../components/ChatInput.vue";
export default {
  components:{
    Message,
    ChatInput

  },
   computed: {
  
    messages(){
    
      return this.$store.state.messages
      
    },
    prediction(){
      return this.$store.state.prediction
    }
  },
}
</script>

<style scoped>
  .input{
    margin: 10px;
  }

.h1-chat{
  display: block;
  text-align: center;
  letter-spacing: 2px;
  margin-top: 5%;
  margin-bottom: 1%;
  font-size: 50px;
  color: #3a241fc0;
}
</style>