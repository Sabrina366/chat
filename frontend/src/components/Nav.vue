<template>
    <nav>
    <router-link to="/" class="router">Chat</router-link>
    <router-link to="/chatbot" class="router">ChatBot</router-link>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.router{
    font-family: sans-serif;
    font-size: 18px;
    font-weight: bold;
    background: #4d5153;
    width: 100px;
    margin: 10px;
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

.router:hover, .router:focus, .router:active{
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}

</style>