<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useUserStore } from '@/stores/user'

const open = ref(false)
const mobileMenuOpen = ref(false)
const userStore = useUserStore()

const isAuthenticated = computed(() => userStore.user)

function toggleDropdown() {
  open.value = !open.value
}

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

function logout() {
  userStore.clearUser()
  mobileMenuOpen.value = false
}

function handleClickOutside(event) {
  const dropdown = document.querySelector('.dropdown-menu')
  const dropdownButton = document.querySelector('.dropdown-button')
  const mobileMenu = document.querySelector('.mobile-menu')
  const hamburgerButton = document.querySelector('.hamburger-button')

  if (
    open.value &&
    dropdown &&
    !dropdown.contains(event.target) &&
    !dropdownButton.contains(event.target)
  ) {
    open.value = false
  }

  if (
    mobileMenuOpen.value &&
    mobileMenu &&
    !mobileMenu.contains(event.target) &&
    !hamburgerButton.contains(event.target)
  ) {
    mobileMenuOpen.value = false
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
    <button class="hamburger-button" @click="toggleMobileMenu" aria-label="Menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div class="left-menu">
      <RouterLink to="/"><img src="../assets/imagens/logo.png" alt="logo" /></RouterLink>
      <RouterLink to="/SoliciteServico" class="menu-button desktop-only" aria-label="Solicitar Serviço">Solicitar Serviço</RouterLink>

      <div class="dropdown-container desktop-only">
        <button class="dropdown-button" @click="toggleDropdown" aria-haspopup="true" :aria-expanded="open">
          Serviços
        </button>
        <div v-if="open" class="dropdown-menu" role="menu">
          <RouterLink to="/PaginaLimpeza" class="dropdown-item" role="menuitem">Limpeza</RouterLink>
          <RouterLink to="/PaginaCulinaria" class="dropdown-item">Culinária</RouterLink>
          <RouterLink to="/PaginaCuidados" class="dropdown-item">Cuidados</RouterLink>
          <RouterLink to="/PaginaManutencao" class="dropdown-item">Manutenção</RouterLink>
        </div>
      </div>

      <div v-if="!isAuthenticated" class="auth-buttons desktop-only">
        <RouterLink to="/Paginalogin" class="auth-button" aria-label="Entrar">Entrar</RouterLink>
        <RouterLink to="/PaginaSignup" class="auth-button" aria-label="Criar Conta">Criar Conta</RouterLink>
      </div>
      <div v-else class="auth-buttons desktop-only">
        <button @click="logout" class="auth-button" aria-label="Sair">Logout</button>
      </div>
    </div>

    <div class="mobile-menu" :class="{ 'open': mobileMenuOpen }">
      <button class="close-button" @click="toggleMobileMenu" aria-label="Fechar menu">
        &times;
      </button>
      <nav>
        <RouterLink to="/" @click="toggleMobileMenu">Home</RouterLink>
        <RouterLink to="/sobre" @click="toggleMobileMenu">Sobre Nós</RouterLink>
        <button class="dropdown-button" @click="toggleDropdown" aria-haspopup="true" :aria-expanded="open">
          Serviços
        </button>
        <div v-if="open" class="dropdown-menu" role="menu">
          <RouterLink to="/PaginaLimpeza" class="dropdown-item" role="menuitem" @click="toggleMobileMenu">Limpeza
          </RouterLink>
          <RouterLink to="/PaginaCulinaria" class="dropdown-item" @click="toggleMobileMenu">Culinária</RouterLink>
          <RouterLink to="/PaginaCuidados" class="dropdown-item" @click="toggleMobileMenu">Cuidados</RouterLink>
          <RouterLink to="/PaginaManutencao" class="dropdown-item" @click="toggleMobileMenu">Manutenção</RouterLink>
        </div>
        <div v-if="!isAuthenticated" class="auth-buttons">
          <RouterLink to="/Paginalogin" class="auth-button" aria-label="Entrar" @click="toggleMobileMenu">Entrar
          </RouterLink>
          <RouterLink to="/PaginaSignup" class="auth-button" aria-label="Criar Conta" @click="toggleMobileMenu">Criar
            Conta</RouterLink>
        </div>
        <div v-else class="logout-button">
          <button @click="logout" class="auth-button" aria-label="Sair">Logout</button>
        </div>
      </nav>
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

.hamburger-button {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10000;
  position: absolute;
  left: 1rem;
  top: 1rem;
}

.hamburger-button span {
  width: 2rem;
  height: 0.25rem;
  background: #666;
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
}

.mobile-menu {
  display: none;
  position: fixed;
  top: 0;
  left: -100%;
  width: 80%;
  height: 100%;
  background-color: #f3f3f3;
  padding: 4rem 2rem 2rem;
  transition: left 0.3s ease-in-out;
  z-index: 9998;
}

.mobile-menu.open {
  left: 0;
}

.mobile-menu nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mobile-menu a,
.mobile-menu button {
  font-size: 1.2rem;
  text-decoration: none;
  color: #666;
  text-align: left;
  background: none;
  border: none;
  padding: 0.5rem 0;
}

.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.logout-button {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  width: calc(100% - 4rem);
}

@media (max-width: 768px) {
  .desktop-only {
    display: none;
  }

  .hamburger-button {
    display: flex;
  }

  .mobile-menu {
    display: block;
  }

  .left-menu {
    justify-content: center;
  }

  img {
    width: 15vw;
  }
}
</style>
