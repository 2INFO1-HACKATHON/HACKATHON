<script setup>
import { reactive, ref, computed, watch} from 'vue'
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'

const formData = reactive({
  nome: '',
  telefone: '',
  cidade: '',
  cep: '',
  numero: ''
})


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

const telefoneError = computed(() => {
  if (telefoneModel.value && telefoneModel.value.length < 11) {
    return 'O número de telefone deve conter 11 dígitos'
  }
  return ''
})

const submitForm = () => {
  if (!telefoneValido.value) {
    erro.value = 'Telefone inválido'
    return
  }
  formData.telefone = telefoneModel.value
  console.log('Form submitted:', formData)
}

const cepModel = ref('')
const cep = computed({
  get: () => {
    const value = cepModel.value.replace(/\D/g, '')
    if (value.length <= 5) return value
    return `${value.slice(0, 5)}-${value.slice(5)}`
  },
  set: (value) => {
    cepModel.value = value.replace(/\D/g, '')
  }
})

const endereco = reactive({
  logradouro: '',
  bairro: '',
  localidade: '',
  uf: ''
})
const erro = ref('')

const limparEndereco = () => {
  endereco.logradouro = ''
  endereco.bairro = ''
  endereco.localidade = ''
  endereco.uf = ''
}

const buscarCep = async () => {
  const cepSemFormatacao = cepModel.value.replace(/\D/g, '')
  if (cepSemFormatacao.length !== 8) {
    erro.value = 'CEP Inválido'
    limparEndereco()
    return
  }

  erro.value = ''

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cepSemFormatacao}/json/`)
    const data = await response.json()

    if (data.erro) {
      erro.value = 'CEP Inválido'
      limparEndereco()
      return
    }

    endereco.logradouro = data.logradouro
    endereco.bairro = data.bairro
    endereco.localidade = data.localidade
    endereco.uf = data.uf
  } catch (error) {
    console.error('Erro ao buscar CEP:', error)
    erro.value = 'Erro ao buscar o CEP. Tente novamente.'
    limparEndereco()
  }
}
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

const selectedMethod = ref('card')
const amount = ref('150.00')
const qrCodeGenerated = ref(false)
const paymentComplete = ref(false)
const cardNumber = ref('')
const expiryDate = ref('')
const cvv = ref('')
const cardholderName = ref('')
const serviceName = ref('Limpeza Diária')
const isProcessing = ref(false)
const paymentStatus = ref('')
const paymentMessage = ref('')

const generateQRCode = () => {
  qrCodeGenerated.value = false
  setTimeout(() => {
    qrCodeGenerated.value = true
  }, 1500)
}

const formatCardNumber = (event) => {
  let value = event.target.value.replace(/\D/g, '')
  if (value.length > 16) value = value.slice(0, 16)
  cardNumber.value = value.replace(/(\d{4})(?=\d)/g, '$1 ')
}

const formatExpiryDate = (event) => {
  let value = event.target.value.replace(/\D/g, '')
  if (value.length > 4) value = value.slice(0, 4)
  expiryDate.value = value.replace(/(\d{2})(?=\d)/, '$1/')
}

const processPayment = () => {
  if (!validateForm()) return

  isProcessing.value = true
  paymentStatus.value = ''
  paymentMessage.value = ''

  // Simulando o processamento do pagamento
  setTimeout(() => {
    isProcessing.value = false
    const isSuccess = Math.random() > 0.3 // 70% de chance de sucesso
    paymentStatus.value = isSuccess ? 'success' : 'error'
    paymentMessage.value = isSuccess
      ? `Pagamento de R$ ${amount.value} processado com sucesso!`
      : 'Erro ao processar o pagamento. Por favor, tente novamente.'
  }, 2000)
}

const validateForm = () => {
  if (cardNumber.value.replace(/\s/g, '').length !== 16) {
    alert('Número do cartão inválido')
    return false
  }
  if (expiryDate.value.length !== 5) {
    alert('Data de validade inválida')
    return false
  }
  if (cvv.value.length !== 3) {
    alert('CVV inválido')
    return false
  }
  if (!cardholderName.value) {
    alert('Nome no cartão é obrigatório')
    return false
  }
  if (!amount.value || parseFloat(amount.value) <= 0) {
    alert('Valor inválido')
    return false
  }
  return true
}

 

const simulatePayment = () => {
  setTimeout(() => {
    paymentComplete.value = true
  }, 2000)
}


watch(selectedMethod, (newMethod) => {
  if (newMethod === 'pix') {
    generateQRCode()
  } else {
    qrCodeGenerated.value = false
  }
})
</script>

<template>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <Menu></Menu>
  <div class="container">
    <div class="progress-bar">
      <div class="step">
        <div class="icon user-icon"><i class="fa-regular fa-user"></i></div>
        <span>Login</span>
      </div>
      <div class="step">
        <div class="icon budget-icon"> <i class="fa-solid fa-list"></i></div>
        <span>Orçamento</span>
      </div>
      <div class="step">
        <div class="icon cart-icon"><i class="fa-solid fa-cart-shopping"></i></div>
        <span>Finalizando Pedido</span>
      </div>
    </div>

    <div class="form-container">
      <h2>Dados para realização do serviço</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="nome">Nome</label>
          <input type="text" id="nome" v-model="formData.nome" required />
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

          <p v-if="telefoneError" class="error-message">
            {{ telefoneError }}
          </p>
        </div>

        <div class="form-group">
          <label for="cep">CEP</label>
          <input
            id="cep"
            v-model="cep"
            @blur="buscarCep"
            type="text"
            placeholder="12345-678"
            :class="{ error: erro }"
            maxlength="9"
          />
          <p v-if="erro" class="error-message">{{ erro }}</p>
        </div>
        <div class="form-group">
          <label for="numero">Número</label>
          <input type="text" id="numero" v-model="formData.numero" required />
        </div>
        <div class="form-group">
          <label for="logradouro">Endereço</label>
          <input id="logradouro" v-model="endereco.logradouro" type="text" readonly />
        </div>
        <div class="form-group">
          <label for="bairro">Bairro</label>
          <input id="bairro" v-model="endereco.bairro" type="text" readonly />
        </div>
        <div class="form-group">
          <label for="cidade">Cidade</label>
          <input id="cidade" v-model="endereco.localidade" type="text" readonly />
        </div>
        <div class="form-group">
          <label for="estado">Estado</label>
          <input id="estado" v-model="endereco.uf" type="text" readonly />
        </div>

        <div class="payment-page">
          <div class="payment-container">
            <h2>Método de pagamento</h2>

            <div class="payment-methods">
              <div
                class="payment-method"
                :class="{ active: selectedMethod === 'card' }"
                @click="selectedMethod = 'card'"
              >
                <div class="method-icon card-icon"></div>
                <span>Cartão</span>
              </div>
              <div
                class="payment-method"
                :class="{ active: selectedMethod === 'pix' }"
                @click="selectedMethod = 'pix'"
              >
                <div class="method-icon pix-icon"> <img src="" alt=""></div>
                <span>Pix</span>
              </div>
            </div>

            <form v-if="selectedMethod === 'card'" @submit.prevent="processPayment">
              <div class="form-group">
                <label for="cardholderName">Nome impresso no cartão</label>
                <input
                  id="cardholderName"
                  v-model="cardholderName"
                  type="text"
                  placeholder="Nome como está no cartão"
                />
              </div>

              <div class="form-group">
                <label for="cardNumber">Número do cartão</label>
                <input
                  id="cardNumber"
                  v-model="cardNumber"
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  @input="formatCardNumber"
                  maxlength="19"
                />
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="expiryDate">Data de Validade</label>
                  <input
                    id="expiryDate"
                    v-model="expiryDate"
                    type="text"
                    placeholder="MM/AA"
                    @input="formatExpiryDate"
                    maxlength="5"
                  />
                </div>

                <div class="form-group">
                  <label for="cvv">CVV</label>
                  <input id="cvv" v-model="cvv" type="text" placeholder="123" maxlength="3" />
                </div>
              </div>
            </form>
            
            
            <div class="order-summary">
              <h3>Resumo do Pedido</h3>
              <div class="summary-item">
                <span>Serviço:</span>
                <span>{{ serviceName }}</span>
              </div>
              <div class="summary-item">
                <span>Forma de pagamento:</span>
                <span>{{ selectedMethod === 'card' ? 'Cartão' : 'PIX' }}</span>
              </div>
              <div class="summary-item total">
                <span>Total:</span>
                <span>R$ {{ amount }}</span>
              </div>
            </div>
            <button v-if="selectedMethod == 'card'" @click="processPayment" :disabled="isProcessing">
              {{ isProcessing ? 'Processando...' : 'Pagar' }}
            </button>


           

            <div v-if="selectedMethod === 'pix'" class="pix-section">
      <div class="payment-content">
        <h1 class="payment-title">Pagamento via PIX</h1>

        <div v-if="!paymentComplete" class="payment-form">
          <div class="qr-code-container">
            <img
              v-if="qrCodeGenerated"
              src="../assets/imagens/QRCODEPIX.png"
              alt="QR Code PIX"
              class="qr-code"
            />
            <p v-else class="generating-text">Gerando QR Code...</p>
          </div>

          <div class="amount-container">
            <p class="amount-label">Valor a pagar:</p>
            <p class="amount-value">R$ {{ amount }}</p>
          </div>

          <button v-if="qrCodeGenerated" @click="simulatePayment" class="button pay-button">
            Pagar
          </button>
        </div>

        <div v-else class="payment-complete">
          <svg
            class="success-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 64 64"
          >
            <circle cx="32" cy="32" r="30" fill="#4CAF50" />
            <path d="M27 37.4L19.6 30l-2.8 2.8L27 43l20-20-2.8-2.8z" fill="white" />
          </svg>
          <h2 class="success-title">Sua solicitação foi recebida</h2>
          <p class="success-message">Confira seu e-mail para confirmação.</p>
           <button v-if="qrCodeGenerated"  class="button pay-button"> 
            <RouterLink to="/" class="go-back">
              Voltar ao início
            </RouterLink>
          </button>
        </div>
      </div>
    </div>

            <div v-if="paymentStatus" :class="['payment-status', paymentStatus]">
              {{ paymentMessage }}
            </div>
          </div>
        </div>
      </form>
       
    </div>
    
  </div>
  <Footer></Footer>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15vh
}

.progress-bar {
  background-color: #2dc4b6;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  width: 50vw;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  flex: 1;
  text-align: center;
}

 
 .go-back{
  text-decoration: none;
  color: inherit
 }

.budget-icon::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  
  border-radius: 2px;
}
 

.form-container {
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 50vw;
  min-height: 400px;
}

h2 {
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: #333;
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
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
  border-color: #2dc4b6;
}

input.error {
  border-color: #ff3333;
  background-color: #fff0f0;
}

.error-message {
  color: #ff3333;
  font-size: 14px;
  margin-top: 5px;
  font-weight: bold;
}

.payment-page {
  padding: 1rem;
  background-color: #ffffff;
}

.payment-container {
  max-width: 500px;
  margin: 0 auto;
}

h2 {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  color: #333;
}

.payment-methods {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center
}

.payment-method {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  cursor: pointer;
  width: 20vh;
  background: #f9fafb;
  
}

.payment-method.active {
  border-color: #0ea5e9;
  background: #f0f9ff;
}

.method-icon {
  width: 40px;
  height: 40px;
  margin-bottom: 0.5rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.card-icon {
  background-image: url("../assets/imagens/cartao-de-credito.png");
  background-size: cover;
}

.pix-icon {
  background-image: url("../assets/imagens/logoPIX-removebg.png");
}

.form-group {
  margin-bottom: 1rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

label {
  display: block;
  font-size: 0.875rem;
  color: #374151;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-size: 0.875rem;
  background-color: #f9fafb;
}

input:focus {
  outline: none;
  border-color: #0ea5e9;
  box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
}

button {
  width: 100%;
  background-color: #10b981;
  color: #ffffff;
  font-weight: 500;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 1rem;
}

button:hover:not(:disabled) {
  background-color: #22be8a;
}

button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.order-summary {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
}

.order-summary h3 {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: #4b5563;
}

.summary-item.total {
  font-weight: 500;
  color: #111827;
  margin-top: 1rem;
  padding-top: 0.5rem;
  border-top: 1px solid #e5e7eb;
}

.pix-section {
  padding: 1.5rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow:
    0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.payment-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #1f2937;
  text-align: center;
  margin-bottom: 1rem;
}

.payment-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.qr-code-container {
  background-color: #f9fafb;
  padding: 1rem;
  border-radius: 0.375rem;
  text-align: center;
}

.qr-code {
  margin: 0 auto;
  height: 200px;
  width: 200px;
}

.generating-text {
  color: #6b7280;
}

.amount-container {
  text-align: center;
}

.amount-label {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
}

.amount-value {
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
}

.button {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: background-color 0.2s;
  cursor: pointer;
  border: none;
}

.generate-button {
  background-color: #2563eb;
  color: white;
}

.generate-button:hover:not(:disabled) {
  background-color: #1d4ed8;
}

.generate-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pay-button {
  background-color: #10b981;
  color: white;
}

.pay-button:hover {
  background-color: #059669;
}

.payment-complete {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.success-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
}

.success-message {
  color: #4b5563;
}

.reset-button {
  background-color: #2563eb;
  color: white;
}

.reset-button:hover {
  background-color: #1d4ed8;
}

.payment-status {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 0.25rem;
  text-align: center;
}

.payment-status.success {
  background-color: #d1fae5;
  color: #065f46;
}

.payment-status.error {
  background-color: #fee2e2;
  color: #991b1b;
}

.success-icon {
  width: 64px;
  height: 64px;
}
.success-icon::after {
  position: absolute;
  font-size: 2rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
