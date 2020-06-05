<template>
      <div @click="clickMethod()" class="formacao_bg">
        <img class="bt1" v-bind:src="srcimg">
        <span class="text">{{ texto }}</span>
      </div>

</template>

<script>
  export default {
  props: {
    texto: String,
    simagem: String,
    linkroute: String,
  },
  
  data: function() {
    return {
      srcimg: require(`../assets/${this.simagem}`)

  }},

  methods : {
    clickMethod() {
      this.$router.push('/' + this.linkroute)
    },
    clickme : () => {
        alert("Função não programada!");
    }
  },

  }
</script>

<style scoped>

.formacao_bg {
  margin-top: 5px;
  margin-left: auto;
  margin-right: auto;
  width: 100px;
  height: 65px;
  display: flex;
  flex-direction: column;
  transition-duration: 0.2s;
  margin-bottom: 8px;
}

.formacao_bg:hover {
  background-color: #a4b3b3; 
  color: white;
}

.bt1 {
  opacity: 1;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.text {

  margin-left: auto;
  margin-right: auto;
  
  width: 88px;
  height: 28px;

  text-align: center;
  
  font-family: proxima-soft, sans-serif; /* Semibold Proxima Nova Soft */
  font-style:normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 14px;
  
  letter-spacing: 0px;
  color: #868686;
  opacity: 1;
}
</style>
