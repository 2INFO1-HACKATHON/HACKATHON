<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useUserStore } from '@/stores/user'

const open = ref(false)
const userStore = useUserStore()

const isAuthenticated = computed(() => userStore.user)

function Dropdown() {
  open.value = !open.value;
}

function logout() {
  userStore.clearUser()
}

function handleClickOutside(event) {
  if (open.value && !event.target.closest('.dropdown-menu')) {
    open.value = true
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <header>
    <RouterLink to="/"><img src="../assets/imagens/logo.png" alt="logo" /></RouterLink>
    <button aria-label="Sobre Nós">Sobre Nós</button>

<div class="menu">

  <button
  class="dropdown-button"
  @click="Dropdown"
  aria-haspopup="true"
  aria-expanded="open"
  >
  Serviços
</button>

<div v-if="open" class="dropdown-menu" role="menu">
  <RouterLink to="/PaginaLimpeza" class="dropdown-item" role="menuitem">Limpeza</RouterLink>
  <RouterLink to="/PaginaCulinaria" class="dropdown-item">Culinária</RouterLink>
  <RouterLink to="/PaginaCuidados" class="dropdown-item">Cuidados</RouterLink>
  <RouterLink to="/PaginaManutencao" class="dropdown-item">Manutenção</RouterLink>
</div>


</div>

    <div v-if="!isAuthenticated">
      <RouterLink to="/Paginalogin" class="auth-button" aria-label="Entrar">Entrar</RouterLink>
      <RouterLink to="/PaginaSignup" class="auth-button" aria-label="Criar Conta"
        >Criar Conta</RouterLink
      >
    </div>
    <div v-else>
      <button @click="logout" class="auth-button" aria-label="Sair">Logout</button>
    </div>
  </header>
</template>

<style scoped>
img {
  width: 6vw;
}

header {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  background-color: #f3f3f3;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
}

a {
  margin-right: 1.5rem;
  color: #666;
  text-decoration: none;
}
.menu {
  margin-top: 0;
}

button {
  margin-right: 1.5rem;
  color: #666;
  border: none;
  background-color: transparent;
  text-decoration: none;
}

.dropdown-button {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  justify-content: center;
}

.dropdown-menu {
  position: absolute;

  background-color: #f9f9f9;
  width: 92px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  & a {
    width: 100%;
  }
}

.dropdown-item {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  font-size: 0.8rem;
}

.dropdown-item:hover {
  background-color: #f1f1f1;
  width: 92;
}

.auth-button {
  background-color: transparent;
  color: #666;
  padding: 10px 20px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.auth-button:hover {
  background-color: #f1f1f1;
}
</style>
