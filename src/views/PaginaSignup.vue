<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';

const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const errorMessages = ref([]);
const router = useRouter();
const userStore = useUserStore();

function handleRegister() {
    errorMessages.value = [];

    let valid = true;

    if (!name.value) {
        valid = false;
        errorMessages.value.push('Por favor, preencha todos os campos!');
    } else if (name.value.length < 2) {
        valid = false;
        errorMessages.value.push('O nome deve ter no mínimo 2 caracteres!');
    } else if (name.value.length > 20) {
        valid = false;
        errorMessages.value.push('O nome deve ter no máximo 20 caracteres!');
    }

    if (!email.value || !email.value.endsWith('@gmail.com')) {
        valid = false;
        errorMessages.value.push('O e-mail deve ser do tipo @gmail.com!');
    } else if (email.value.length > 50) {
        valid = false;
        errorMessages.value.push('O e-mail deve ter no máximo 50 caracteres!');
    }

    if (!password.value || password.value.length < 4) {
        valid = false;
        errorMessages.value.push('A senha deve ter no mínimo 4 caracteres!');
    } else if (password.value.length > 30) {
        valid = false;
        errorMessages.value.push('A senha deve ter no máximo 30 caracteres!');
    }

    if (!confirmPassword.value || confirmPassword.value !== password.value) {
        valid = false;
        errorMessages.value.push('As senhas não coincidem!');
    }

    if (valid) {
        userStore.setUser(name.value, email.value, password.value);
        router.push('/');
    }
}
</script>

<template>
    <div class="container">
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
                    <div class="label-input"
                        :class="{ 'error-border': errorMessage || errorEmailMessage || errorPasswordMessage || errorConfirmPasswordMessage || errorNameMessage }">
                        <input v-model="name" type="text" placeholder="Nome" required maxlength="20" />
                    </div>

                    <!-- Email -->
                    <div class="label-input" :class="{ 'error-border': errorEmailMessage || errorEmailLengthMessage }">
                        <input v-model="email" type="text" placeholder="Email" required maxlength="50" />
                    </div>

                    <!-- Senha -->
                    <div class="label-input"
                        :class="{ 'error-border': errorPasswordMessage || errorPasswordLengthMessage }">
                        <input v-model="password" type="password" placeholder="Senha" required maxlength="30" />
                    </div>

                    <!-- Confirmar Senha -->
                    <div class="label-input" :class="{ 'error-border': errorConfirmPasswordMessage }">
                        <input v-model="confirmPassword" type="password" placeholder="Confirmar Senha" required />
                    </div>

                    <!-- Botão Registrar -->
                    <button type="submit" class="btn btn-second">Registrar</button>

                    <!-- Mensagens de erro agrupadas abaixo do botão -->
                    <div v-if="errorMessages.length" class="error-message-container">
                        <p v-for="(message, index) in errorMessages" :key="index" class="error-message">
                            {{ message }}
                        </p>
                    </div>
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
    width: 20%;
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
    width: 100%;
}

.first-content .second-column {
    z-index: 11;
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
}

.label-input {
    position: relative;
    background-color: rgb(250, 250, 250);
    padding-bottom: 0.6vh;
    height: 6vh;
    display: flex;
    align-items: center;
}

.label-input input {
    height: 100%;
    width: 100%;
}

.error-border input {
    border: 0.2vw solid red;
}

.error-message-container {
    margin-top: 2vh;
    text-align: center;
    color: red;
    font-size: 1rem;
    font-weight: bold;
}

.error-message {
    margin-top: 1vh;
}

.form input {
    border: none;
    background-color: #ecf0f1;
    font-size: 1rem;
    padding: 0 1vw;
}

input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #ecf0f1 inset !important;
    -webkit-text-fill-color: #000 !important;
}
</style>
