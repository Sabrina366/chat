<template>
  <form @submit.prevent="predict">
    <input v-model="sentence" type="text" placeholder="sentence" />

    <button>Send</button>
    
  </form>
</template>

<script>
export default {
  data() {
    return {
      sentence: "",
    };
  },
  methods: {
    async predict() {
      let pred = {
        sentence: this.sentence,
      };

      let res = await fetch("/rest/predict", {
        method: "POST",
        body: JSON.stringify(pred),
      });

      let prediction = await res.json();

      this.$store.commit("predictSentence", prediction);
      console.log(prediction);
      return prediction
      

      
    },
  },
};
</script>

<style scoped>
</style>