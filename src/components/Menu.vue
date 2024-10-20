<script setup>


import { ref } from 'vue'
const open = ref(false)

function Dropdown() {
  open.value = !open.value;
 
}
</script>
<template>
  <header>
    <RouterLink to="/"><img src="../assets/imagens/logo.png" alt="logo" /> </RouterLink>
    <button>Sobre Nós</button>
    <button class="dropdown-button" @click="Dropdown">Serviços</button>
    <div v-if="open" class="dropdown-menu">
     <RouterLink to="/PaginaLimpeza" class="dropdown-item">Limpeza</RouterLink>
     <RouterLink to="/PaginaCulinaria" class="dropdown-item">Culinária</RouterLink>
     
     
    </div>
    <RouterLink to="/PaginaLogin">Entrar</RouterLink>
    <RouterLink to="/PaginaSignup">Criar Conta</RouterLink>
  </header>
</template>

<style scoped>
img {
  width: 9vw;
  height: 15vh;
}

header {
  width: 100%;
  display: flex;

  align-items: center;
  margin-bottom: 1.5rem;
}

a {
  margin-right: 1.5rem;
  color: #666;
  text-decoration: none;
}

button {
  margin-right: 1.5rem;
  color: #666;
  text-decoration: none;
  border: none;
  background-color: #ffe0e000;
}
.dropdown-button {
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-item {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-item:hover {
  background-color: #f1f1f1;
}
</style>
