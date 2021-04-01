<template>
    <div class="ChatWindow">
      <div class="messsages" ref="mes">
        <span class="text">You: {{ message.text }}</span>
        <span class="time">{{ new Date(message.timestamp).toString() }}</span>
      
      </div>
    </div>
</template>

<script>
import PredicitionTest from './PredicitionTest.vue'
export default {
  props: ['message'],
  methods: {
 
  },
  components:{
    PredicitionTest,
  }

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

</style>