<template>
    <div class="container">
        <div class="content">
            <!-- Coluna de Login (Esquerda, 60%) -->
            <div class="first-column">
                <h2 class="title title-primary">Conectar-se</h2>
                <form class="form" @submit.prevent>
                    <div class="label-input">
                        <input type="email" placeholder="Email" required>
                    </div>
                    <div class="label-input">
                        <input type="password" placeholder="Senha" required>
                    </div>
                    <a class="password" href="#">Esqueceu sua senha?</a>
                    <router-link to="/" class="btn btn-login">Entrar</router-link>
                </form>
            </div>

            <!-- Coluna de Boas-vindas (Direita, 40%) -->
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
    display: flex; /* Adicionando flex aqui para garantir que as colunas estejam lado a lado */
    background-color: #fff;
    border-radius: 15px;
    width: 960px;
    height: 50%;
    justify-content: space-between;
}

.first-column {
    width: 60%; /* Largura da coluna de login */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.second-column {
    width: 40%; /* Largura da coluna de boas-vindas */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #45CDDD; /* Cor de fundo da coluna de boas-vindas */
    color: #fff;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
}

.title {
    font-size: 24px;
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
}

.form input {
    height: 45px;
    width: 100%;
    border: none;
    background-color: #ecf0f1;
}

.label-input {
    position: relative;
    background-color: rgb(250, 250, 250) ;
    padding-bottom: 9px;
    height: 40px;
    display: flex;
    align-items: center;
    & input {
        padding-left: 40px;
        height: 100%;
        position: relative;
        z-index: 1;
    }
}

.input-icon {
    position: absolute;
    left: 10px;
    z-index: 999;
    }

.password {
    margin-top: 10px;
    margin-bottom: 20px;
    color: #3498db;
    text-decoration: none;
    align-self: flex-start;
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
    background-color: #fff;
    color: #45CDDD;
    border: 1px solid #fff;
    transition: background-color 0.5s;
}

.btn-signup:hover {
    background-color: #45CDDD;
    color: #fff;
}
</style>
