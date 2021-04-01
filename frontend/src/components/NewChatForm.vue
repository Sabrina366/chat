<template>
  <form>
      <textarea
      placeholder="Skriv ditt meddelande och klicka enter för att skicka"
      v-model="message"
      @keypress.enter.prevent="sendMessage"
      ></textarea>
  </form>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const { user } = 'You:'
        const message = ref('')

        const sendMessage = () => {
            const chatObj = {
                name: user.value,
                message: message.value,
                createdAt: date.now()
            }

            console.log(chatObj)
            message.value = ''
        }

        return { message, sendMessage }
    }
}
</script>

<style scoped>
form {
    margin: 10px;
    align-content: center;
}

textarea{
    width: 50%;
    max-width: 100%;
    background: white;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
}

</style>