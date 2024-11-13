<script setup>
import Menu from '@/components/Menu.vue';
import Footer from '@/components/Footer.vue';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
userStore.loadUser();
</script>

<template>
  <div class="container">
    <header>
      <Menu></Menu>
    </header>

    <div class="main">
      <h1 class="titulo">FixTudo</h1>
      <h2>Sua casa em boas mãos</h2>
      <p>Manutenção e cuidado com carinho</p>
      <div class="welcome-container">
        <h1 v-if="userStore.user">Boas-vindas, {{ userStore.user.name }}!</h1>
      </div>
    </div>

    <div class="imagem-home">

    </div>

    <div class="sobrenos">
      <div ref="sectionToScroll">
        <h3>Sobre Nós</h3>
        <p>
          Bem-vindo(a) à <span class="forte">Fix Tudo</span>, onde transformamos suas necessidades em
          <span class="forte">soluções práticas</span> e personalizadas! Somos uma empresa dedicada a
          conectar você com <span class="forte">profissionais qualificados</span> nas áreas de manutenção,
          limpeza, cuidados pessoais e culinária.
          Nosso compromisso é com a <span class="forte">excelência</span> e a <span class="forte">satisfação</span> dos
          nossos clientes.
        </p>
      </div>
    </div>
  </div>
  <div class="intera">
    <div class="left-side">
      <h4>Fácil e Rápido</h4>
      <h2>Como Funciona?</h2>
      <p>Basta apenas um toque e deixa que o resto a gente facilita para você.</p>
      <p class="small-text">Não leva nem 10 segundos.</p>
      <button class="cta-button">
        <svg class="icon-left whatsapp-icon" viewBox="0 0 16 16">
          <path
            d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z">
          </path>
        </svg>
        <p>Solicitar Orçamento</p>
      </button>
    </div>
    <div class="right-side">
      <div class="card">
        <p class="card-number">01.</p>
        <p>Toque em qualquer botão do site para ser atendido por nossa equipe por Whatsapp.</p>
      </div>
      <div class="card">
        <p class="card-number">02.</p>
        <p>Escolha qual o tipo de serviço desejado e tenha rapidamente seu orçamento.</p>
      </div>
      <div class="card">
        <p class="card-number">03.</p>
        <p>Receba nossos termos e agende o melhor horário para a limpeza.</p>
      </div>
      <div class="card blue-card">
        <p class="card-number">04.</p>
        <p>Receba em tempo recorde nossos funcionários no seu estabelecimento ou casa.</p>
      </div>
    </div>
  </div>







  <div class="beneficios">
    <h2>BENEFÍCIOS</h2>
    <h3>Por que nos escolher?</h3>
    <div class="rowben">
      <div class="columnben">
        <div class="sectionben">
          <i class="fas fa-tools"></i>
          <p>Profissionais treinados e supervisionados</p>
        </div>
        <div class="sectionben">
          <i class="fas fa-landmark"></i>
          <p>Empresa consolidada no mercado carioca</p>
        </div>
      </div>
      <div class="columnben">
        <div class="sectionben">
          <i class="fas fa-wrench"></i>
          <p>Equipamentos e produtos de qualidade..</p>
        </div>
        <div class="sectionben">
          <i class="fas fa-user-friends"></i>
          <p>Atendimento rápido e excelente relacionamento com os clientes</p>
        </div>
      </div>
      <div class="columnben">
        <div class="sectionben">
          <i class="fas fa-check-circle"></i>
          <p>Melhor custo benefício para você e sua empresa</p>
        </div>
        <div class="sectionben">
          <i class="fas fa-check-circle"></i>
          <p>Preços e horários flexíveis de acordo com sua necessidade</p>
        </div>
      </div>
    </div>
  </div>








  <div class="feedback">
    <div class="item">
      <span class="number">10 mil</span>
      <span class="description">Clientes Atendidos</span>
    </div>
    <div class="item">
      <span class="number">27 mil</span>
      <span class="description">Serviços Realizados</span>
    </div>
    <div class="item">
      <span class="number">20 anos</span>
      <span class="description">De Experiência</span>
    </div>
    <div class="item">
      <span class="number">251</span>
      <span class="description">Colaboradores Cadastrados</span>
    </div>
  </div>

  <div class="services-container">
    <h1>Serviços</h1>
    <div class="services-grid">
      <div class="service-card">
        <div class="service-icon"></div>
        <h2>Serviços de Limpeza</h2>
        <p>Ambientes limpos, organizados e renovados</p>
        <a href="#" class="service-link">→</a>
      </div>
      <div class="service-card">
        <div class="service-icon"></div>
        <h2>Serviços de Manutenção</h2>
        <p>Ambientes limpos, organizados e renovados</p>
        <a href="#" class="service-link">→</a>
      </div>
      <div class="service-card">
        <div class="service-icon"></div>
        <h2>Serviços de Cuidados</h2>
        <p>Ambientes limpos, organizados e renovados</p>
        <a href="#" class="service-link">→</a>
      </div>
      <div class="service-card">
        <div class="service-icon"></div>
        <h2>Serviços de Cuidados</h2>
        <p>Ambientes limpos, organizados e renovados</p>
        <a href="#" class="service-link">→</a>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  background-color: #f3f3f3;
  width: 100%;
}

.main {
  margin-left: 9vw;
  margin-bottom: 1.5rem;
}

.main h2 {
  width: 20%;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.main p {
  width: 35%;
  font-size: 2rem;
  font-weight: 200;
}

.welcome-container {
  padding-top: 2vh;
  font-size: 1rem;
  font-weight: 300;
}

.imagem-home img {
  height: 600px;
  width: 600px;
  margin-bottom: 10px;
  display: flex;
}

.sobrenos {
  margin-bottom: 30vh;
}

.sobrenos h3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50vh;
  margin-bottom: 2vh;
  font-size: 2rem;
  font-weight: 600;
}

.sobrenos p {
  width: 80%;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 300;
  margin: 0 auto;
}

.forte {
  font-weight: 600;
}

.intera {
  display: flex;
  justify-content: center;
  gap: 7vw;
  background-color: white;
  padding: 18vh 7vw 18vh 7vw;

}

.left-side {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 1.5vw;
  margin-left: 10px;
}

.left-side h2 {
  color: var(--azul-royal-escuro);
  font-size: 2.5rem;
  font-weight: 700;
}

.left-side h4 {
  letter-spacing: 0.5rem;
  font-weight: 400;
  font-size: 1.5rem;
}

.right-side {
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 2vw;
  padding: 3vw;
}

.card {
  border-radius: 1vw;
  padding: 2vw;
  width: 20vw;
  height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  box-shadow: 14px 14px 27px #d7d7d7,
    -14px -14px 27px #f5f5f5;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.blue-card {
  background: linear-gradient(0deg, #0e96a5, #40E0D0);
  color: #fff;
}

.card-number {
  font-size: 2rem;
  font-weight: 700;
  color: teal;
}

.blue-card p {
  font-weight: 600;
  color: #fff;
}










.beneficios {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20vh 3vw 20vh 3vw;
  text-align: center;
  background-color: #f3f3f3;
}

.beneficios h2 {
  font-size: 2rem;
  letter-spacing: 0.4rem;
  font-weight: 400;
  margin-bottom: -1vh;
}

.beneficios h3 {
  font-size: 2.3rem;
  font-weight: 750;
  color: var(--azul-royal-escuro);
  margin-bottom: 4rem;
}

.rowben {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2vw;
  max-width: 1200px;
}

.columnben {
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5vw;
}

.sectionben {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  width: 100%;
  max-width: 100%;
}

.sectionben i {
  font-size: 20rem;
  margin-right: 4rem;
}

.sectionben p {
  font-size: 1.25rem;
  line-height: 1.5;
  text-align: left;
}












.feedback {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  background: linear-gradient(90deg, #16E7FE, #1DA8B8);
  color: white;
  padding: 20px;
}

.number {
  font-size: 3em;
  font-weight: bold;
}

.description {
  font-size: 0.8em;
}

.services-container {
  text-align: center;
  background-color: white;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2vw;
  padding: 2vw;
  justify-items: center;
}

.service-card {
  background-color: var(--azul-royal);
  color: #fff;
  border-radius: 1vw;
  padding: 1vw;
  transition: transform 0.3s ease;
  width: 30vw;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-link {
  color: black;
  text-decoration: none;
  font-weight: bold;
}

.titulo {
  font-size: 5rem;
  font-weight: 800;
}

a {
  margin-right: 1.5rem;
  color: #666;
  text-decoration: none;
}

button {
  text-decoration: none;
  border: none;
  background-color: #ffe0e000;
}

.cta-button {
  display: flex;
  align-items: center;
  background-color: rgb(199, 199, 199);
  color: rgb(0, 0, 0);
  padding: 0.5vw 0vw 0.5vw 1vw;
  border: none;
  font-weight: bolder;
  border-radius: 25px;
  cursor: pointer;
  width: 13vw;
  font-size: 1vw;
  transition: transform 0.3s ease;
}

.cta-button:hover {
  transform: scale(1.05);
}

.icon-left {
width: 10%;
margin-right: 0.2vw;
margin-bottom: 0.1vw
}

.small-text {
  font-size: 1vw;
  color: #020202;
  font-weight: 600;
}
</style>