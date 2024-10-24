<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const router = useRouter();
const userStore = useUserStore();

userStore.loadUser();

function handleLogin() {

  errorMessage.value = '';

  const storedUser = userStore.user;

  if (storedUser && storedUser.email === email.value.toLowerCase() && storedUser.password === password.value) {
    router.push('/');
  } else {
    errorMessage.value = 'Email ou senha incorretos!';
  }
}
</script>

<template>
  <div class="container">
    <div class="content">
      <div class="first-column">
        <h2 class="title title-primary">Conectar-se</h2>
        <form class="form" @submit.prevent="handleLogin">
          <div class="label-input">
            <input v-model="email" type="email" placeholder="Email" required />
          </div>
          <div class="label-input">
            <input v-model="password" type="password" placeholder="Senha" required />
          </div>
          <div class="password-container">
            <router-link class="password" to="#">Esqueceu sua senha?</router-link>
          </div>
          <button type="submit" class="btn btn-login">Entrar</button>
          <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        </form>
      </div>

      <div class="second-column">
        <h2 class="title title-second">Bem Vindo!</h2>
        <p class="description">Coloque seus dados pessoais e inicie sua jornada conosco.</p>
        <router-link to="/PaginaSignup" class="btn btn-signup">Criar Conta</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #ecf0f1;
}

.content {
  display: flex;
  background-color: #fff;
  border-radius: 15px;
  width: 960px;
  height: 50%;
  justify-content: space-between;
}

.first-column {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
}

.second-column {
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #45cdde;
  color: #fff;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}

.title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
}

.title-primary {
  color: #45cdde;
}

.title-second {
  color: #fff;
}

.description {
  font-size: 14px;
  margin-bottom: 20px;
  text-align: center;
}

.form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.form input {
  width: 90%;
  border: none;
  background-color: #ecf0f1;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}

.label-input {
  position: relative;
  display: flex;
  align-items: center;
}

.password-container {
  margin-top: 10px;
  margin-bottom: 20px;
  align-self: flex-start;
}

.password {
  font-size: 12px;
  color: #3498db;
  text-decoration: none;
}

.btn {
  border-radius: 15px;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 10px;
  padding: 10px 50px;
  cursor: pointer;
  font-weight: bold;
  width: 150px;
  align-self: center;
  text-align: center;
  margin-top: 1rem;
}

.btn-login {
  color: #fff;
  background-color: #45cdde;
  border: 1px solid #45cdde;
  transition: background-color 0.5s;
}

.btn-login:hover {
  background-color: #fff;
  border: 1px solid #45cdde;
  color: #45cdde;
}

.btn-signup {
  background-color: #45cdde;
  color: #ffffff;
  border: 1px solid #fff;
  transition: background-color 0.5s;
}

.btn-signup:hover {
  background-color: #ffffff;
  color: #45cdde;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}
</style>
