<script setup>
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'
</script>
<template>
  <div class="container">
    <header>
      <Menu></Menu>
    </header>

    <div class="inicioPagina">
      <h1 class="title">Cuidados</h1>
      <p class="subtitle">Garanta conforto e segurança para quem você ama</p>
      <p class="text">
        Oferecemos cuidados personalizados para garantir conforto e segurança. Nossa equipe cuida de
        cada detalhe, permitindo que você tenha tranquilidade e confiança. Deixe seus entes queridos
        em boas mãos
      </p>
      <div class="cards">
        <div class="card">
          <h2 class="card-title">Equipe Multidisciplinar</h2>
          <hr />
          <p class="card-text">
            Profissionais qualificados em diversas áreas para abordar todas as necessidades de
            saúde.
          </p>
        </div>
        <div class="card">
          <h2 class="card-title">Avaliação Especializada</h2>
          <hr />
          <p class="card-text">
            Avaliação especializada no local, garantindo planos de cuidados personalizados e
            eficientes.
          </p>
        </div>
        <div class="card">
          <h2 class="card-title">Atendimento Consultivo</h2>
          <hr />
          <p class="card-text">
            Ouvimos suas necessidades, oferecendo orientações e soluções adaptadas para o bem-estar.
          </p>
        </div>
      </div>
    </div>

    <div class="cuidados">
      <h1 class="title-cuidados">Tipos de</h1>
      <h1 class="title-cuidadoss">Cuidados</h1>
      <div class="section">
        <div class="image-left">
          <img src="@/assets/imagens/cuidados1.jpeg" alt="Cuidados com Crianças" />
        </div>
        <div class="text-right">
          <h2>Cuidados com crianças</h2>
          <p>
            Nossa equipe oferece serviços de babá que garantem que seus filhos estejam seguros, bem
            cuidados e felizes enquanto você estiver fora.
          </p>
        </div>
      </div>

      <div class="section">
        <div class="text-left">
          <h2>Cuidados com idosos</h2>
          <p>
            Conforto e segurança para idosos, promovendo qualidade de vida e independência com uma
            equipe experiente.
          </p>
        </div>
        <div class="image-right">
          <img src="@/assets/imagens/cuidados2.jpg" alt="Cuidados com Idosos" />
        </div>
      </div>
      <div class="section">
        <div class="image-left">
          <img src="@/assets/imagens/cuidados3.jpeg" alt="Cuidados com Crianças" />
        </div>
        <div class="text-right">
          <h2>Cuidados pós-operatórios</h2>
          <p>
            Apoio especializado para uma recuperação segura, com acompanhamento cuidadoso em cada
            etapa do processo.
          </p>
        </div>
      </div>

      <div class="servicos-cuidados">
        <h1>Nossos Serviços de Cuidado</h1>
        <p>
          Nossa empresa oferece um conjunto único de soluções personalizadas para ajudar a alcançar
          seus objetivos e proporcionar resultados positivos.
        </p>
        <div class="services">
          <div class="service-box">
            <div class="circle"></div>
            <h2>Companhia e Assistência Domiciliar</h2>
            <ul>
              <li>
                Oferecemos companhia para garantir que seus entes queridos nunca se sintam sozinhos.
              </li>
              <li>Preparação de Refeições: Preparamos refeições nutritivas e saborosas.</li>
              <li>Compras: Ajudamos com as compras do dia a dia.</li>
              <li>
                Transporte: Oferecemos transporte para consultas médicas e outras necessidades.
              </li>
            </ul>
          </div>
          <div class="service-box">
            <div class="circle circle-right"></div>
            <h2>Cuidados Pessoais e Profissionais</h2>
            <ul>
              <li>Vestir e Higiene Pessoal: Ajuda com vestir-se e cuidados de higiene.</li>
              <li>Banho: Assistência com o banho para garantir higiene e conforto.</li>
              <li>
                Mobilidade: Assistência com a mobilidade para prevenir quedas e garantir segurança.
              </li>
              <li>Lembretes de Medicação: Garantimos que as medicações sejam tomadas corretas.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<style scoped>
.inicioPagina {
  background-color: #efefef;
  padding: 3rem 3rem;
}

.servicos-cuidados {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 10vw;
}

.servicos-cuidados h1 {
  font-size: 2em;
  color: var(--azul-royal-escuro);
  font-weight: 600;
}

.servicos-cuidados p {
  font-size: 1.2rem;
  color: #000000;
  margin-bottom: 20px;
  margin-top: 20px;
}
.services {
  display: flex;
  justify-content: space-between;
  gap: 2.5rem;
  align-items: flex-start;
}

.service-box {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 50px;
  width: 80%;
  position: relative;
  margin-top: 3rem;
  margin-bottom: 4rem;
}

.service-box h2 {
  font-size: 1.5em;
  color: var(--azul-royal-escuro);
  margin-bottom: 20px;
}
.service-box ul {
  list-style: none;
  padding: 0;
  text-align: left;
}

.service-box ul li {
  font-size: 0.9em;
  color: #000000;
  margin-bottom: 10px;
  display: flex;
  align-items: flex-start;
}

.service-box ul li::before {
  content: '•';
  color: #000000;
  font-size: 1.2em;
  margin-right: 10px;
}
.circle {
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: #00a99d;
  border-radius: 50%;
  top: -50px;
  left: -50px;
  z-index: -1;
}
.circle-right {
  top: auto;
  bottom: -50px;
  left: auto;
  right: -50px;
}

.section {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: center;
  padding-bottom: 30px;
  gap: 0.5rem;
}

.image-left,
.image-right {
  width: 30vw;
}

.image-left img,
.image-right img {
  width: 80%;
  height: auto;
  border-radius: 25px;
}

.text-left {
  width: 40vw;
  padding: 20px;
  padding-left: 270px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.text-right {
  width: 40vw;
  padding: 20px;
  padding-right: 270px;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  justify-content: center;
}

.text-right h2,
.text-left h2 {
  color: var(--azul-royal-escuro);
  font-weight: 600;
  margin-bottom: 15px;
  font-size: 1.6rem;
  letter-spacing: 3px;
}

.text-right p {
  font-size: 1rem;
  color: #000000;
  line-height: 1.6;
}
.text-left p {
  font-size: 1rem;
  color: #000000;
  line-height: 1.6;
  width: 90%;
  display: flex;
}

.section img {
  object-fit: cover;
}

@media screen and (max-width: 768px) {
  .section {
    flex-direction: column;
  }

  .image-left,
  .image-right,
  .text-right,
  .text-left {
    width: 100%;
  }
}

.title-cuidados {
  margin-top: 3.2rem;
  font-size: 2.5rem;
  font-weight: 550;
  justify-content: center;
  display: flex;
  color: var(--azul-royal-escuro);
}
.title-cuidadoss {
  font-size: 33px;
  font-weight: 420;
  justify-content: center;
  display: flex;
  color: var(--azul-royal-escuro);
  letter-spacing: 6px;
  margin-bottom: 3em;
}

.title-card {
  font-weight: bold;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.p-card {
  color: #ffffff;
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  width: 30%;
}

.p-tamanho {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #f7f7f7;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  padding-top: 15vh;
}

.subtitle {
  font-size: 1.5rem;
  color: #000000;
  margin-bottom: 20px;
  justify-content: center;
  display: flex;
}

.text {
  color: #000000;
  margin: 0 auto ;
  width: 60%;
  display: flex;
  font-size: 1.2rem;
  text-align: center;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 80px;
}

.card {
  margin: 20px;
  padding: 20px;
  width: 300px;
  height: 180px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 1.5vw;
  color: rgb(0, 0, 0);
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #107f8b;
}

.card-text {
  font-size: 1rem;
  color: #000000;
  margin-top: 1vw;
}

.card hr {
  color: white;
}
</style>
