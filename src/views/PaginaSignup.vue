<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';

const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const nameError = ref('');
const emailError = ref('');
const passwordError = ref('');
const confirmPasswordError = ref('');
const router = useRouter();
const userStore = useUserStore();
 

function goBack() {
    window.history.back();
}

function handleRegister() {
    nameError.value = '';
    emailError.value = '';
    passwordError.value = '';
    confirmPasswordError.value = '';

    let valid = true;

    if (!name.value) {
        valid = false;
        nameError.value = 'Por favor, preencha o nome!';
    } else if (name.value.length < 2) {
        valid = false;
        nameError.value = 'O nome deve ter no mínimo 2 caracteres!';
    } else if (name.value.length > 20) {
        valid = false;
        nameError.value = 'O nome deve ter no máximo 20 caracteres!';
    }

    if (!email.value || !email.value.endsWith('@gmail.com')) {
        valid = false;
        emailError.value = 'O e-mail deve ser do tipo @gmail.com!';
    } else if (email.value.length > 50) {
        valid = false;
        emailError.value = 'O e-mail deve ter no máximo 50 caracteres!';
    }

    if (!password.value || password.value.length < 4) {
        valid = false;
        passwordError.value = 'A senha deve ter no mínimo 4 caracteres!';
    } else if (password.value.length > 30) {
        valid = false;
        passwordError.value = 'A senha deve ter no máximo 30 caracteres!';
    }

    if (!confirmPassword.value || confirmPassword.value !== password.value) {
        valid = false;
        confirmPasswordError.value = 'As senhas não coincidem!';
    }

    if (valid) {
        userStore.setUser(name.value, email.value, password.value);
        router.push('/');
    }
}

 


</script>

<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

    <div class="container">
        <button class="back-button" @click="goBack">
            <i class="fas fa-arrow-left"></i> Voltar
        </button>
        <div class="content first-content">
            <div class="first-column">
                <h2 class="title title-primary">Bem Vindo!</h2>
                <p class="description description-primary">Para manter-se conectado entre com seus dados pessoais</p>
                <router-link to="/Paginalogin" class="btn btn-primary">Entrar</router-link>
            </div>

            <div class="second-column">
                <h2 class="title title-second">Criar Conta</h2>
                <p class="description description-second">Use seu email para se registrar</p>
                <form class="form" @submit.prevent="handleRegister">

                    <!-- Nome -->
                    <div class="label-input">
                        <i class="icon fas fa-user"></i>
                        <input v-model="name" type="text" placeholder="Nome" required maxlength="20" />
                    </div>
                    <p v-if="nameError" class="error-message">{{ nameError }}</p>

                    <!-- Email -->
                    <div class="label-input">
                        <i class="icon fas fa-envelope"></i>
                        <input v-model="email" type="email" placeholder="Email" required maxlength="50" />
                    </div>
                    <p v-if="emailError" class="error-message">{{ emailError }}</p>

                    <!-- Senha -->
                    <div class="label-input">
                        <i class="icon fas fa-lock"></i>
                        <input v-model="password" type="password" placeholder="Senha" required maxlength="30" />
                    </div>
                    <p v-if="passwordError" class="error-message">{{ passwordError }}</p>

                    <!-- Confirmar Senha -->
                    <div class="label-input">
                        <i class="icon fas fa-lock"></i>
                        <input v-model="confirmPassword" type="password" placeholder="Confirmar Senha" required />
                    </div>
                    <p v-if="confirmPasswordError" class="error-message">{{ confirmPasswordError }}</p>

                    <!-- Botão Registrar -->
                    <button type="submit" class="btn btn-second">Registrar</button>
                </form>
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

.back-button {
  position: fixed;
  top: 2vh;
  left: 2vw;
  background-color: transparent;
  border: none;
  font-size: 1.5vw;
  color: var(--azul-royal);
  cursor: pointer;
  font-weight: bold;
  z-index: 100;
  display: flex;
  align-items: center;
}

.back-button i {
  margin-right: 0.3vw;
}

.back-button:hover {
  color: #3498db;
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #ecf0f1;
}

.content {
    background-color: #fff;
    border-radius: 1.5vw;
    width: 80%;
    height: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}

.content::before {
    content: "";
    position: absolute;
    background-color: #45CDDD;
    width: 40%;
    height: 100%;
    border-top-left-radius: 1.5vw;
    border-bottom-left-radius: 1.5vw;
    left: 0;
}

.first-content {
    display: flex;
}

.first-column {
    text-align: center;
    width: 40%;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.title {
    font-size: 2.5vw;
    font-weight: bold;
    text-transform: capitalize;
}

.title-primary {
    color: #fff;
    margin-bottom: 1vh;
}

.title-second {
    color: #45CDDD;
}

.description {
    font-size: 1.2vw;
    font-weight: 300;
}

.description-primary {
    font-size: 1.5vw;
    width: 70%;
    text-align: center;
    color: #fff;
    line-height: 1.5;
    display: block;
}

.description-second {
    color: #7f8c8d;
    font-size: 1.5vw;
    margin-bottom: 3vh;
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

.btn-primary {
    background-color: transparent;
    border: 0.2vw solid #fff;
    transition: background-color 0.5s;
    text-decoration: none;
}

.btn-primary:hover {
    background-color: #fff;
    color: #45CDDD;
    text-decoration: none;
}

.btn-second {
    background-color: #45CDDD;
    border: 0.2vw solid #45CDDD;
    transition: background-color 0.5s;
}

.btn-second:hover {
    background-color: #fff;
    border: 0.2vw solid #45CDDD;
    color: #45CDDD;
}

.second-column {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.form {
    display: flex;
    flex-direction: column;
    width: 60%;
    gap: 1vh;
}

.label-input {
    position: relative;
    background-color: rgb(250, 250, 250);
    padding-bottom: 1vh;
    height: 7vh;
    display: flex;
    align-items: center;
    flex-grow: 1;
    margin-bottom: 1.5vh;
}

.label-input input {
    height: 100%;
    width: 100%;
}

.label-input .icon {
    position: absolute;
    left: 0.6vw;
    font-size: 1.2rem;
    color: #7f8c8d;
}

.error-border input {
    border: 0.2vw solid red;
}

.error-message {
    color: red;
    font-size: 0.7rem;
    margin-top: 0.5vh;
    margin-bottom: 0;
    text-align: left;
    padding-left: 0.5vw;
    height: 2vh;
}

.form input {
    width: 100%;
    height: 100%;
    border: none;
    background-color: #ecf0f1;
    font-size: 1rem;
    padding: 1.5vh 2rem;
    border-radius: 0.5vw;
}

input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #ecf0f1 inset !important;
    -webkit-text-fill-color: #000 !important;
}
</style>