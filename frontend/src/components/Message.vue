<template>
    <div class="ChatWindow">
      <div class="messages" ref="mes">
        <span class="text">You: {{ message.text }}</span>
        <span class="time">{{ new Date(message.timestamp).toString() }}</span>
      </div>
      <br>
      <div v-if="displayBot" class="messages" ref="mes">
        
        <span>Bot: {{ message.prediction }}</span>
        <span class="time">{{ new Date(message.timestamp).toString() }}</span>
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

  props: ['message'],
  
  
  mounted() {
    setTimeout(()=>{
      this.displayBot = true

    }, 1000)
  },
  
    

}

</script>

<style >

 .ChatWindow{
    background: #fafafa;
    padding: 30px 20px;

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

.text{
    /* max-height: 400px;
    overflow: auto; */
}

</style>