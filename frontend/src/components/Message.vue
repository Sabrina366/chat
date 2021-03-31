<template>
    <div>
     <p class="sender">{{ message.sender }}</p> 
     <p class="text">{{ message.text }}</p>
     <p class="time">{{ new Date(message.timestamp).toString() }}</p>
    </div>
</template>

<script>
export default {
  props: ['message'],
  methods: {
 

  
  }
}

</script>

<style scoped>
section{
  background-color:snow;
}

div{
  max-width: 350px;
  padding: 3px;
  margin: auto;
  margin-top: 10px;
  border-radius: 10px;
  background-color:lavenderblush;
}
div p{
  margin: 0%;
  background-color:lavenderblush;
}

.sender{
  font-size: 0.7em;
  float:left;
}
.text{
  font-size: 0.8em;
  height: auto;
  padding-bottom: 5px;
}
.time{
  font-size: 0.4em;
}
</style>