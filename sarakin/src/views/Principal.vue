<template>
  <div class="principal">
    <div class="content center">
        <div id="logo">
          <img :src="require('../assets/logo.webp')" alt="Logo"/>
        </div>

          <div id="caixa">
            <div id="disponivel">
              <label>Saldo disponível</label>
            </div>
            <div id="saldo">
              <label> $KA {{saldo}} </label>
            </div>
          </div>

          <div class="opcoes">
            <div class="icone">
               <img :src="require('../assets/porco.webp')" alt="Logo"/>
            </div>
            <div class="textos">
              <label @click="depositar">Depositar</label>
            </div>
          </div>

          <div class="opcoes">
            <div class="icone">
               <img :src="require('../assets/pagar.webp')" alt="Logo"/>
            </div>
            <div class="textos">
              <label @click="pagar">Pagar</label>
            </div>
          </div>

          <div class="opcoes">
            <div class="icone">
               <img :src="require('../assets/transferir.webp')" alt="Logo"/>
            </div>
            <div class="textos">
              <label @click="transferir">Transferir</label>
            </div>
            <div class="actions">
              <button type="submit" @click="logout">Sair</button>
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
  name: 'principal',
  components: {
  },
  data () {
    return {
      saldo: 0,
      userUid: []
    }
  },
  mounted () {
    this.userUid = firebase.auth().currentUser.uid
    firebase.firestore().collection('usuario')
      .where('userUid', '==', this.userUid).get().then((snapshot) => {
        snapshot.docs.map(doc => {
          this.saldo += parseInt(doc.data().valor)
        })
      }).catch(error => {
        throw new Error(error)
      })
  },
  methods: {
    logout () {
      firebase.auth().signOut().then(() => {
        this.$router.push({ path: '/login' })
      })
    },
    depositar () {
      this.$router.push({ path: '/depositar' })
    },
    pagar () {
      this.$router.push({ path: '/pagar' })
    },
    transferir () {
      this.$router.push({ path: '/transferir' })
    }
  }
}
</script>

<style>

body{
  background: url("../assets/fundo.webp") no-repeat;
  background-size: cover;
  margin:0px;
}

.login > .content {
    width: 320px;
    margin-top: 60px;
    margin-bottom: 60px;
  }

.center {
    display: block;
    margin: 0 auto;
  }

.actions > button[type="submit"]{
  background-color: #fa7268;
  border: 0;
  border-radius: 5px;
  color: #fff;
  font-family: Roboto;
  font-size: 18px;
  width: 100px;
  height: 48px;
  text-align: center;
  cursor: pointer;
  margin-left: 120px;
  margin-top:40px;
  margin-bottom: 17px;
}

#logo{
  margin-left: 40px;
  margin-top: 22px;
  text-align: center;
  }

#caixa{
  width: 334px;
  height: 104px;
  flex-direction: row;
  margin-left: 540px;
  margin-top:30px;
  margin-bottom: 282px;
  background: #fff;
  border-radius:3px;
}

#disponivel{
  text-align: left;
  padding-left: 14px;
  padding-top:12px;
  font-family: Arial
}

#saldo{
  padding-top:10px;
  padding-left:14px;
  padding-bottom: 17px;
  font-size: 40px;
  font-family: Roboto;
  font-weight: bold;
}

.opcoes{
  width: 334px;
  height: 50px;
  background: #FA7268;
  margin-left: 540px;
  margin-bottom: 15px;
  border-radius: 5px;
}

.icone{
  padding-left: 14px;
  padding-top:10px;
}

.textos{
  text-align: right;
  font-size: 20px;
  font-family: Roboto;
  margin-top: -30px;
  margin-right: 13px;
  color: #FFFFFF;
}
</style>
