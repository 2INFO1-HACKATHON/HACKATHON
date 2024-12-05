<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useUserStore } from '@/stores/user'

const open = ref(false)
const mobileMenuOpen = ref(false)
const mobileDropdownOpen = ref(false)
const userStore = useUserStore()

const isAuthenticated = computed(() => userStore.user)

function toggleDropdown() {
  open.value = !open.value
}

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (!mobileMenuOpen.value) {
    mobileDropdownOpen.value = false
  }
}

function toggleMobileDropdown() {
  mobileDropdownOpen.value = !mobileDropdownOpen.value
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
    mobileDropdownOpen.value = false
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
      <RouterLink to="/" class="logo-container">
        <img src="../assets/imagens/logo.png" alt="logo" />
      </RouterLink>
      <RouterLink to="/SoliciteServico" class="menu-button desktop-only" aria-label="Home">Início</RouterLink>

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
        <RouterLink to="/" @click="toggleMobileMenu">Início</RouterLink>
        <RouterLink to="/SoliciteServico" @click="toggleMobileMenu">Solicitar Serviço</RouterLink>
        <div class="mobile-dropdown">
          <button class="dropdown-button" @click="toggleMobileDropdown" aria-haspopup="true"
            :aria-expanded="mobileDropdownOpen">
            Serviços
          </button>
          <transition name="fade">
            <div v-if="mobileDropdownOpen" class="mobile-dropdown-menu" role="menu">
              <RouterLink to="/PaginaLimpeza" class="dropdown-item" role="menuitem" @click="toggleMobileMenu">Limpeza
              </RouterLink>
              <RouterLink to="/PaginaCulinaria" class="dropdown-item" @click="toggleMobileMenu">Culinária</RouterLink>
              <RouterLink to="/PaginaCuidados" class="dropdown-item" @click="toggleMobileMenu">Cuidados</RouterLink>
              <RouterLink to="/PaginaManutencao" class="dropdown-item" @click="toggleMobileMenu">Manutenção</RouterLink>
            </div>
          </transition>
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
.menu-button:hover,
.dropdown-button:hover,
.auth-button:hover,
.mobile-menu a:hover,
.mobile-menu button:hover,
.dropdown-item:hover {
  color: #9b9b9b;
}


header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 1rem;
  background-color: #f3f3f3;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}


.logo-container {
  display: flex;
  align-items: center;
  margin-right: 2rem;
  flex-shrink: 0;
}


img {
  max-width: 2.5vw;
  min-width: 2.5vw;
  margin: 0.7vw;
}


.left-menu {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
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
  white-space: nowrap;
  padding: 10px;
}


.dropdown-container {
  position: relative;
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
  white-space: nowrap;
}


.dropdown-item:hover {
  background-color: #f1f1f1;
}


.auth-buttons {
  display: flex;
  gap: 1rem;
  margin-left: auto;
}


.auth-button {
  background-color: transparent;
  color: #666;
  padding: 10px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 1rem;
  border: none;
  white-space: nowrap;
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
  font-size: 3rem;
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  color: #666;
}


.close-button:hover {
  transform: rotate(90deg);
}

.logout-button {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  width: calc(100% - 4rem);
}

.mobile-dropdown {
  position: relative;
}

.mobile-dropdown-menu {
  background-color: #e9e9e9;
  padding: 0.5rem 0;
  margin-left: 1rem;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.mobile-dropdown-menu .dropdown-item {
  padding: 10px 15px;
  transition: background-color 0.2s ease;
}

.mobile-dropdown-menu .dropdown-item:hover {
  background-color: #d9d9d9;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.left-menu {
  justify-content: flex-start;
}

.auth-buttons {
  margin-left: 1rem;
}

.menu-button,
.dropdown-button,
.auth-button {
  padding: 10px 5px;
  font-size: 0.9rem;
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

  .logo-container {
    position: static;
    transform: none;
    display: flex;
    justify-content: center;
  }

  .left-menu {
    justify-content: center;
    width: 100%;
  }

  img {
    max-width: 3rem;
    min-width: 2rem;
    margin: 1vw;
  }
}
</style>
