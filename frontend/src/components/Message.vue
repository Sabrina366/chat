<template>
    <div>
     <p>{{ message.sender }}  {{ message.text }} </p>
     <p>{{ new Date(message.timestamp).toString() }}</p>
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

div{
  margin: 0 15%;
  background-color: lavender;
}
</style>