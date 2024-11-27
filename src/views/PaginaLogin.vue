<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const router = useRouter();
const userStore = useUserStore();

onMounted(() => {
  userStore.loadUser();
  if (userStore.user) {
    email.value = userStore.user.email;
    password.value = userStore.user.password;
  }
});

function handleLogin() {
  errorMessage.value = '';

  const storedUser = userStore.user;

  if (storedUser && storedUser.email.toLowerCase() === email.value.toLowerCase() && storedUser.password === password.value) {
    router.push('/');
  } else {
    errorMessage.value = 'Email ou senha incorretos!';
  }
}
</script>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

  <div class="container">
    <div class="content">
      <div class="first-column">
        <h2 class="title title-primary">Conectar-se</h2>
        <form class="form" @submit.prevent="handleLogin">

          <!-- Email -->
          <div class="label-input">
            <i class="icon fas fa-envelope"></i>
            <input v-model="email" type="email" placeholder="Email" required />
          </div>

          <!-- Senha -->
          <div class="label-input">
            <i class="icon fas fa-lock"></i>
            <input v-model="password" type="password" placeholder="Senha" required />
          </div>

          <!-- Esqueceu sua senha -->
          <div class="password-container">
            <router-link class="password" to="#">Esqueceu sua senha?</router-link>
          </div>

          <!-- Botão Entrar -->
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
  border-radius: 1.5vw;
  width: 60%;
  height: 70%;
  position: relative;
  justify-content: space-between;
}

.content::before {
  content: "";
  position: absolute;
  background-color: #45CDDD;
  width: 40%;
  height: 100%;
  border-top-right-radius: 1.5vw;
  border-bottom-right-radius: 1.5vw;
  right: 0;
}

.first-column {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2vw;
  z-index: 1;
}

.second-column {
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2vw;
  text-align: center;
  color: #fff;
  position: relative;
  z-index: 2;
}

.title {
  font-size: 2.5vw;
  font-weight: bold;
}

.title-primary {
  color: #45CDDD;
  margin-bottom: 2vh;
}

.title-second {
  color: #fff;
  margin-bottom: 2vh;
}

.description {
  font-size: 1.5vw;
  text-align: center;
  color: #fff;
  line-height: 1.5;
  margin-bottom: 3vh;
}

.form {
  display: flex;
  flex-direction: column;
  width: 70%;
}

.label-input {
  position: relative;
  background-color: rgb(250, 250, 250);
  padding-bottom: 0.6vh;
  height: 6vh;
  display: flex;
  align-items: center;
  flex-grow: 1;
}

.form input {
  width: 100%;
  height: 100%;
  border: none;
  background-color: #ecf0f1;
  font-size: 1rem;
  padding: 1vh 2.5vw;
  border-radius: 0.5vw;
}

.label-input .icon {
  position: absolute;
  left: 0.6vw;
  font-size: 1.2rem;
  color: #7f8c8d;
}

.password-container {
  margin-top: 1vh;
  align-self: flex-start;
}

.password {
  font-size: 1rem;
  color: #3498db;
  text-decoration: none;
  transition: color 0.3s ease;
}

.password:hover {
  color: #2980b9;
}

.btn {
  border-radius: 1vw;
  text-transform: uppercase;
  color: #fff;
  font-size: 0.9vw;
  padding: 1vh 3vw;
  cursor: pointer;
  font-weight: bold;
  align-self: center;
  border: none;
  margin-top: 2vh;
  text-align: center;
  align-items: center;
}

.btn-login {
  background-color: #45CDDD;
  border: 0.2vw solid #45CDDD;
  transition: background-color 0.5s;
}

.btn-login:hover {
  background-color: #fff;
  border: 0.2vw solid #45CDDD;
  color: #45CDDD;
}

.btn-signup {
  background-color: transparent;
  border: 0.2vw solid #fff;
  transition: background-color 0.5s;
  text-decoration: none;
}

.btn-signup:hover {
  background-color: #fff;
  color: #45CDDD;
  text-decoration: none;
}

.error-message {
  color: red;
  font-size: 1.2vw;
  margin-top: 2vh;
}
</style>
