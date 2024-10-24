<script setup>
import { ref } from 'vue';
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';

const nome = ref('');
const email = ref('');
const senha = ref('');
const confirmarSenha = ref('');
const router = useRouter();
const userStore = useUserStore();

function registrar() {
  if (senha.value.length < 4) {
    alert('A senha deve ter pelo menos 4 caracteres.');
    return;
  }
  if (senha.value !== confirmarSenha.value) {
    alert('As senhas não coincidem.');
    return;
  }

  const formattedName = nome.value.charAt(0).toUpperCase() + nome.value.slice(1);
  userStore.setUser(formattedName, email.value.toLowerCase(), senha.value);
  alert('Registro concluído! Você será redirecionado para a tela de login.');
  router.push('/PaginaLogin');
}
</script>

<template>
    <div class="container">
        <div class="content first-content">
            <div class="first-column">
                <h2 class="title title-primary">Bem Vindo!</h2>
                <p class="description description-primary">Para manter-se conectado</p>
                <p class="description description-primary">entre com seus dados pessoais</p>
                <router-link to="/Paginalogin" class="btn btn-primary">Entrar</router-link>
            </div>
            <div class="second-column">
                <h2 class="title title-second">Criar Conta</h2>
                <p class="description description-second">Use seu email para se registrar:</p>
                <form class="form" @submit.prevent="registrar">
                    <div class="label-input">
                        <input v-model="nome" type="text" placeholder="Nome" required />
                    </div>
                    <div class="label-input">
                        <input v-model="email" type="email" placeholder="Email" required />
                    </div>
                    <div class="label-input">
                        <input v-model="senha" type="password" placeholder="Senha" required />
                    </div>
                    <div class="label-input">
                        <input v-model="confirmarSenha" type="password" placeholder="Confirmar Senha" required />
                    </div>
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
    border-radius: 15px;
    width: 960px;
    height: 50%;
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
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    left: 0;
}

.title {
    font-size: 28px;
    font-weight: bold;
    text-transform: capitalize;
}

.title-primary {
    color: #fff;
}

.title-second {
    color: #45CDDD;
}

.description {
    font-size: 14px;
    font-weight: 300;
    line-height: 30px;
}

.description-primary {
    color: #fff;
}

.description-second {
    color: #7f8c8d;
}

.btn {
    border-radius: 15px;
    text-transform: uppercase;
    color: #fff;
    font-size: 10px;
    padding: 10px 50px;
    cursor: pointer;
    font-weight: bold;
    width: 150px;
    align-self: center;
    border: none;
    margin-top: 1rem;
}

.btn-primary {
    background-color: transparent;
    border: 1px solid #fff;
    transition: background-color .5s;
}

.btn-primary:hover {
    background-color: #fff;
    color: #45CDDD;
}

.btn-second {
    background-color: #45CDDD;
    border: 1px solid #45CDDD;
    transition: background-color .5s;
}

.btn-second:hover {
    background-color: #fff;
    border: 1px solid #45CDDD;
    color: #45CDDD;
}

.first-content {
    display: flex;
}

.first-content .second-column {
    z-index: 11;
}

.first-column {
    text-align: center;
    width: 40%;
    z-index: 10;
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
    width: 55%;
}

.form input {
    height: 45px;
    width: 100%;
    border: none;
    background-color: #ecf0f1;
}

input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #ecf0f1 inset !important;
    -webkit-text-fill-color: #000 !important;
}

.label-input {
    position: relative;
    background-color: rgb(250, 250, 250);
    padding-bottom: 9px;
    height: 40px;
    display: flex;
    align-items: center;
}

.label-input input {
    padding-left: 10px;
    height: 100%;
    position: relative;
    z-index: 1;
}
</style>
