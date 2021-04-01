<template>
  <div class="app-container">
    <!-- <Nav/> -->
    <div v-if="visaChat" class="toggel-container">
    <Chat />
     <p style="margin-left: 26%">Vill du tala med <span @click="visaChat = false" class="toggel"> boten?</span></p>
    </div>
    <div v-else class="toggel-container">
    <ChatBot />
    <p style="margin-left: 40%">klicka här för att chatta med <span @click="visaChat = true" class="toggel">boten</span></p>
    </div>

    <!-- <router-view/> -->
</template>

<script>
import Chat from './views/Chat.vue'
import ChatBot from './views/ChatBot.vue'
import { ref } from 'vue'

export default {
  name: 'App',
  components: {
    // Nav,
    Chat,
    ChatBot,
    
    
  },
  computed: {
    prediction(){
      return this.$store.state.prediction
    }
  },  
  setup() {
    const visaChat = ref(true)

    return { visaChat }

  }
}
</script>

<style scoped>
  .toggel{
    font-weight: bold;
    cursor: pointer;
  }

  .toggle2{
    margin-left: 25%;
  }

  .app{
        text-align: center;
        padding: 20px 0;
    }
    /* form style*/
    .app form{
        width: 300px;
        margin: 20px auto;
    }
    .app label{
        display: block;
        margin: 20px 0 10px;
    }
    .app input{
        width: 100%;
        padding: 10px;
        border-radius: 20px;
        border: 1px solid #eee;
        outline: none;
        color: #999;
        margin: 10px auto;
    }
    .app span{
        font-weight: bold;
        text-decoration: underline;
        cursor: pointer;
    }
    .app button{
        margin: 20px auto;
    }
</style>
