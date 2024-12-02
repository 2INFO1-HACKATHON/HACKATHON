<template>
<header><Menu></Menu></header>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <div class="container">
    <!-- Sidebar -->
    <div class="sidebar">
      <div class="logo">
        <div class="logo-icon"></div>
        <span class="logo-text">Logo</span>
      </div>
      
      <div class="menu-item">
        <i class="fa-solid fa-user"></i>
        <span>Configurações de usuário</span>
      </div>
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <div class="profile-container">
        <div class="profile-grid">
          <!-- Profile Photo Section -->
          <div class="photo-section">
            <div class="profile-photo">
              <img v-if="profileImage" :src="profileImage" alt="Profile" />
              <input
                ref="fileInput"
                type="file"
                class="hidden"
                accept="image/*"
                @change="handleImageUpload"
              />
            </div>
            <button class="upload-button" @click="$refs.fileInput.click()">
              Efetue o upload
            </button>
            <button class="delete-button" @click="deleteAccount">
              Deletar cadastro
            </button>
          </div>

          <!-- Form Section -->
          <div class="form-section">
            <h1>Meu perfil</h1>
            
            <form @submit.prevent="saveProfile">
              <!-- Personal Information -->
              <div class="form-group">
                <h2>Informações pessoais:</h2>
                <div class="form-grid">
                  <div class="form-field">
                    <label>Nome:</label>
                    <input v-model="form.firstName" type="text" />
                  </div>
                  <div class="form-field">
                    <label>Sobrenome:</label>
                    <input v-model="form.lastName" type="text" />
                  </div>
                  <div class="form-field">
                    <label>Telefone:</label>
                    <input v-model="form.phone" type="tel" />
                  </div>
                  <div class="form-field">
                    <label>Email:</label>
                    <input v-model="form.email" type="email" />
                  </div>
                </div>
              </div>

              <!-- Residential Information -->
              <div class="form-group">
                <h2>Informações residenciais:</h2>
                <div class="form-grid">
                  <div class="form-field">
                    <label>CEP:</label>
                    <input v-model="form.cep" type="text" />
                  </div>
                  <div class="form-field">
                    <label>Cidade:</label>
                    <select v-model="form.city">
                      <option value="">Selecione</option>
                      <option value="sao-paulo">São Paulo</option>
                      <option value="rio-de-janeiro">Rio de Janeiro</option>
                    </select>
                  </div>
                  <div class="form-field">
                    <label>Estado:</label>
                    <select v-model="form.state">
                      <option value="">Selecione</option>
                      <option value="SP">SP</option>
                      <option value="RJ">RJ</option>
                    </select>
                  </div>
                </div>
                <div class="form-grid address">
                  <div class="form-field">
                    <label>Rua:</label>
                    <input v-model="form.street" type="text" />
                  </div>
                  <div class="form-field">
                    <label>Número:</label>
                    <input v-model="form.number" type="text" />
                  </div>
                </div>
              </div>

              <!-- Submit Button -->
              <div class="submit-container">
                <button type="submit" class="submit-button">
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>

import { ref } from 'vue'
import Menu from '@/components/Menu.vue'


const profileImage = ref(null)
const form = ref({
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  cep: '',
  city: '',
  state: '',
  street: '',
  number: ''
})

const handleImageUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      profileImage.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

const deleteAccount = () => {
  if (confirm('Tem certeza que deseja deletar sua conta?')) {
    // Implement delete account logic here
    console.log('Account deleted')
  }
}

const saveProfile = () => {
  // Implement save profile logic here
  console.log('Profile saved:', form.value)
}
</script>

<style scoped>
.container {
  display: flex;
  min-height: 100vh;
  background-color: #f9fafb;
}

.sidebar {
  width: 256px;
  padding: 24px;
  background-color: white;
  border-right: 1px solid #e5e7eb;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 32px;
}

.logo-icon {
  width: 32px;
  height: 32px;
  background-color: #0d9488;
  border-radius: 50%;
}

.logo-text {
  font-size: 18px;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #374151;
}

.main-content {
  flex: 1;
  padding: 32px;
}

.profile-container {
  max-width: 896px;
  margin: 0 auto;
}

.profile-grid {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 32px;
}

.photo-section {
  background-color: #e5e7eb;
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-photo {
  width: 192px;
  height: 192px;
  background-color: #0d9488;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  margin-bottom: 16px;
}

.profile-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.upload-button, .delete-button {
  width: 100%;
  background-color: #0d9488;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  margin-bottom: 12px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.upload-button:hover, .delete-button:hover {
  background-color: #0f766e;
}

.form-section {
  background-color: #e5e7eb;
  padding: 24px;
  border-radius: 8px;
}

h1 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
}

.form-group {
  margin-bottom: 24px;
}

h2 {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 16px;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-grid.address {
  grid-template-columns: 2fr 1fr;
}

.form-field {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 14px;
  margin-bottom: 4px;
}

input, select {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
}

.submit-container {
  display: flex;
  justify-content: center;
}

.submit-button {
  background-color: #0d9488;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 48px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #0f766e;
}

.hidden {
  display: none;
}
.copyright {
  background-color: var(--azul-royal);
  color: white;
  margin-bottom: 0;
  padding: 1.5vw;
  font-size: 1rem;
  align-items: center;
  text-align: center
}
</style>

