<template>
  <div class="chat-window">
      <div class="alla-meddelande">
          <div class="meddelande">
              <span class="timeStamp">{{ Message.timestamp }}</span>
              <span>{{ Message.sender }}</span>
              <span>{{ Message.text }}</span>
          </div>
      </div>
  </div>
</template>

<script>
import Chat from '../views/Chat.vue'
import Message from '../components/Message.vue'
export default {
    setup() {

    }
}
</script>

<style>

</style>