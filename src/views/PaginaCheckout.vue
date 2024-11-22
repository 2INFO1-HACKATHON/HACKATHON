<script setup>
import { reactive, ref } from 'vue';

// Dados do pedido (simulado)
const pedido = reactive({
  servico: 'Limpeza',
  preco: 150.0,
});

// Dados do cliente
const cliente = reactive({
  nome: '',
  email: '',
  endereco: '',
  pagamento: '',
});

const showMessage = ref(false);

function finalizarCompra() {
  if (cliente.nome && cliente.email && cliente.endereco && cliente.pagamento) {
    showMessage.value = true;
  } else {
    alert('Por favor, preencha todos os campos corretamente!');
  }
}
</script>

<template>
  <div class="checkout-wrapper">
    <div class="checkout-container">
      <h2>Finalizar Pedido</h2>

      <!-- Resumo do pedido -->
      <div class="pedido-resumo">
        <h3>Resumo do Pedido</h3>
        <p><strong>Serviço:</strong> {{ pedido.servico }}</p>
        <p><strong>Preço:</strong> R$ {{ pedido.preco.toFixed(2) }}</p>
      </div>

      <!-- Formulário de checkout -->
      <form @submit.prevent="finalizarCompra">
        <div class="form-group">
          <label for="nome">Nome:</label>
          <input type="text" v-model="cliente.nome" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" v-model="cliente.email" required />
        </div>
        <div class="form-group">
          <label for="endereco">Endereço:</label>
          <input type="text" v-model="cliente.endereco" required />
        </div>
        <div class="form-group">
          <label for="pagamento">Método de Pagamento:</label>
          <select v-model="cliente.pagamento" required>
            <option disabled value="">Escolha um método</option>
            <option value="Cartão de Crédito">Cartão de Crédito</option>
            <option value="Boleto">Boleto</option>
            <option value="Pix">Pix</option>
          </select>
        </div>
        <button type="submit" class="submit-button">Finalizar Compra</button>
      </form>

      <p v-if="showMessage" class="confirmation-message">Compra realizada com sucesso! Obrigado por escolher nossos serviços.</p>
    </div>
  </div>
</template>

<style scoped>
:root {
  --font-geral: 'Raleway', sans-serif;
  --font-titulo: 'Urbanist', sans-serif;
  --azul-royal: #2ab0bf;
  --azul-royal-escuro: #107f8b;
  --verde-agua: #3fbfa8;
  --cinza: #d6d6d6;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.checkout-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: rgb(16,127,139);
  background: linear-gradient(90deg, rgba(63,191,168,1) 100%, rgba(42,176,191,1) 35%, rgba(16,127,139,1) 0%);
  font-family: var(--font-geral);
}

.checkout-container {
  width: 100%;
  max-width: 500px;
  padding: 30px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
}

h2 {
  font-family: var(--font-titulo);
  color: var(--azul-royal-escuro);
  font-size: 1.8em;
  margin-bottom: 20px;
}

h3 {
  font-size: 1.4em;
  color: var(--azul-royal-escuro);
  margin-bottom: 10px;
}

.pedido-resumo {
  margin-bottom: 20px;
  text-align: left;
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

label {
  font-size: 0.9em;
  color: var(--azul-royal-escuro);
  font-weight: bold;
}

input[type="text"],
input[type="email"],
select {
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  border: 1px solid var(--cinza);
  font-size: 1em;
  background-color: #f9f9f9;
  margin-top: 5px;
}

input[type="text"]:focus,
input[type="email"]:focus,
select:focus {
  outline: none;
  border-color: var(--azul-royal);
  background-color: #fff;
}

.submit-button {
  width: 100%;
  padding: 12px;
  background-color: var(--verde-agua);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: var(--azul-royal-escuro);
}

.confirmation-message {
  margin-top: 20px;
  color: var(--verde-agua);
  font-size: 1em;
  font-weight: bold;
}
</style>
