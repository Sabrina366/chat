<template>
  <div>

    <form>
      <textarea
      placeholder="Skriv ditt meddelande och klicka enter för att skicka"
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
      return prediction
      

      
    },
    
  
  
    
  
  
  
  }

}
</script>

<style scoped>
form {
    margin: 10px;
    align-content: center;
}

textarea{
    width: 90%;
    max-width: 960px;
    margin: 80px 0 0px 24.5%;
    background: white;
    margin-bottom: 6px;
    margin-top: -8px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
}






  /* form {
  max-width: 350px;
  display: grid;
  grid-template-columns: 80px 1fr 40px;
  column-gap: 5px;
  margin: auto;
  }
  input{
    background-color: snow;
    border-style: none;
  }
  .sender{
    
  }
  .message{
  
  }
  .send-btn{
    font-family: sans-serif;
    font-size: 15px;
    width: 50px;
    border-style: none;
    background-color:silver;
    border-radius: 5px;
  } */
</style>