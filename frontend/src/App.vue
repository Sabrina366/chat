<template>
  <div>
    <Prediciton/>
    <p>sentence: {{ prediction }} </p>
    <Chat/>
    <router-view/>
  </div>
</template>

<script>
import Chat from './views/Chat.vue'
import Prediciton from './components/PredicitionTest.vue'
export default {
  name: 'App',
  components: {
    Chat,
    Prediciton
  },
  computed: {
    prediction(){
      return this.$store.state.prediction
    }
  }
}
</script>
