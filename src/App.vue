<template>
    <div id="container">

    <div id="bg">  
      <div id="icon-kanttum">
        <img alt="Logo" src="./assets/icon-kanttum.svg">
      </div>
      <div id="right-menu">

        <div id="notification">
          <img @click="clickme"  id="notification_sign" alt="Notification" src="./assets/icon-notifications.png">
          <div id="notification_alert">
            <span id="notification_alert_text">1</span>
          </div>
        </div>
        <img @click="clickme" id="user_prof" alt="User" src="./assets/user-profile.png">
        <div id="mask_arrow">
            <img @click="clickme" id="arrow_down" alt="Arrow_down" src="./assets/menu-down.png">
        </div>
      </div>
    </div>

    <div id="midle">
      <div id="fill">

        <LeftPanelButton texto="Formações" simagem="icon-process-4.svg" linkroute="formacao"/> 
        <LeftPanelButton texto="Cursos" simagem="icon-process-3.svg" linkroute="" />
        <LeftPanelButton texto="Canais" simagem="icon-process-2.svg" linkroute="" />
        <LeftPanelButton texto="Relatórios" simagem="icon-process.svg" linkroute="" />
        <LeftPanelButton texto="Grupos de usuários" simagem="icon-process-1.svg" linkroute="" />
            
      </div>

      <div id="routes">
        <router-view> </router-view>
      </div>
    </div>
  </div>
</template>

<script>

import LeftPanelButton from './components/LeftPanelButton.vue'

export default {
  name: 'App',
  components: {
    LeftPanelButton,
  },
  methods: {
    clickme : () => {
        alert("Função não programada!");
    }
  }
}
</script>

<style>

#midle {
  display: flex;

}

#routes {
  top: 64px;
  left: 100px;
  width:unset;
  height: unset;

}

#notification{
  width: 24px;
  height: 24px;
  position: relative;
}

#notification_alert {
  position: absolute;
  top: 0;
  right: 0;
  width: 12px;
  height: 12px;
  background: #D84E3B 0% 0% no-repeat padding-box;
  opacity:1;

  border-radius: 4px;
  justify-content: center;
  align-content: center;
  display: flex;

}

#notification_alert_text {
  font-family: proxima-soft, sans-serif; /* Semibold Proxima Nova Soft */
  font-style:normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  letter-spacing: 0px;
  color: #FFFFFF;

}

#fill {
top: 64px;
left: 0px;
width: 100px;
height: 800px;

background: #F5F5F5 0% 0% no-repeat padding-box;
opacity: 1;
}


#container {
  top: 0px;
  left: 0px;
  width:unset;
  height: 800px;

  background: #FFFFFF 0% 0% no-repeat padding-box;
  opacity: 1;
  display: flex;
  flex-direction: column;
  position: relative;
}

#icon-kanttum {
  top: 0px;
  left: 0px;
  width: 100px;
  height: 64px;

  opacity: 1;
}

#bg {
  top: 0px;
  left: 0px;
  width:unset;
  height: 64px;

  background: #2B8FBA 0% 0% no-repeat padding-box;
  opacity: 1;
  display: flex;
  align-items: center;
}

#right-menu {
  position: absolute;
  right: 20px;
  display: flex;
  align-items: center;
}

#mask_arrow {
  width: 24px;
  height: 24px;
  display: flex;  
  align-content: center;
  margin-left: 6px;
}

#arrow_dwon {
  width: 10px;
  height: 5x;

}

#user_prof{
  margin-left: 20px;
}

</style>

