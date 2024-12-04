<template>
  <div class="container">
    <div class="content">
      <div class="profile-section">
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
        <button class="delete-button">
          Deletar cadastro
        </button>
      </div>

      <div class="form-section">
        <h1>Meu perfil</h1>
        
        <form @submit.prevent="saveProfile">
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

          <h2>Informações residenciais:</h2>
          <div class="form-grid">
            <div class="form-field">
              <label>CEP:</label>
              <input v-model="form.cep" type="text" @blur="lookupCEP" maxlength="8" />
            </div>
            <div class="form-field">
              <label>Estado:</label>
              <select v-model="form.state" @change="updateCities">
                <option value="">Selecione o estado</option>
                <option v-for="state in states" :key="state.uf" :value="state.uf">
                  {{ state.name }}
                </option>
              </select>
            </div>
            <div class="form-field">
              <label>Cidade:</label>
              <select v-model="form.city" :disabled="!form.state">
                <option value="">Selecione a cidade</option>
                <option v-for="city in cities" :key="city" :value="city">
                  {{ city }}
                </option>
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

          <div class="submit-container">
            <button type="submit" class="submit-button">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

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

const lookupCEP = async () => {
  if (form.cep.length === 8) {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${form.cep}/json/`)
      const data = await response.json()

      if (!data.erro) {
        form.state = data.uf
        form.city = data.localidade
        form.street = data.logradouro
        updateCities()
      } else {
        alert('CEP não encontrado. Por favor, verifique o número inserido.')
      }
    } catch (error) {
      console.error('Erro ao buscar CEP:', error)
      alert('Ocorreu um erro ao buscar o CEP. Por favor, tente novamente mais tarde.')
    }
  }
}

const saveProfile = () => {
  // Implement save profile logic here
  console.log('Profile saved:', form)
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f3f4f6;
  padding: 20px;
}

.content {
  display: flex;
  max-width: 900px;
  width: 100%;
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.profile-section {
  width: 300px;
  padding: 20px;
  background-color: #e5e7eb;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #0d9488;
  overflow: hidden;
  margin-bottom: 20px;
}

.profile-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.upload-button, .delete-button {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.upload-button {
  background-color: #0d9488;
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
  padding: 20px;
}

h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #111827;
}

h2 {
  font-size: 18px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 10px;
  color: #374151;
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
  font-size: 14px;
  margin-bottom: 5px;
  color: #4b5563;
}

input, select {
  width: 100%;
  padding: 8px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-size: 14px;
}

.submit-container {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}

.submit-button {
  background-color: #0d9488;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
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
</style>

