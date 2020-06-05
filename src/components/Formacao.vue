<template>
  <div id="container">

    <div id="textHeader">
      <span id="text1"> Formação </span>
      <img @click="clickme" id="more_vert" src="../assets/Icons - Social - more_vert.svg">
    </div>

    <div id="midlemenu">
      <div id="circle1">
        <img @click="clickme" id="magnify" src="../assets/magnify.svg">
      </div>
      <div @click="clickme" id="circle1">
        <img id="filter" src="../assets/filter_list-24px.svg">
      </div>
    </div>

    <ul id="formacoes">
      <li id="formacao">
        <div id="formacao_header">
          <div id="circle">
          </div>
          <div id="formacao_dados">
            <span id="formacao_titulo"> Nome do processo </span>
            <span id="formacao_etapas"> 5 Etapas </span>
          </div>
        </div>

        <div id="line"/>
        
        <div id="formacao_atividade">
          <img id="formacao_atividade_logo" src="../assets/school.png">
          <span id="formacao_atividade_texto1"> 102 atividades </span>
          <span id="formacao_atividade_texto2" style="margin-left: 4px"> aguardando mentoria </span>
          <img @click="clickme" id="formacao_atividade_logo2" src="../assets/arrow_right.png">
        </div>

        <div id="line"/>
        
        <div id="formacao_atividade">
          <img id="formacao_atividade_logo" src="../assets/videocam.png">
          <span id="formacao_atividade_texto1"> 92 evidências </span>
          <span id="formacao_atividade_texto2"> aguardando mentoria </span>
          <img @click="clickme" id="formacao_atividade_logo2" src="../assets/arrow_right.png">
        </div>

        <div id="line"/>
        
        <div id="formacao_atividade">
          <img id="formacao_atividade_logo" src="../assets/record_voice_over.png">
          <span id="formacao_atividade_texto1"> 4 feedback </span>
          <span id="formacao_atividade_texto2" style="margin-left: -10px"> aguardando mentoria </span>
          <img @click="clickme" id="formacao_atividade_logo2" src="../assets/arrow_right.png">
        </div>
        
        <div id="line1"/>

        <div id="botoes">
          <div id="botoes_bk">
              <span @click="clickme" id="previsualizar">PRÉ-VISUALIZAR</span>

            <div id="botao_2">
              <span @click="clickme" id="vermentorados">VER MENTORADOS</span>
            </div>
          </div>
        </div>
      </li>


      <li id="formacao">
        <div id="formacao_header">
          <div id="circle">
          </div>
          <div id="formacao_dados">
            <span id="formacao_titulo"> Nome do processo </span>
            <span id="formacao_etapas"> 7 Etapas </span>
          </div>
        </div>

        <div id="line"/>
        
        <div id="formacao_atividade">
          <img id="formacao_atividade_logo" src="../assets/school.png">
          <span id="formacao_atividade_texto1"> 102 atividades </span>
          <span id="formacao_atividade_texto2" style="margin-left: 4px"> aguardando mentoria </span>
          <img @click="clickme" id="formacao_atividade_logo2" src="../assets/arrow_right.png">
        </div>

        <div id="line"/>
        
        <div id="formacao_atividade">
          <img id="formacao_atividade_logo" src="../assets/videocam.png">
          <span id="formacao_atividade_texto1"> 92 evidências </span>
          <span id="formacao_atividade_texto2"> aguardando mentoria </span>
          <img @click="clickme" id="formacao_atividade_logo2" src="../assets/arrow_right.png">
        </div>

        <div id="line"/>
        
        <div id="formacao_atividade">
          <img id="formacao_atividade_logo" src="../assets/record_voice_over.png">
          <span id="formacao_atividade_texto1"> 4 feedback </span>
          <span id="formacao_atividade_texto2" style="margin-left: -10px"> aguardando mentoria </span>
          <img @click="clickme" id="formacao_atividade_logo2" src="../assets/arrow_right.png">
        </div>
        
        <div id="line1"/>

        <div id="botoes">
          <div id="botoes_bk">
              <span @click="clickme" id="previsualizar">PRÉ-VISUALIZAR</span>

            <div id="botao_2">
              <span @click="clickme" id="vermentorados">VER MENTORADOS</span>
            </div>
          </div>
        </div>
      </li>


    </ul>

  </div>
</template>


<script>
export default {
    methods : {
      clickme : () => {
          alert("Função não programada!");
      }
  },
}
</script>>


<style scoped>

#formacao_titulo{
  padding-left: 8px;
  width: 436px;
  height: 39px;
  text-align: left;
  font-family: proxima-soft, sans-serif; /* Bold Proxima Nova Soft */
  font-style:normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0px;
  color: #424242;
  opacity: 1;
}

#formacao_etapas{
  padding-left: 8px;
  top: 305px;
  left: 216px;
  width: 298px;
  height: 14px;
  text-align: left;
  font-family: proxima-soft, sans-serif; /* Regular Proxima Nova Soft */
  font-style:normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0px;
  color: #7F7F7F;
  opacity: 1;
}

#formacao_header{
  margin-top: 16px;
  margin-left: 16px;
  display: flex;
  flex-direction: row;
}

#circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #479AC5 0% 0% no-repeat padding-box;
  opacity: 1;
}

#formacao_atividade{
  margin-left: 16px;
  display: flex;
  flex-direction: row;
  position:relative;
  align-items: center;
}

#formacao_atividade_texto1{
  margin-left: 8px;
  width: 100px;
  height: 17px;

  font-family: proxima-soft, sans-serif; /* Bold Proxima Nova Soft */
  font-style:normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0px;
  color: #424242;
  opacity: 1;
}

#formacao_atividade_texto2{
  width: 240px;
  height: 17px;
  font-family: proxima-soft, sans-serif; /* Regular Proxima Nova Soft */
  font-style:normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0px;
  color: #7F7F7F;
  opacity: 1
}

#formacao_atividade_logo2{
  position: absolute;
  right: 16px;
}

#formacao_dados{
  display: flex;
  flex-direction: column;
}

#formacoes{
  margin-left: 100px;
  position: relative;
  display: flex;
  flex-direction: row;
}

#formacao{
  margin-right: 24px;
  margin-top:90px;
  width: 548px;
  height: 332px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 8px #00000029;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#line {
  margin-left: 16px;
  width: 516px;
  height: 1px;
  background: #EEEEEE 0% 0% no-repeat padding-box;
  opacity: 1;
}

#line1 {
  width: 548px;
  height: 1px;
  background: #EEEEEE 0% 0% no-repeat padding-box;
  opacity: 1;
}

#container {
  position:absolute;
  top: 64px;
  right: 0;
  left: 0px;
  width: 100%;
  z-index:1
}

#textHeader{
  width: 100%;
  height: 89px;
  position: relative;
  background: #FAFAFA 0% 0% no-repeat padding-box;
  opacity: 1;
}

#text1{
  position:absolute;
  top: 32px;
  left: 132px;
  width: 107px;
  height: 29px;

  text-align: left;
  
  font-family: proxima-soft, sans-serif; /* Semibold Proxima Nova Soft */
  font-style:normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 27px;
  
  letter-spacing: 0px;
  color: #424242;
  opacity: 1;
}

#botoes{
  height: 58px;
}

#botoes_bk{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}


#previsualizar{
  text-align: center;
  font-family: proxima-soft, sans-serif; /* Bold Proxima Nova Soft */
  font-style:normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0px;
  color: #328EBA;
  opacity: 1;
}

#botao_2{
  margin-left: 24px;
  margin-right: 16px;
  width: 166px;
  height: 36px;
  background: #328EBA 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  text-align: center;
  vertical-align: center;
}

#vermentorados{
  text-align: center;
  font-family: proxima-soft, sans-serif; /* Bold Proxima Nova Soft */
  font-style:normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 36px;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
  display: inline-block;
  vertical-align:center;
}

#midlemenu{
  position: absolute;
  top: 121px;
  right: 32px;
  display: flex;
  align-items: center;
}

#circle1 {
  width: 42px;
  height: 42px;
  background: #F5F5F5 0% 0% no-repeat padding-box;
  border-radius: 21px;
  opacity: 1;
  border-radius: 50%;
  display: flex;
  justify-content: center;
}

#more_vert{
  position: absolute;
  top: 30px;
  right: 20px;
}
</style>
