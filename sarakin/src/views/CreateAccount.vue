<template>
  <div class="login">
    <div class="content center">
      <img class="logo" :src="require('../assets/logo.webp')" alt="Logo" />

      <form class="login-form" @submit.prevent="criarConta">
        <div class="input-control">
          <label for="email-input" class="campos">E-mail</label>
          <input
            v-model="email"
            type="email"
            id="email-input"
            required
            name="email"
            class="input"
            placeholder="Digite seu e-mail"
          />
        </div>

        <div class="input-control">
          <label for="password-input" class="campos">Senha</label>
          <input
            v-model="password"
            type="password"
            id="password-input"
            required
            name="password"
            class="input"
            placeholder="Digite sua senha"
          />
        </div>

        <div class="actions">
          <button type="submit" class="center" @click="submitLogin"><small>Criar conta</small></button>
        </div>
        <div id="novo-usuario">
          <small>Já possui conta? <router-link to="/login">Acessar</router-link></small>
        </div>
        <br />
      </form>
    </div>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap');
</style>

<script>
import firebase from 'firebase'

export default {
  name: 'CreateAccount',
  data () {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    criarConta () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(function (user) {
          this.$router.push({ path: '/principal' })
        },
        function (err) {
          alert('Erro ao criar usuario ' + err.message)
        })
    }
  }
}
</script>

<style>
body{
  overflow:hidden;
  background: url("../assets/fundo.webp") no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
}

#novo-usuario {
  text-align: center;
  font-family: Roboto;
  font-size: 15px;
  margin-top: 4px;
  color: #ffffff;
  display: block;
  margin-top:15px;
}

a {
   text-decoration: none;
   color:#ffffff;
   font-size:15px;
   font-weight: bold;
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

.login-form {
  margin-top: 78px;
  margin-left:-40px;
  text-align: left;
  display: block;
  font-size:15px;
  font-family: Roboto;
}

.input-control {
  margin-bottom: 20px;
}

.input-control > label {
  display: block;
}

.input-control > .input {
  height: 45px;
  width: 370px;
  border-radius: 5px;
  border-width: 0;
  background: #ffffff;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  padding: 0 25px;
}

.input-control > .input:focus {
  background: #f2f2f2;
}

.login-form > .actions > button[type="submit"] {
  background-color: #fa7268;
  border: 0;
  border-radius: 5px;
  color: #ffffff;
  font-family: Roboto;
  width: 130px;
  height: 48px;
  text-align: center;
  cursor: pointer;
}

.logo {
  margin-top:21px;
  display: block;
}

.campos {
  color: #ffffff;
  margin-bottom: 5px;
}
</style>
