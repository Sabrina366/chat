<template>
    <div>
     <h3>{{ message.sender }}</h3>
     <h3>{{ message.text }}</h3>
     <h3>{{ message.timestamp }}</h3>
    </div>
</template>

<script>
export default {
  props: ['message'],
  methods: {
  
  }
}

</script>

<style>

</style>