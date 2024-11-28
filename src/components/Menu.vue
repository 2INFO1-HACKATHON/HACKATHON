<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useUserStore } from '@/stores/user'

const open = ref(false)
const userStore = useUserStore()

const isAuthenticated = computed(() => userStore.user)

function Dropdown() {
  open.value = !open.value
}

function logout() {
  userStore.clearUser()
}

function handleClickOutside(event) {
  const dropdown = document.querySelector('.dropdown-menu')
  const dropdownButton = document.querySelector('.dropdown-button')

  if (
    open.value &&
    dropdown &&
    !dropdown.contains(event.target) &&
    !dropdownButton.contains(event.target)
  ) {
    open.value = false
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
    <div class="left-menu">
      <RouterLink to="/"><img src="../assets/imagens/logo.png" alt="logo" /></RouterLink>
      <button class="menu-button" aria-label="Sobre Nós">Sobre Nós</button>

      <div class="dropdown-container">
        <button class="dropdown-button" @click="Dropdown" aria-haspopup="true" aria-expanded="open">
          Serviços
        </button>
        <div v-if="open" class="dropdown-menu" role="menu">
          <RouterLink to="/PaginaLimpeza" class="dropdown-item" role="menuitem">Limpeza</RouterLink>
          <RouterLink to="/PaginaCulinaria" class="dropdown-item">Culinária</RouterLink>
          <RouterLink to="/PaginaCuidados" class="dropdown-item">Cuidados</RouterLink>
          <RouterLink to="/PaginaManutencao" class="dropdown-item">Manutenção</RouterLink>
        </div>
      </div>

      <div v-if="!isAuthenticated" class="auth-buttons">
        <RouterLink to="/Paginalogin" class="auth-button" aria-label="Entrar">Entrar</RouterLink>
        <RouterLink to="/PaginaSignup" class="auth-button" aria-label="Criar Conta">Criar Conta</RouterLink>
      </div>
      <div v-else class="auth-buttons">
        <button @click="logout" class="auth-button" aria-label="Sair">Logout</button>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  background-color: #f3f3f3;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}

img {
  width: 6vw;
}

.left-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.menu-button,
.dropdown-button {
  color: #666;
  border: none;
  background-color: transparent;
  text-decoration: none;
  cursor: pointer;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
}

.dropdown-container {
  position: relative;
}

.dropdown-button {
  padding: 10px 20px;
}

.dropdown-menu {
  position: absolute;
  background-color: #f9f9f9;
  width: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  text-align: center;
}

.dropdown-item {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  font-size: 1rem;
}

.dropdown-item:hover {
  background-color: #f1f1f1;
}

.auth-buttons {
  display: flex;
  gap: 1rem;
}

.auth-button {
  background-color: transparent;
  color: #666;
  padding: 10px 20px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 1rem;
  border: none;
}

.auth-button:hover {
  background-color: #f1f1f1;
}
</style>
