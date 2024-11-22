<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const serviços = [
  { name: 'Limpeza' },
  { name: 'Culinária' },
  { name: 'Manutenção' },
  { name: 'Cuidados' }
];

const pessoa = reactive({
  nome: '',
  telefone: '',
  servico: '',
  email: ''
});

const showMessage = ref(false);

function EnviarDados() {
  if (pessoa.nome && pessoa.telefone && pessoa.servico && pessoa.email) {
    showMessage.value = true && router.push({name: 'PaginaCheckout'});
    
  } else {
    alert('Por favor, preencha todos os campos corretamente!');
  }
}
</script>

<template>
  <div class="form-wrapper">
    <div class="form-container">
      <h2>Solicite seu Orçamento</h2>
      <form @submit.prevent="EnviarDados">
        <div class="form-group">
          <label for="nome">Nome:</label>
          <input type="text" v-model="pessoa.nome" required />
        </div>
        <div class="form-group">
          <label for="telefone">Telefone:</label>
          <input type="tel" v-model="pessoa.telefone" required />
        </div>
        <div class="form-group">
          <label for="servico">Serviço desejado:</label>
          <select v-model="pessoa.servico" required>
            <option disabled value="">Escolha um serviço</option>
            <option v-for="servico in serviços" :key="servico.name" :value="servico.name">
              {{ servico.name }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label for="email">Email de Confirmação:</label>
          <input type="email" v-model="pessoa.email" required />
        </div>
        <button type="submit" class="submit-button" >Enviar</button>
      </form>

      <p v-if="showMessage" class="confirmation-message">Formulário enviado com sucesso!</p>
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

.form-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: rgb(16,127,139);
background: linear-gradient(90deg, rgba(63,191,168,1) 100%, rgba(42,176,191,1) 35%,  rgba(16,127,139,1) 0%);
  font-family: var(--font-geral);
}

.form-container {
  width: 100%;
  max-width: 400px;
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
input[type="tel"],
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
input[type="tel"]:focus,
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