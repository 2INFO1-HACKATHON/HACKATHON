<template>
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

  <div class="content">
    <div class="profile-section">
    <div class="user-config">
   <h1>Configurações de usuário</h1>
    
    </div>
        <div class="profile-photo">
          <img v-if="profileImage" :src="profileImage" alt="Profile" />
         
        </div>
        <input
          ref="fileInput"
          type="file"
          class="hidden"
          accept="image/*"
          @change="handleImageUpload"
        />
        <button class="upload-button" @click="$refs.fileInput.click()">
          Efetue o upload
        </button>
        <button class="delete-button" @click="deleteProfile">
          Deletar cadastro
        </button>
      </div>

      <div class="form-section">
        <div v-if="mensagem" :class="['mensagem', mensagemTipo]">
          {{ mensagem }}
        </div>
        <h1>Meu perfil</h1>
        <div class="line-profile"></div>

        <form @submit.prevent="saveProfile">
          <h2>Informações pessoais:</h2>
          <div class="line-info"></div>
          <div class="form-grid">
            <div class="form-field">
              <label for="firstName">Nome:</label>
              <input id="firstName" v-model="form.firstName" type="text" required />
            </div>
            <div class="form-field">
              <label for="lastName">Sobrenome:</label>
              <input id="lastName" v-model="form.lastName" type="text" required />
            </div>
            <div class="form-field">
              <label for="telefone">Telefone:</label>
              <input
                id="telefone"
                v-model="telefone"
                type="tel"
                :class="{ error: !telefoneValido && telefoneModel }"
                placeholder="(00) 00000-0000"
                required
                @keydown="bloquearNaoNumeros"
                maxlength="15"
              />
              <span v-if="telefoneError" class="error-message">{{ telefoneError }}</span>
            </div>
            <div class="form-field">
              <label for="email">Email:</label>
              <input id="email" v-model="form.email" type="email" required />
            </div>
          </div>

          <h2>Informações residenciais:</h2>
          <div class="line-info"></div>
          <div class="form-grid">
            <div class="form-field">
              <label for="cep">CEP:</label>
              <input
                id="cep"
                v-model="cep"
                @blur="buscarCep"
                type="text"
                placeholder="12345-678"
                :class="{ error: erro }"
                maxlength="9"
              />
              <span v-if="erro" class="error-message">{{ erro }}</span>
            </div>
            <div class="form-field">
              <label for="state">Estado:</label>
              <select id="state" v-model="form.state" @change="updateCities">
                <option value="">Selecione o estado</option>
                <option v-for="state in states" :key="state.uf" :value="state.uf">
                  {{ state.name }}
                </option>
              </select>
            </div>
            <div class="form-field">
              <label for="city">Cidade:</label>
              <select id="city" v-model="form.city">
                <option value="">Selecione a cidade</option>
                <option v-for="city in cities" :key="city" :value="city">
                  {{ city }}
                </option>
              </select>
            </div>
          </div>
          <div class="form-grid address">
            <div class="form-field">
              <label for="street">Rua:</label>
              <input id="street" v-model="form.street" type="text" />
            </div>
            <div class="form-field">
              <label for="number">Número:</label>
              <input id="number" v-model="form.number" type="text" />
            </div>
          </div>

          <div class="submit-container">
            <button type="submit" class="submit-button">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'

const profileImage = ref(null)
const form = reactive({
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  cep: '',
  state: '',
  city: '',
  street: '',
  number: ''
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
    
    // Update the form with the fetched data
    form.street = endereco.logradouro
    form.city = endereco.localidade
    form.state = endereco.uf
    updateCities()
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

const mensagem = ref('')
const mensagemTipo = ref('')

const exibirMensagem = (texto, tipo) => {
  mensagem.value = texto
  mensagemTipo.value = tipo
  setTimeout(() => {
    mensagem.value = ''
    mensagemTipo.value = ''
  }, 3000)
}

const saveProfile = () => {
  if (!telefoneValido.value) {
    exibirMensagem('Telefone inválido', 'erro')
    return
  }
  form.phone = telefoneModel.value
  form.cep = cepModel.value
  console.log('Profile saved:', form)

  exibirMensagem('Perfil salvo com sucesso!', 'sucesso')
}

const deleteProfile = () => {
  if (confirm('Tem certeza que deseja deletar seu cadastro? Esta ação não pode ser desfeita.')) {
    // Limpar todos os campos do formulário
    Object.keys(form).forEach(key => {
      form[key] = ''
    })
    
    // Limpar outros estados
    profileImage.value = null
    telefoneModel.value = ''
    cepModel.value = ''
    erro.value = ''
    
    // Limpar o endereço
    limparEndereco()
    

    cities.value = []
    
    console.log('Cadastro deletado')

    exibirMensagem('Cadastro deletado com sucesso!', 'sucesso')
  }
}

const states = [
  { uf: 'AC', name: 'Acre' },
  { uf: 'AL', name: 'Alagoas' },
  { uf: 'AP', name: 'Amapá' },
  { uf: 'AM', name: 'Amazonas' },
  { uf: 'BA', name: 'Bahia' },
  { uf: 'CE', name: 'Ceará' },
  { uf: 'DF', name: 'Distrito Federal' },
  { uf: 'ES', name: 'Espírito Santo' },
  { uf: 'GO', name: 'Goiás' },
  { uf: 'MA', name: 'Maranhão' },
  { uf: 'MT', name: 'Mato Grosso' },
  { uf: 'MS', name: 'Mato Grosso do Sul' },
  { uf: 'MG', name: 'Minas Gerais' },
  { uf: 'PA', name: 'Pará' },
  { uf: 'PB', name: 'Paraíba' },
  { uf: 'PR', name: 'Paraná' },
  { uf: 'PE', name: 'Pernambuco' },
  { uf: 'PI', name: 'Piauí' },
  { uf: 'RJ', name: 'Rio de Janeiro' },
  { uf: 'RN', name: 'Rio Grande do Norte' },
  { uf: 'RS', name: 'Rio Grande do Sul' },
  { uf: 'RO', name: 'Rondônia' },
  { uf: 'RR', name: 'Roraima' },
  { uf: 'SC', name: 'Santa Catarina' },
  { uf: 'SP', name: 'São Paulo' },
  { uf: 'SE', name: 'Sergipe' },
  { uf: 'TO', name: 'Tocantins' }
]

const citiesByState = {
  AC: ['Rio Branco', 'Cruzeiro do Sul', 'Sena Madureira', 'Tarauacá', 'Feijó'],
  AL: ['Maceió', 'Arapiraca', 'Rio Largo', 'Palmeira dos Índios', 'Penedo'],
  AP: ['Macapá', 'Santana', 'Laranjal do Jari', 'Oiapoque', 'Mazagão'],
  AM: ['Manaus', 'Parintins', 'Itacoatiara', 'Manacapuru', 'Coari'],
  BA: ['Salvador', 'Feira de Santana', 'Vitória da Conquista', 'Camaçari', 'Itabuna'],
  CE: ['Fortaleza', 'Caucaia', 'Juazeiro do Norte', 'Maracanaú', 'Sobral'],
  DF: ['Brasília', 'Ceilândia', 'Taguatinga', 'Planaltina', 'Guará'],
  ES: ['Vitória', 'Vila Velha', 'Serra', 'Cariacica', 'Linhares'],
  GO: ['Goiânia', 'Aparecida de Goiânia', 'Anápolis', 'Rio Verde', 'Luziânia'],
  MA: ['São Luís', 'Imperatriz', 'São José de Ribamar', 'Timon', 'Caxias'],
  MT: ['Cuiabá', 'Várzea Grande', 'Rondonópolis', 'Sinop', 'Tangará da Serra'],
  MS: ['Campo Grande', 'Dourados', 'Três Lagoas', 'Corumbá', 'Ponta Porã'],
  MG: ['Belo Horizonte', 'Uberlândia', 'Contagem', 'Juiz de Fora', 'Betim'],
  PA: ['Belém', 'Ananindeua', 'Santarém', 'Marabá', 'Castanhal'],
  PB: ['João Pessoa', 'Campina Grande', 'Santa Rita', 'Patos', 'Bayeux'],
  PR: ['Curitiba', 'Londrina', 'Maringá', 'Ponta Grossa', 'Cascavel'],
  PE: ['Recife', 'Jaboatão dos Guararapes', 'Olinda', 'Caruaru', 'Petrolina'],
  PI: ['Teresina', 'Parnaíba', 'Picos', 'Piripiri', 'Floriano'],
  RJ: ['Rio de Janeiro', 'São Gonçalo', 'Duque de Caxias', 'Nova Iguaçu', 'Niterói'],
  RN: ['Natal', 'Mossoró', 'Parnamirim', 'São Gonçalo do Amarante', 'Macaíba'],
  RS: ['Porto Alegre', 'Caxias do Sul', 'Pelotas', 'Canoas', 'Santa Maria'],
  RO: ['Porto Velho', 'Ji-Paraná', 'Ariquemes', 'Vilhena', 'Cacoal'],
  RR: ['Boa Vista', 'Rorainópolis', 'Caracaraí', 'Pacaraima', 'Alto Alegre'],
  SC: ['Florianópolis', 'Joinville', 'Blumenau', 'São José', 'Criciúma'],
  SP: ['São Paulo', 'Guarulhos', 'Campinas', 'São Bernardo do Campo', 'Santo André'],
  SE: ['Aracaju', 'Nossa Senhora do Socorro', 'Lagarto', 'Itabaiana', 'São Cristóvão'],
  TO: ['Palmas', 'Araguaína', 'Gurupi', 'Porto Nacional', 'Paraíso do Tocantins']
}

const cities = ref([])

const updateCities = () => {
  cities.value = citiesByState[form.state] || []
  form.city = ''
}

// Watch for changes in the form.state and update cities accordingly
watch(() => form.state, updateCities)

</script>

<style scoped>

.content {
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  background-color: #f2f2f2;
}

.profile-section {
  width: 50%;
  background-color: #F0F0F0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-right: 1px solid #ccc;
  margin-top: 6rem;
}
.user-config{
  display: flex;
  align-items: center;
  gap: 10px; 

}
.user-config i{
  font-size: 1em;
}

.profile-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #107f8b;
  overflow: hidden;
  margin-top: 50px;
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.upload-button, .delete-button {
  width: 40%;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.upload-button {
  background-color: #107f8b;
  color: white;
}

.upload-button:hover {
  background-color: #0f766e;
}

.delete-button {
  background-color: #ef4444;
  color: white;
}

.delete-button:hover {
  background-color: #dc2626;
}

.form-section {
  flex: 1;
  padding: 40px;
}

h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #111827;
}

.line-profile {
  width: 150px;
  height: 4px;
  background-color: #C9C9C9;
  margin-bottom: 3rem;
  border-radius: 10px;
}

h2 {
  font-size: 18px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 10px;
  color: #374151;
}

.line-info {
  width: 200px;
  height: 2px;
  background-color: #292929;
  margin-bottom: 1rem;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.form-grid.address {
  grid-template-columns: 2fr 1fr;
}

.form-field {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 15px;
  margin-bottom: 5px;
  font-weight: bold;
  color: #4b5563;
}

input, select {
  width: 70%;
  padding: 8px;
  border: 1px solid #d1d5db;
  border-radius: 14px;
  font-size: 14px;
}

.submit-container {
  display: flex;
  justify-content: center; 
  align-items: center; 
  margin-top: 20px;
}

.submit-button {
  background-color: #0d9488;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 10px 50px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #0f766e;
}

.hidden {
  display: none;
}

.error-message {
  color: #dc2626;
  font-size: 12px;
  margin-top: 5px;
}

.error {
  border-color: #dc2626;
}

.mensagem {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px 20px;
  text-align: center;
  font-weight: bold;
  z-index: 1000;
  margin-bottom: 20px;
}

.sucesso {
  background-color: #10b981;
  color: white;
}

.erro {
  background-color: #ef4444;
  color: white;
}
</style>

