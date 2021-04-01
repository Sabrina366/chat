<template>
    <div class="ChatWindow">
      <div class="messsages" ref="mes">
        <span class="text">{{ message.text }}</span>
        <span class="time">{{ new Date(message.timestamp).toString() }}</span>
      </div>
    </div>
</template>

<script>
export default {
  props: ['message'],
  methods: {
 
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