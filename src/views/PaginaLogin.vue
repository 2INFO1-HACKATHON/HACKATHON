<script setup>
</script>

<template>
    <div class="container">
        <div class="content">
            <div class="first-column">
                <h2 class="title title-primary">Conectar-se</h2>
                <form class="form" @submit.prevent>
                    <div class="label-input">
                        <input type="email" placeholder="Email" required>
                    </div>
                    <div class="label-input">
                        <input type="password" placeholder="Senha" required>
                    </div>
                    <div class="password-container">
                        <a class="password" href="#">Esqueceu sua senha?</a>
                    </div>
                    <router-link to="/" class="btn btn-login">Entrar</router-link>
                </form>
            </div>

            <div class="second-column">
                <h2 class="title title-second">Bem Vindo!</h2>
                <p class="description">Coloque seus dados pessoais e inicie sua jornada conosco</p>
                <router-link to="/PaginaSignup" class="btn btn-signup">Sign Up</router-link>
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
    padding: 20px 40px; /* Espaçamento lateral */
}

.second-column {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #45CDDD;
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
    color: #45CDDD;
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
    max-width: 400px; /* Limita a largura do formulário */
    margin: 0 auto; /* Centraliza o formulário */
}

.form input {
    width: 90%; /* Define a largura do input */
    border: none; /* Remove a borda */
    background-color: #ecf0f1; /* Cor de fundo do input */
    border-radius: 5px; /* Bordas arredondadas */
    padding: 10px; /* Espaçamento interno */
    margin-bottom: 10px; /* Espaço entre os campos */
}

.label-input {
    position: relative;
    display: flex;
    align-items: center;
}

.password-container {
    margin-top: 10px;
    margin-bottom: 20px; /* Espaçamento abaixo do link */
    align-self: flex-start; /* Alinha o link à esquerda */
}

.password {
    font-size: 12px; /* Tamanho pequeno para o texto do link */
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
    background-color: #45CDDD;
    border: 1px solid #45CDDD;
    transition: background-color .5s;
}

.btn-login:hover {
    background-color: #fff;
    border: 1px solid #45CDDD;
    color: #45CDDD;
}

.btn-signup {
    background-color: #45CDDD;
    color: #ffffff;
    border: 1px solid #fff;
    transition: background-color 0.5s;
}

.btn-signup:hover {
    background-color: #ffffff;
    color: #45CDDD;
}
</style>
