<template>
  <div>

    <form>
      <textarea
      placeholder="Write your message and press enter to send it"
      v-model="text"
      
      @keypress.enter.prevent="predict"
      
      class="chat-input"
      
      ></textarea>
      
  </form>
  
  </div>
</template>

<script>
export default {
  data(){
    return{
      text: '',
    }
  },
  
  methods: {
    
  async predict() {
      let pred = {
        sentence: this.text,
      };
      let res = await fetch("/rest/predict", {
        method: "POST",
        body: JSON.stringify(pred),
      });
      let prediction = await res.json();
      let newMessage = {
        text: this.text,
        timestamp: Date.now(),
        prediction: prediction
      }
      this.$store.commit("appendMessage", newMessage);
      console.log(prediction);
      this.text = ''
      return prediction 
    },
    
  },
}
</script>

<style scoped>

textarea{
    display: block;
    width: 90%;
    max-width: 960px;
    min-width: auto;
    margin-left: auto;
    margin-right: auto;
    background: white;
    margin-bottom: 6px;
    margin-top: -8px;
    padding-top: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 8px;
    font-family: inherit;
    outline: none;
}
</style>