<script setup>
import { ref } from 'vue'
const open = ref(false)
const servicos = ref('Serviços')

function Dropdown() {
  open.value = !open.value
}
</script>
<template>
  <header>
    <RouterLink to="/"><img src="@/assets/imagens/logo.png" alt="logo" /> </RouterLink>
    <button>Sobre Nós</button>
    <button class="dropdown-button" @click="Dropdown">Serviços</button>
    <div v-if="open" class="dropdown-menu">
      <RouterLink to="/PaginaLimpeza" class="dropdown-item">Limpeza</RouterLink>
    </div>
    <RouterLink to="/PaginaLogin" class="entrar-botao">Entrar</RouterLink>
    <RouterLink to="/PaginaSignup" class="menu-botao">Criar Conta</RouterLink>
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
  text-decoration: none;
  border: none;
  background-color: transparent; 
  color: black;
    padding: 8px 10px;
    font-size: 1rem; 

}
.dropdown-button {
  color: black;
  border: none;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-item {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-item:hover {
}

.menu-botao {  
  margin-right: 1.5rem;
  text-decoration: none;
  border: none;
  background-color: #D6D6D6;
  border-radius: 18px;
  width: 7rem;
  text-align: center;
  color: black;
    padding: 8px 10px;
    font-size: 1rem;
  

}

.entrar-botao {
  color: black;
    padding: 8px 10px;
    font-size: 1rem;
}
</style>
