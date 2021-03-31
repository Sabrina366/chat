<template>
  <main>
    
    <h1>Chat</h1>
    <ChatInput/>
    <Message v-for="(m, index) of messages" :key="index" :message="m" />
  </main>
</template>

<script>
import Message from "../components/Message.vue";
import ChatInput from "../components/ChatInput.vue";


export default {
  components:{
    Message,
    ChatInput,
  
  },
   computed: {
  
    messages(){
    
      return this.$store.state.messages
    }
  },

}
</script>

<style scoped>

</style>