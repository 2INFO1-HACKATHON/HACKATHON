<script setup>
import Menu from '@/components/Menu.vue';
import Footer from '@/components/Footer.vue';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
userStore.loadUser();
</script>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <div class="container">
    <header>
      <div class="menu">
        <Menu></Menu>
      </div>
    </header>

    <div class="main">
      <h1 class="titulo">FixTudo</h1>
      <h2>Sua casa em boas mãos</h2>
      <p>Manutenção e cuidado com carinho</p>
      <div class="welcome-container">
        <h1 v-if="userStore.user">
          Boas-vindas, {{ userStore.user.name.charAt(0).toUpperCase() + userStore.user.name.slice(1).toLowerCase() }}!
        </h1>
      </div>
    </div>
    <div class="imagem-home">
      <img src="../assets/imagens/imagemhome.png" alt="">
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
        <p class="orcamento">Solicitar Orçamento</p>
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
          <i class="fas fa-user-check"></i>
          <p>Profissionais treinados e supervisionados</p>
        </div>
        <div class="sectionben">
          <i class="fas fa-building"></i>
          <p>Empresa consolidada no mercado carioca</p>
        </div>
      </div>
      <div class="columnben">
        <div class="sectionben">
          <i class="fas fa-cogs"></i>
          <p>Equipamentos e produtos de qualidade</p>
        </div>
        <div class="sectionben">
          <i class="fas fa-handshake"></i>
          <p>Atendimento rápido e excelente relacionamento com os clientes</p>
        </div>
      </div>
      <div class="columnben">
        <div class="sectionben">
          <i class="fas fa-tags"></i>
          <p>Melhor custo-benefício para você e sua empresa</p>
        </div>
        <div class="sectionben">
          <i class="fas fa-calendar-alt"></i>
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
    <div class="services-grid">
      <router-link to="/Paginalimpeza" class="service-card">
        <div class="service-icon">
          <img src="../assets/imagens/limpeza1.jpg" alt="">
        </div>
        <h2>Serviços de Limpeza</h2>
        <p>Deixe seu ambiente mais limpo e agradável com nossos serviços especializados.</p>
      </router-link>

      <router-link to="/PaginaManutencao" class="service-card">
        <div class="service-icon">
          <img src="../assets/imagens/manutencao2.jpeg" alt="">
        </div>
        <h2>Serviços de Manutenção</h2>
        <p>Garantimos a manutenção ideal para manter seu espaço sempre funcional.</p>
      </router-link>

      <router-link to="/PaginaCuidados" class="service-card">
        <div class="service-icon">
          <img src="../assets/imagens/cuidados2.jpg" alt="">
        </div>
        <h2>Serviços de Cuidados</h2>
        <p>Cuidamos de quem você ama, oferecendo apoio e bem-estar para idosos e pessoas necessitadas.</p>
      </router-link>

      <router-link to="/PaginaCulinaria" class="service-card">
        <div class="service-icon">
          <img src="../assets/imagens/culinaria2.jpg" alt="">
        </div>
        <h2>Serviços de Culinária</h2>
        <p>Transforme seu espaço com receitas deliciosas e cheias de sabor.</p>
      </router-link>
    </div>
  </div>
  <Footer></Footer>
</template>

<style scoped>
.imagem-home {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 100;
}

header {
  margin-bottom: 13vw
}

.menu {
  position: absolute;
  top: 0;
  z-index: 99;
}

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
  margin-bottom: 5vh;
  margin-top: -20vw;

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
  margin: 0 auto 5vh;
}

.forte {
  font-weight: 600;
}

.intera {
  display: flex;
  justify-content: center;
  gap: 7vw;
  background-color: white;
  padding: 7vh 7vw;
}

.orcamento {
  font-weight: 650;
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

.sectionben {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 2vw;
  width: 100%;
  border-radius: 1rem;
  text-align: left;
}

.sectionben i {
  font-size: 5vw;
  color: var(--azul-royal-escuro);
  margin-right: 1rem;
}

.sectionben p {
  font-size: 1.5rem;
  line-height: 1.5;
  margin: 0;
  color: #333;
  text-align: left;
  max-width: 80%;
  margin-left: 0;
  height: 100%;
  display: flex;
  align-items: flex-start;
}

.beneficios {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10vh 5vw;
  text-align: center;
  background-color: #f3f3f3;
}

.beneficios h2 {
  font-size: 2.5rem;
  letter-spacing: 0.4rem;
  font-weight: 400;
  margin-bottom: 2vh;
}

.beneficios h3 {
  font-size: 2.5rem;
  font-weight: 750;
  color: var(--azul-royal-escuro);
  margin-bottom: 4vh;
}

.rowben {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3vw;
  max-width: 1200px;
}

.columnben {
  flex: 1;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vw;
}

.feedback {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  background: linear-gradient(90deg, #16E7FE, #1DA8B8);
  color: white;
  padding: 2.5vw;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.number {
  font-size: 3em;
  font-weight: bold;
}

.description {
  font-size: 0.8em;
}

.services-container {
  padding: 9vw 4vw;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5vw;
  margin-top: 2vh;
  justify-items: center;
  align-items: center;
}

.service-card {
  position: relative;
  overflow: hidden;
  border-radius: 1vw;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: white;
  padding: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: start;
  background-size: cover;
  background-position: center;
  height: 40vh;
  width: 25vw;
  aspect-ratio: 3 / 4;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.service-card:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.service-card:nth-child(1) {
  background-image: url("../assets/imagens/limpeza1.jpg");
}

.service-card:nth-child(2) {
  background-image: url("../assets/imagens/manutencao2.jpeg");
}

.service-card:nth-child(3) {
  background-image: url("../assets/imagens/cuidados2.jpg");
}

.service-card:nth-child(4) {
  background-image: url("../assets/imagens/culinaria2.jpg");
}

.service-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, var(--azul-royal) 8%, rgba(24, 172, 152, 0.425) 90%);
  z-index: 1;
}

.service-card h2,
.service-card p {
  position: relative;
  z-index: 1;
}

.service-card h2 {
  font-size: 1.7rem;
  font-weight: 700;
  color: white;
  margin: 0.5vw 0 0.2vw;
}

.service-card p {
  margin: 0;
  color: white;
  font-size: 0.9rem;
  padding-bottom: 1vw;
}

.service-icon {
  display: none;
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
  padding: 0.5vw 1vw 0.5vw 1vw;
  border: none;
  border-radius: 5vw;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.cta-button:hover {
  transform: scale(1.05);
}

.small-text {
  font-size: 1vw;
  color: #020202;
  font-weight: 600;
}
</style>