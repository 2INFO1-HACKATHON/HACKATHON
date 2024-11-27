<template>
  <div class="container">
    <div class="progress-bar">
      <div class="step">
        <div class="icon user-icon"></div>
        <span>Log in</span>
      </div>
      <div class="step">
        <div class="icon budget-icon"></div>
        <span>Orçamento</span>
      </div>
      <div class="step">
        <div class="icon cart-icon"></div>
        <span>Finalizando Pedido</span>
      </div>
    </div>

    <div class="form-container">
      <h2>Dados para realização do serviço</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="nome">Nome</label>
          <input type="text" id="nome" v-model="formData.nome" required>
        </div>

        <div class="form-group">
          <label for="endereco">Endereço</label>
          <input type="text" id="endereco" v-model="formData.endereco" required>
        </div>

        <div class="form-group">
          <label for="telefone">Telefone</label>
          <input type="tel" id="telefone" v-model="formData.telefone" required>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="cidade">Cidade</label>
            <input type="text" id="cidade" v-model="formData.cidade" required>
          </div>

          <div class="form-group">
            <label for="estado">Estado</label>
            <input type="text" id="estado" v-model="formData.estado" required>
          </div>

          <div class="form-group">
            <label for="cep">CEP</label>
            <input type="text" id="cep" v-model="formData.cep" required>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const formData = reactive({
  nome: '',
  endereco: '',
  telefone: '',
  cidade: '',
  estado: '',
  cep: ''
})

const submitForm = () => {
  console.log('Form submitted:', formData)
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.progress-bar {
  background-color: #2DC4B6;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  flex: 1;
  text-align: center;
}

.icon {
  width: 24px;
  height: 24px;
  background-color: white;
  border-radius: 50%;
  margin-bottom: 8px;
  position: relative;
}

/* Custom icons using pseudo-elements */
.user-icon::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  border: 2px solid #2DC4B6;
  border-radius: 50%;
  box-sizing: border-box;
}

.budget-icon::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  border: 2px solid #2DC4B6;
  border-radius: 2px;
}

.cart-icon::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  border: 2px solid #2DC4B6;
  border-radius: 8px 8px 2px 2px;
}

.form-container {
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 30vw;
}

h2 {
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #333;
  font-size: 0.9rem;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

input:focus {
  outline: none;
  border-color: #2DC4B6;
}
</style>