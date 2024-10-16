
<script setup>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      
</script>

<template>
        <div class="container">
        <div class="content first-content">
            <div class="first-column">
                <h2 class="title title-primary">Bem Vindo!</h2>
                <p class="description description-primary">Para manter-se conectado</p>
                <p class="description description-primary">entre com seus dados pessoais</p>
       <router-link to="/PaginaLogin" class="btn btn-primary">Entrar</router-link>
            </div>    
            <div class="second-column">
                <h2 class="title title-second">Criar Conta</h2>
                <p class="description description-second">Use seu email para se registrar:</p>
                <form class="form">

                    <form @submit.prevent="validateForm"></form>
                    <div class="label-input">
                    <label for="name"></label>
                    <input type="text" id="name" v-model="name" placeholder="Name">
                    <span v-if="errors.name" class="error">{{ errors.name }}</span>

                    </div>
                    
                    <div class="label-input" >
                        <label for="email"></label>
                         <input type="email" id="email" v-model="email" placeholder="Email">
                         <span v-if="errors.email" class="error">{{ errors.email }}</span>
                    </div>
                    
                    <div class="label-input" > 
                        <label for="password"></label>
                        <input type="password" id="password" v-model="password" placeholder="Password">
                        <span v-if="errors.password" class="error">{{ errors.password }}</span>
                    </div>

                    <router-link to="/" class="btn btn-second">Conectar</router-link>
                    
             
                               
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
.social-media {
    margin: 1rem 0;
}
.link-social-media:not(:first-child){
    margin-left: 10px;
}
.link-social-media .item-social-media {
    transition: background-color .5s;
}
.link-social-media:hover .item-social-media{
    background-color: #45CDDD;
    color: #fff;
    border-color: #45CDDD;
}
.list-social-media {
    display: flex;
    list-style-type: none;
}
.item-social-media {
    border: 1px solid #bdc3c7;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    color: #95a5a6;
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
input:-webkit-autofill 
{    
    -webkit-box-shadow: 0 0 0px 1000px #ecf0f1 inset !important;
    -webkit-text-fill-color: #000 !important;
}

fas-label{
    color: #000;
    
}

.icon-modify {
    color: #7f8c8d;
    padding: 0 5px;
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



</style>

