<template>
    <div class="ChatWindow">
      <div class="messages" ref="mes">
        <span class="text"><img src="../assets/Avatar.png" width="15">: {{ message.text }}</span>
        <span class="time">{{ new Date(message.timestamp).toDateString() }}</span>
      </div>
      <br>
      <div v-if="displayBot" class="messages" ref="mes">
        
        <span> <img src="../assets/Vite App.png" width="15">: {{ message.prediction }}</span>
        <span class="time">{{ new Date(message.timestamp).toDateString() }}</span>
      
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return{
      displayBot: false
        
      

    }
  },
  methods: {
    scrollToElement() {
    const el = this.$refs.mes;

    if (el) {
      el.scrollIntoView({behavior: 'smooth'});
    }
  }

  },

  props: ['message'],
  
  
  mounted() {
    setTimeout(()=>{
      this.displayBot = true

    }, 1000)
  },
  updated() {
    this.scrollToElement();
  }
    
}
</script>

<style >
 .ChatWindow{
    padding: 10px 20px;
} 
.messages{
  max-height: 300px;
  overflow: auto;
} 
.time {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
}

</style>