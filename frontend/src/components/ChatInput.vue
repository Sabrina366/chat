<template>
  <div>
      <h1>Chat</h1>
        <form>
            <input id="username" type="text" placeholder="name">
            <input id="new-message" type="text" placeholder="message..">
            <button @click="sendMessage">send</button>
        </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      sender: '',
      text: '',
      timestamp: Date.now()
    }
  }

}
</script>

<style>

</style>