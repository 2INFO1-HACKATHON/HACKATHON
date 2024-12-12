<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '@/stores/user'

const props = defineProps({
  buttonText: {
    type: String,
    default: 'Serviços'
  },
  options: {
    type: Array,
    default: () => [
      { label: 'Limpeza', to: '/PaginaLimpeza' },
      { label: 'Culinária', to: '/PaginaCulinaria' },
      { label: 'Cuidados', to: '/PaginaCuidados' },
      { label: 'Manutenção', to: '/PaginaManutencao' },
      { label: 'Solicite Serviço', to: '/SoliciteServico'}
    ]
  }
})

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()

const isOpen = ref(false)
const mobileMenuOpen = ref(false)
const mobileDropdownOpen = ref(false)
const dropdownRef = ref(null)
const triggerButtonRef = ref(null)
const menuItemRefs = ref([])

const isAuthenticated = computed(() => userStore.user)

const currentOption = computed(() => {
  return props.options.find((option) => option.to === route.path) || null
})

const currentButtonText = computed(() => {
  return currentOption.value ? currentOption.value.label : props.buttonText
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const closeDropdown = () => {
  isOpen.value = false
}

const selectOption = (option) => {
  closeDropdown()
  triggerButtonRef.value.focus()
  router.push(option.to)
}

const handleKeyDown = (e) => {
  if (!isOpen.value) return

  switch (e.key) {
    case 'Escape':
      closeDropdown()
      break
    case 'ArrowDown':
      e.preventDefault()
      focusNextItem()
      break
    case 'ArrowUp':
      e.preventDefault()
      focusPreviousItem()
      break
  }
}

const focusNextItem = () => {
  const currentIndex = menuItemRefs.value.findIndex((item) => item === document.activeElement)
  const nextIndex = (currentIndex + 1) % menuItemRefs.value.length
  menuItemRefs.value[nextIndex]?.focus()
}

const focusPreviousItem = () => {
  const currentIndex = menuItemRefs.value.findIndex((item) => item === document.activeElement)
  const previousIndex = (currentIndex - 1 + menuItemRefs.value.length) % menuItemRefs.value.length
  menuItemRefs.value[previousIndex]?.focus()
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (!mobileMenuOpen.value) {
    mobileDropdownOpen.value = false
  }
}

const toggleMobileDropdown = () => {
  mobileDropdownOpen.value = !mobileDropdownOpen.value
}

const logout = () => {
  userStore.clearUser()
  mobileMenuOpen.value = false
}

const handleClickOutside = (event) => {
  if (isOpen.value && !event.target.closest('.dropdown-container')) {
    closeDropdown()
  }

  const mobileMenu = document.querySelector('.mobile-menu')
  const hamburgerButton = document.querySelector('.hamburger-button')

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
      <RouterLink to="/" class="menu-button desktop-only" aria-label="Home">Início</RouterLink>

      <div ref="dropdownRef" class="dropdown-container desktop-only">
        <button
          ref="triggerButtonRef"
          @click="toggleDropdown"
          @keydown="handleKeyDown"
          :class="['dropdown-button', { 'is-open': isOpen }]"
          :aria-haspopup="true"
          :aria-expanded="isOpen"
        >
          <span class="button-text">{{ currentButtonText }}</span>
          <span :class="['arrow', { 'arrow-up': isOpen }]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </button>
        <transition name="fade">
          <div v-if="isOpen" class="dropdown-menu" role="menu">
            <ul class="dropdown-menu">
              <li v-for="(option, index) in options" :key="index">
                <a
                  :href="option.to"
                  @click.prevent="selectOption(option)"
                  @keydown.enter="selectOption(option)"
                  :ref="
                    (el) => {
                      if (el) menuItemRefs[index] = el
                    }
                  "
                >
                  {{ option.label }}
                </a>
              </li>
            </ul>
          </div>
        </transition>
      </div>

      <div v-if="!isAuthenticated" class="auth-buttons desktop-only">
        <RouterLink to="/Paginalogin" class="auth-button" aria-label="Entrar">Entrar</RouterLink>
        <RouterLink to="/PaginaSignup" class="auth-button" aria-label="Criar Conta"
          >Criar Conta</RouterLink
        >
      </div>
      <div v-else class="auth-buttons desktop-only">
        <button @click="logout" class="auth-button" aria-label="Sair">Logout</button>
      </div>
    </div>

    <div class="mobile-menu" :class="{ open: mobileMenuOpen }">
      <nav>
        <RouterLink to="/" @click="toggleMobileMenu">Início</RouterLink>
        <RouterLink to="/SoliciteServico" @click="toggleMobileMenu">Solicitar Serviço</RouterLink>
        <div class="mobile-dropdown">
          <button
            class="dropdown-button"
            @click="toggleMobileDropdown"
            aria-haspopup="true"
            :aria-expanded="mobileDropdownOpen"
          >
            Serviços
          </button>
          <transition name="fade">
            <div v-if="mobileDropdownOpen" class="mobile-dropdown-menu" role="menu">
              <a
                v-for="(option, index) in options"
                :key="index"
                :href="option.to"
                @click.prevent="selectOption(option)"
                class="dropdown-item"
                role="menuitem"
              >
                {{ option.label }}
              </a>
            </div>
          </transition>
        </div>
        <div v-if="!isAuthenticated" class="auth-buttons">
          <RouterLink
            to="/Paginalogin"
            class="auth-button"
            aria-label="Entrar"
            @click="toggleMobileMenu"
            >Entrar
          </RouterLink>
          <RouterLink
            to="/PaginaSignup"
            class="auth-button"
            aria-label="Criar Conta"
            @click="toggleMobileMenu"
            >Criar Conta</RouterLink
          >
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
  display: flex;
  align-items: center;
  white-space: nowrap;
  margin-right: 2vw;
  width: 4vw;
  transition: all 0.3s ease;
  justify-content: center;
  

}
.dropdown-button.is-open {
  width: 100%;
  justify-content: center;
}
 
.dropdown-button {
  color: #666;
  border: none;
  background-color: transparent;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  white-space: nowrap;
  margin-right: 2vw;
  width: 100%;
  transition: all 0.3s ease;
  border-radius: 5px;
  justify-content: center;
}

.arrow {
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
}

.arrow-up {
  transform: rotate(180deg);
}

.dropdown-container {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  background-color: #eeeeee;
  width: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  text-align: center;
  list-style-type: none;
   align-items: center;
   justify-content: center;
   border-radius: 5px;
  width: 100%;
  justify-content: center;

}

.dropdown-menu li a {
  display: block;
  padding: 12px 5px;
  color: #333;
  text-decoration: none;
  transition: background-color 0.2s ease;
  justify-content: center;
  font-size: 15px;
  border-radius: 5px;
}
.dropdown-button:hover {
  background-color: #f8f9fa;
}

.dropdown-menu li a:hover,
.dropdown-menu li a:focus {
  background-color: #f8f9fa;
  outline: none;
}

.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
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
  top: 0.7rem;
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

.menu-button:hover,
.dropdown-button:hover,
.auth-button:hover,
.mobile-menu a:hover,
.mobile-menu button:hover,
.dropdown-item:hover {
  color: #9b9b9b;
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
