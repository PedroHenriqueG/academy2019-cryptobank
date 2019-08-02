<template>
  <div class="principal">
        <div class="content center">
            <div id="logo">
            <img :src="require('../assets/logo.png')" alt="Logo"/>
            </div>

            <div class="container">
              <div class="box">
                  <div id="depositarTopo">
                      <div class="textoDepositar">
                        <div id="iconeVoltar">
                          <img :src="require('../assets/voltar.png')" alt="Icone" @click="voltar"/>
                        </div>
                        <small>Depositar</small>
                      </div>
                  </div>
                  <div id="principal">
                    <label>Informe a <b>quantia</b> desejada</label><br><br>
                    <input v-model="deposito.valor" required type="text" />
                  </div>
                    <div id="text">
                      <small class="smallText">Digite um valor entre $KA 10,00 e $KA 15,000,00</small><br><br>
                    </div>
                    <div id="principal2">
                      <p>Para <b>quem</b> você deseja <b>enviar</b>?</p>
                    </div>
                    <div id="email">
                      <select>
                        <option>usuarioparatransferir@hotmail.com</option>
                        <option>usuarioparatransferir@hotmail.com</option>
                        <option>usuarioparatransferir@hotmail.com</option>
                      </select>
                    </div>
                      <button type="submit" class="botao" @click="newDeposito">Transferir</button>
               </div>
            </div>
        </div>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap');
</style>

<script>
import * as firebase from 'firebase'
export default {
  name: 'depositar',
  data () {
    return {
      deposito: {
        valor: 0
      }
    }
  },
  methods: {
    newDeposito (...args) {
      const { valor } = this.deposito

      const docId = firebase.firestore().collection('depositos').doc().id
      const docUsuario = firebase.firestore().collection('usuario').doc().id
      const userUid = firebase.auth().currentUser.uid
      // Adicionar deposito na coleção deposito
      firebase.firestore()
        .collection('depositos').doc(docId).set({ id: docId, valor, userUid })
        .then(() => {
          alert('Depositado com sucesso!')
          this.$router.push('/principal')
        }).catch(error => {
          alert('Erro ao depositar \n\n' + error)
        })
        // Adicionar deposito na coleção usuário
      firebase.firestore().collection('usuario').doc(docUsuario).set({ id: docUsuario, valor, userUid })
        .then(() => {
          alert('Depositado com sucesso!')
          this.$router.push('/principal')
        }).catch(error => {
          alert('Erro ao depositar \n\n' + error)
        })
    },
    voltar () {
      this.$router.push({ path: '/principal' })
    }
  }
}
</script>

<style>
body{
  background-color: #333333;
  margin:0px;
  width: 100%;
  height: 100%;
}

#logo{
  margin-left: 40px;
  margin-top: 22px;
  text-align: center;
}

#caixa{
  width: 380px;
  height: 210px;
  background: #ffffff;
  border-radius: 5px;
  margin-left: 510px;
}
input[type=text]{
    border-radius:5px;
    background: #cccccc;
    border:1px solid #000000;
    width:200px;
    height: 40px;
    text-align:center;
}

.textoDepositar{
  font-family: Roboto;
  text-align: center;
  padding-top: 10px;
}

#text {
  text-align: center;
}
#email{
  text-align: center;
  margin-top:31px;
  font-family: Roboto;
}
.smallText{
  font-family: Roboto;
  font-size:10px;
}
.botao{
background-color: #fa7268;
  border: 0;
  border-radius: 5px;
  color: #fff;
  font-family: Roboto;
  font-size: 18px;
  width: 350px;
  height: 48px;
  text-align: center;
  cursor: pointer;
  margin-left: 13px;
  font-weight: bold;
  margin-top: 20px;
}

#depositarTopo{
  text-align: center;
  background: #4076AD;
  height: 40px;
  width: 380px;
  border-radius: 5px;
  color: #ffffff;
}
#depositarTopo > button {
    font-size:20px;
}

#iconeVoltar{
  text-align: left;
  margin-left:3px;
  position: absolute;
}

#principal{
  margin-top:20px;
  font-family: Roboto;
  text-align: center;
  font-size: 20px;
}

#principal2{
  margin-top:20px;
  font-family: Roboto;
  text-align: center;
  font-size: 20px;
  background:#F5F5F5;
  height: 40px;
}

.container {
width: 100vw;
margin-top: 161px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
}
.box {
width: 380px;
height: 380px;
background: #ffffff;
border-radius: 5px;
}
</style>
