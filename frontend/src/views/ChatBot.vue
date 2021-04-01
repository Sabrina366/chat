<template>
    <main>
  <form @submit.prevent="voicechat">
      <img src="../assets/vivbien180300055.jpg" alt="bot pic" class="bot-pic">
      <div>
      <button type="submit" class="voice-btn">Tala</button>
      </div>
  </form>
  </main>
</template>

<script>

export default {
    components: {
   
    }

}
</script>

<style scoped>

.bot-pic{
    /* margin-left: 30%; */
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    max-width: 300px;
    max-height: 300px;
    
}
.voice-btn{
    display: block;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
}



/* form{
    margin: 20px;
    align-content: center;
}

.voice-txt{
    width: 50%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 30px;
    box-sizing: border-box;
    border: 1px solid #000;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
}
.voice-btn{
    font-family: sans-serif;
    font-size: 18px;
    font-weight: bold;
    background: #4d5153;
    width: 160px;
    padding: 20px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: box-shadow, transform;
    transition-property: box-shadow, transform;
}

.voice-btn:hover, .voice-btn:focus, .voice-btn:active{
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
} */

</style>