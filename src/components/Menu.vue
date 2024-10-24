<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import { useUserStore } from '@/stores/user';

const open = ref(false);
const userStore = useUserStore();

const isAuthenticated = computed(() => !!userStore.user);

function toggleDropdown() {

  open.value = !open.value;
}

function logout() {
  userStore.clearUser();
}

function handleClickOutside(event) {
  if (open.value && !event.target.closest('.dropdown-menu')) {
    open.value = false;
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <header>

    <RouterLink to="/"><img src="../assets/imagens/logo.png" alt="logo" /></RouterLink>
    <button aria-label="Sobre Nós">Sobre Nós</button>
    <button class="dropdown-button" @click="toggleDropdown" aria-haspopup="true" aria-expanded="open">Serviços</button>

    <div v-if="open" class="dropdown-menu" role="menu">
      <RouterLink to="/PaginaLimpeza" class="dropdown-item">Limpeza</RouterLink>
     <RouterLink to="/PaginaCulinaria" class="dropdown-item">Culinária</RouterLink>
     <RouterLink to="/PaginaCuidados" class="dropdown-item">Cuidados</RouterLink>
    </div>

    <div v-if="!isAuthenticated">
      <RouterLink to="/Paginalogin" class="auth-button" aria-label="Entrar">Entrar</RouterLink>
      <RouterLink to="/PaginaSignup" class="auth-button" aria-label="Criar Conta">Criar Conta</RouterLink>
    </div>
    <div v-else>
      <button @click="logout" class="auth-button" aria-label="Sair">Logout</button>

    </div>
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
  border: none;
  background-color: transparent;
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
  background-color: #f1f1f1;
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
