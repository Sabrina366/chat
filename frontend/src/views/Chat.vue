<template>
  <main>
    <div>
    <h1 class="h1-chat">Chat</h1>
    <div class="message">
    <Message v-for="(m, index) of messages" :key="index" :message="m" />
    
    </div>
    <div class="input">
    
    <ChatInput/>
    <!-- <NewChatForm /> -->
    
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
/*   .h1-chat{
  background: #a0b2ec;
  color: #444;
} */
/* .h1-chat{
  width: 90%;
  overflow: auto;
  max-width: 960px;
  margin: 40px 25% -80px 25%;
  border-radius: 20px;
  box-shadow: 2px 4px 6px rgba(28, 6, 49, 0.1);
  --background: white;
} */

.h1-chat{
  display: block;
  text-align: center;
  margin-top: 5%;
  margin-bottom: 1%;
  font-size: 50px;
  color: #3a241fc0;
}
</style>