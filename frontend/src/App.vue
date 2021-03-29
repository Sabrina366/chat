<template>
  <div>
    <Chat />
    <router-view/>
  </div>
</template>

<script>
import Chat from './views/Chat.vue'

export default {
  name: 'App',
  components: {
    Chat,
  },
  data: function(){
    return
  }
}
</script>
