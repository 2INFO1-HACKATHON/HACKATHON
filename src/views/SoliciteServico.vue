<script setup>
import { reactive, ref } from 'vue';
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'

const serviços = ['Limpeza', 'Culinária', 'Manutenção', 'Cuidados'];

const subServiços = {
  Limpeza: ['Limpeza Diária', 'Limpeza Semanal', 'Limpeza Quinzenal'],
  Culinária: ['Personal Chef', 'Chef de Festa', 'Chef Nutricionista'],
  Cuidados: ['Cuidado com Crianças', 'Cuidado com Idosos', 'Cuidados Pós-Operatórios'],
  Manutenção: [
    'Troca de Encanamento',
    'Troca de Resistência',
    'Instalação de Chuveiro',
    'Troca de Lâmpada',
    'Instalação/Manutenção de Ar Condicionado',
    'Instalação de Pia'
  ]
};

const pessoa = reactive({
  nome: '',
  telefone: '',
  email: '',
  servico: '',
  subServico: '',
  observacoes: '' // Adicionado campo para observações
});

const subServicosDisponiveis = ref([]);

function atualizarSubServicos() {
  if (pessoa.servico) {
    subServicosDisponiveis.value = subServiços[pessoa.servico];
  } else {
    subServicosDisponiveis.value = [];
  }
}

function EnviarDados() {
  if (
    pessoa.nome &&
    pessoa.telefone &&
    pessoa.email &&
    pessoa.servico &&
    pessoa.subServico
  ) {
    alert('Formulário enviado com sucesso!\n' + JSON.stringify(pessoa, null, 2));
  } else {
    alert('Por favor, preencha todos os campos obrigatórios.');
  }
}
</script>

<template>
  <Menu></Menu>
  <div class="form-wrapper">
    <div class="form-container">
      <h2>Solicite seu Serviço</h2>
      <form @submit.prevent="EnviarDados">
        <div class="form-group">
          <label for="nome">Nome:</label>
          <input type="text" id="nome" v-model="pessoa.nome" required />
        </div>
        <div class="form-group">
          <label for="telefone">Telefone:</label>
          <input type="tel" id="telefone" v-model="pessoa.telefone" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="pessoa.email" required />
        </div>
        <div class="form-group">
          <label for="servico">Serviço:</label>
          <select id="servico" v-model="pessoa.servico" @change="atualizarSubServicos" required>
            <option value="" disabled>Selecione um serviço</option>
            <option v-for="servico in serviços" :key="servico" :value="servico">{{ servico }}</option>
          </select>
        </div>
        <div class="form-group" v-if="subServicosDisponiveis.length > 0">
          <label for="subServico">Subserviço:</label>
          <select id="subServico" v-model="pessoa.subServico" required>
            <option value="" disabled>Selecione um tipo de {{ pessoa.servico }}</option>
            <option v-for="subServico in subServicosDisponiveis" :key="subServico" :value="subServico">
              {{ subServico }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label for="observacoes">Observações:</label>
          <textarea id="observacoes" v-model="pessoa.observacoes" rows="4" placeholder="Digite aqui suas observações..."></textarea>
        </div>
        <button type="submit" class="submit-button">Enviar</button>
      </form>
    </div>
  </div>
  <Footer></Footer>
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
  height: 120vh;
  font-family: var(--font-geral);
}

.form-container {
  width: 100%;
  max-width: 500px;
  padding: 30px;
  background-color: var(--azul-royal);
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
}

h2 {
  font-family: var(--font-titulo);
  font-weight: 500;
  color: white;
  font-size: 1.8em;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

label {
  font-size: 0.9em;
  color: white;
}

input[type="text"],
input[type="tel"],
input[type="email"],
select,
textarea {
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
select:focus,
textarea:focus {
  outline: none;
  border-color: var(--azul-royal);
  background-color: #fff;
}

textarea {
  resize: none;
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
</style>

