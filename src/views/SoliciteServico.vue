<script setup>
import { reactive, ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'

const router = useRouter()
const userStore = useUserStore()
const nome = ref('')

const serviços = ['Limpeza', 'Culinária', 'Manutenção', 'Cuidados']

const subServiços = {
  Limpeza: ['Limpeza Diária', 'Limpeza Semanal', 'Limpeza Quinzenal'],
  Culinária: ['Personal Chef', 'Chef Nutricionista', 'Chef de Festa'],
  Cuidados: ['Cuidado com Crianças', 'Cuidado com Idosos', 'Cuidados Pós-Operatórios'],
  Manutenção: [
    'Troca de Encanamento',
    'Troca de Resistência',
    'Instalação de Chuveiro',
    'Troca de Lâmpada',
    'Instalação/Manutenção de Ar Condicionado',
    'Instalação de Pia'
  ]
}

const pessoa = reactive({
  nome: '',
  telefone: '',
  email: '',
  servico: '',
  subServico: '',
  observacoes: ''
})

const bloquearNaoNumeros = (event) => {
  const tecla = event.key
  if (
    !/[\d]/.test(tecla) &&
    tecla !== 'Backspace' &&
    tecla !== 'Delete' &&
    tecla !== 'ArrowLeft' &&
    tecla !== 'ArrowRight'
  ) {
    event.preventDefault()
  }
}

const subServicosDisponiveis = ref([])

function atualizarSubServicos() {
  if (pessoa.servico) {
    subServicosDisponiveis.value = subServiços[pessoa.servico]
  } else {
    subServicosDisponiveis.value = []
  }
}
const submitForm = () => {
  router.push({
    name: 'PaginaCheckout',
    query: {
      nome: nome.value,
      telefone: telefone.value
    }
  })
}

const erro = ref('')
function checkLoginAndSubmit() {
  if (userStore.isLoggedIn) {
    EnviarDados()
  } else {
    localStorage.setItem('pendingServiceRequest', JSON.stringify(pessoa))
    router.push('/PaginaSignup')
  }

  if (!telefoneValido.value) {
    erro.value = 'Telefone inválido'
    return
  }

  pessoa.telefone = telefoneModel.value

  console.log('Form submitted:', pessoa)

  resetForm()
}

function resetForm() {
  Object.assign(pessoa, {
    nome: '',
    telefone: '',
    email: '',
    servico: '',
    subServico: '',
    observacoes: ''
  })

  telefoneModel.value = ''
  subServicosDisponiveis.value = []
}

onMounted(() => {
  const currentPath = router.currentRoute.value.fullPath
  const signupRedirectPath = '/PaginaSignup'

  if (currentPath === signupRedirectPath) {
    const pendingRequest = localStorage.getItem('pendingServiceRequest')
    if (pendingRequest) {
      Object.assign(pessoa, JSON.parse(pendingRequest))
      atualizarSubServicos()
    }
  } else {
    resetForm()
  }
})
const erros = reactive({
  nome: '',
  telefone: '',
  email: '',
  servico: '',
  subServico: ''
})
function EnviarDados() {
  let hasErrors = false

  //
  Object.keys(erros).forEach((key) => (erros[key] = ''))

  if (!pessoa.nome) {
    erros.nome = 'O nome é obrigatório.'
    hasErrors = true
  }
  if (!telefoneValido.value) {
    erros.telefone = 'O telefone deve ser válido.'
    hasErrors = true
  }
  if (!pessoa.email) {
    erros.email = 'O e-mail é obrigatório.'
    hasErrors = true
  }
  if (!pessoa.servico) {
    erros.servico = 'Por favor, selecione um serviço.'
    hasErrors = true
  }
  if (!pessoa.subServico) {
    erros.subServico = 'Por favor, selecione um tipo de serviço.'
    hasErrors = true
  }

  if (hasErrors) {
    return
  }
}

const telefoneModel = ref('')
const telefone = computed({
  get: () => formatarTelefone(telefoneModel.value),
  set: (value) => {
    telefoneModel.value = value.replace(/\D/g, '').slice(0, 11)
  }
})

const formatarTelefone = (value) => {
  const numbers = value.replace(/\D/g, '')
  if (numbers.length <= 2) return numbers
  if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
}

const telefoneValido = computed(() => {
  const numeroLimpo = telefoneModel.value.replace(/\D/g, '')
  return numeroLimpo.length === 11
})

const precos = {
  Limpeza: {
    'Limpeza Diária': 150,
    'Limpeza Semanal': 250,
    'Limpeza Quinzenal': 300
  },
  Culinária: {
    'Personal Chef': 400,
    'Chef Nutricionista': 300,
    'Chef de Festa': 800
  },
  Cuidados: {
    'Cuidado com Crianças': 100,
    'Cuidado com Idosos': 200,
    'Cuidados Pós-Operatórios': 400
  },
  Manutenção: {
    'Troca de Encanamento': 150,
    'Troca de Resistência': 100,
    'Instalação de Chuveiro': 200,
    'Troca de Lâmpada': 20,
    'Instalação/Manutenção de Ar Condicionado': 700,
    'Instalação de Pia': 300
  }
}

const precoSelecionado = ref(null)

function atualizarPreco() {
  if (pessoa.servico && pessoa.subServico) {
    precoSelecionado.value = precos[pessoa.servico][pessoa.subServico] || null
  } else {
    precoSelecionado.value = null
  }
}
</script>

<template>
  <Menu></Menu>
  <div class="containerText">
    <h1 class="title">Solicite seu Orçamento</h1>
  </div>
  <div class="descricao">
    <p class="t2">
      Para fornecermos um orçamento personalizado, por favor, preencha as informações sobre você e a sua residência!
    </p>
  </div>

  <div class="form-wrapper">
    <div class="form-container">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="nome">Nome:</label>
          <input type="text" id="nome" v-model="pessoa.nome" required />
          <p v-if="erros.nome" class="error-message">{{ erros.nome }}</p>
        </div>

        <div class="form-group">
          <label for="telefone">Telefone</label>
          <input
            type="tel"
            id="telefone"
            v-model="telefone"
            :class="{ error: !telefoneValido && telefoneModel.value }"
            placeholder="(00) 00000-0000"
            required
            @input="telefoneModel.value = $event.target.value.replace(/\D/g, '').slice(0, 11)"
            @keydown="bloquearNaoNumeros($event)"
            maxlength="15"
          />
          <p v-if="erros.telefone" class="error-message">{{ erros.telefone }}</p>
        </div>

        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="pessoa.email" required />
          <p v-if="erros.email" class="error-message">{{ erros.email }}</p>
        </div>

        <div class="form-group">
          <label for="servico">Serviço:</label>
          <select id="servico" v-model="pessoa.servico" @change="atualizarSubServicos" required>
            <option value="" disabled>Selecione um serviço</option>
            <option v-for="servico in serviços" :key="servico" :value="servico">
              {{ servico }}
            </option>
          </select>
          <p v-if="erros.servico" class="error-message">{{ erros.servico }}</p>
        </div>

        <div class="form-group" v-if="subServicosDisponiveis.length > 0">
          <label for="subServico">Subserviço:</label>
          <select id="subServico" v-model="pessoa.subServico" @change="atualizarPreco" required>
            <option value="" disabled>Selecione um tipo de {{ pessoa.servico }}</option>
            <option
              v-for="subServico in subServicosDisponiveis"
              :key="subServico"
              :value="subServico"
            >
              {{ subServico }}
            </option>
          </select>
          <p v-if="erros.subServico" class="error-message">{{ erros.subServico }}</p>
        </div>

        <div v-if="precoSelecionado !== null" class="form-group">
          <label for="preco">Preço:</label>
          <input
            type="text"
            id="preco"
            :value="`R$ ${precoSelecionado.toFixed(2)}`"
            disabled
            class="preco-input"
          />
        </div>
        <div class="form-group">
          <label for="observacoes">Observações:</label>
          <textarea
            id="observacoes"
            v-model="pessoa.observacoes"
            rows="4"
            placeholder="Digite aqui suas observações..."
          ></textarea>
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
  font-family: var(--font-geral);
  /* top | right | bottom | left */
  margin: 8vh auto 10vh auto;
}

.error-message {
  color: #f7dede;
  font-size: 14px;
  margin-top: 5px;
  font-weight: bold;
}

.form-container {
  width: 100%;
  max-width: 46%;
  max-height: 50%;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
}

h2 {
  font-family: var(--font-titulo);
  font-weight: 500;
  color: #2ab0bf;
  font-size: 1.8em;
  margin-bottom: 20px;
}

.containerText {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 18vh;
}

.title {
  font-size: 2rem;
  font-weight: 600;
}

.descricao {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.t2 {
  width: 50%;
  font-size: 1.3rem;
  font-weight: 400;
  margin-top: 2vh;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

label {
  font-size: 0.9em;
  color: #2ab0bf;
  font-weight: bold;
}

input[type='text'],
input[type='tel'],
input[type='email'],
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

input[type='text']:focus,
input[type='tel']:focus,
input[type='email']:focus,
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
  background-color: var(--azul-royal);
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
