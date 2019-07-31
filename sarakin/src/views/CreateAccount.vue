<template>
  <div class="login">
    <div class="content center">

      <form class="login-form" @submit.prevent="submitLogin">
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
          <button type="submit" class="center" @click="criarConta">Criar</button>
        </div>

        <br />

      </form>
    </div>
  </div>
</template>

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
          alert('Criado com sucesso!')
        },
        function (err) {
          alert('Erro ao criar usuario ' + err.message)
        })
    }
  }
}
</script>

<style scoped>
.login {
  overflow: auto;
  background: url("../assets/fundo.png") no-repeat center fixed;
  background-size: cover;
  width: 100%;
  height: 100%;
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
}

.input-control {
  margin-bottom: 20px;
}

.input-control > label {
  display: block;
}

.input-control > .input {
  height: 45px;
  width: 395px;
  border-radius: 5px;
  border-width: 0;
  background: #fff;
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
  border-radius: 24px;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 18px;
  width: 160px;
  height: 48px;
  cursor: pointer;
}

.logo {
  margin: auto;
  display: block;
}

.campos {
  color: #fff;
  margin-bottom: 5px;
}
</style>
