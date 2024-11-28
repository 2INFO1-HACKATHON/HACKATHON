<script setup>
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
   <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  />

  <Menu></Menu>

  <div class="inicioPagina">
    <h1 class="titulo">Culinária</h1>
    <h2 class="subtitulo">Sabores exclusivos para cada ocasião</h2>
    <div class="t1">
      <p class="texto-inicio">
        Oferecemos serviços personalizados de chefs para eventos especiais, garantindo pratos de
        alta qualidade e experiência gastronômica única. Nossa equipe cuida de cada detalhe,
        proporcionando uma refeição inesquecível para você e seus convidados.
      </p>
    </div>


    <section class="cards-iniciais">
    <!-- Card 1 -->
    <div class="card">
      <h1 class="titulo-card">Qualidade Garantida</h1>
      <p>
        <span class="icon-verificado verde">✔</span>
        Chefs cuidadosamente selecionados.
      </p>
      <p>
        <span class="icon-verificado verde">✔</span>
        Garantia de refeição impecável.
      </p>
      <p>
        <span class="icon-verificado verde">✔</span>
        Foco na qualidade dos ingredientes e na apresentação.
      </p>
    </div>
    <!-- Card 2 -->
    <div class="card card-middle">
      <h1 class="titulo-card">Serviço Personalizado</h1>
      <p>
        <span class="icon-verificado branco">✔</span>
        Serviço adaptado para diferentes tipos de eventos.
      </p>
      <p>
        <span class="icon-verificado branco">✔</span>
        Menus criados sob medida para cada preferência.
      </p>
      <p>
        <span class="icon-verificado branco">✔</span>
        Flexibilidade no horário e local de atendimento.
      </p>
    </div>
    <!-- Card 3 -->
    <div class="card">
      <h1 class="titulo-card">Suporte 24/7</h1>
      <p>
        <span class="icon-verificado verde">✔</span>
        Equipe disponível a todo momento.
      </p>
      <p>
        <span class="icon-verificado verde">✔</span>
        Comunicação rápida e eficaz para imprevistos.
      </p>
      <p>
        <span class="icon-verificado verde">✔</span>
        Acompanhamento completo, desde a reserva até o final do evento.
      </p>
    </div>
  </section>
  </div>

  <section class="how-it-works">
    <h1 class="titulo">Como Funciona?</h1>
    <div class="how-it-works-grid">
      <div class="card-grid">
        <h2>01. Personalize seu Pedido</h2>
        <p>
          Partilhe conosco os detalhes da refeição dos seus sonhos, incluindo tipo de cozinha,
          preferências e intolerâncias.
        </p>
      </div>
      <div class="card-grid">
        <h2>02. Receba propostas de cardápio</h2>
        <p>Nossos chefs criarão menus baseados exclusivamente em seus desejos e necessidades.</p>
      </div>
      <div class="card-grid">
        <h2>03. Reserve sua experiência</h2>
        <p>
          Quando estiver satisfeito com sua escolha, envie seu pagamento para garantir sua
          experiência.
        </p>
      </div>
      <div class="card-grid">
        <h2>04. Execução e Avaliação</h2>
        <p>
          O chef realiza o serviço no dia do evento. Após a conclusão, você avalia a experiência e
          fornece feedback.
        </p>
      </div>
    </div>
  </section>

  <section class="culinary-services">
    <h2>Serviços de <span>Culinária</span></h2>
    <div class="services-container">
      <div class="service">
        <img src="../assets/imagens/culinaria1.jpg" alt="" />
        <div class="service-text">
          <h3>Personal Chef</h3>
          <p>
            Tenha refeições personalizadas no conforto do seu lar, com menus exclusivos preparados
            por um chef particular, garantindo uma experiência gastronômica única.
          </p>
        </div>
      </div>
      <div class="service reverse">
        <img src="../assets/imagens/culinaria2.jpg" alt="" />
        <div class="service-text">
          <h3>Chef de Festa</h3>
          <p>
            Garanta pratos sofisticados em sua celebração com um chef dedicado, criando menus
            personalizados para seus convidados.
          </p>
        </div>
      </div>
      <div class="service">
        <img src="../assets/imagens/culinaria3.jpg" alt="" />
        <div class="service-text">
          <h3>Chefs Nutricionistas</h3>
          <p>
            Desfrute de refeições saudáveis e equilibradas, preparadas por um chef especializado,
            com menus adaptados às suas necessidades alimentares.
          </p>
        </div>
      </div>
    </div>
  </section>

  <Footer></Footer>
</template>

<style scoped>
.cinza {
  background-color: var(--cinza);
}

.inicioPagina {
  background-color: #F0F0F0;
}

.titulo,
.subtitulo,
.texto-inicio {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0.6vw;
}

.titulo {
  font-weight: 600;
  font-size: 3.5vw;
  padding-top: 15vh;
}

.texto-inicio {
  width: 70%;
  font-size: 1.8vw;
  margin-bottom: 5vh;
  text-align: center;
}

.t1 {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cards-iniciais {
  display: flex;
  gap: 3vw;
  justify-content: center;
  align-items: stretch;
  margin-top: 3vh;
  padding-bottom: 15vh;
}

.titulo-card {
  text-align: center;
  font-weight: 600;
  font-size: 2vw;
  color: var(--azul-royal);
}

.card {
  flex: 1;
  padding: 2vw;
  background-color: white;
  border-radius: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 25vw;
  height: 40vh;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: scale(1.02);
  box-shadow: 0px 1vw 3vw rgba(0, 0, 0, 0.09);
}

.card p {
  font-size: 1.2vw;
  display: flex;
  align-items: center;
  gap: 0.3vw;
}

.card-middle {
  background-color: var(--azul-royal);
  color: white;
}

.card-middle .titulo-card {
  color: white;
}

.icon-verificado {
  font-size: 1.3vw;
  width: 10%;
}

.icon-verificado.verde {
  color: black;
}

.icon-verificado.branco {
  color: white;
}

.how-it-works h1 {
  color: var(--azul-royal-escuro);
  padding-top: 8vh;
  font-size: 3vw;
  padding-bottom: 3vh;
}

.how-it-works h2 {
  font-weight: bold;
  color: var(--azul-royal-escuro);
  margin-bottom: 2vh;
  font-size: 2vw;
}

.how-it-works p {
  font-size: 1rem;
}

.how-it-works-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2vw;
  justify-content: center;
  max-width: 80%;
  margin: 0 auto;
}

.card-grid {
  padding: 2vw;
  border: 1px solid #ccc;
  border-radius: 1vw;
  margin: 3vh;
}

.culinary-services {
  text-align: center;
  margin: 15vh 0;
}

.culinary-services h2, span {
  font-size: 3vw;
  font-weight: 550;
  margin-bottom: 4vh;
  width: 100%;
  text-align: center;
  color: var(--azul-royal-escuro);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.services-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5vw;
}

.service {
  display: flex;
  max-width: 80%;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 2vw;
  box-shadow: 0px 0.5vw 2vw rgba(0, 0, 0, 0.1);
  padding: 3vw;
}

.service img {
  width: 30vw;
  height: auto;
  border-radius: 1vw;
  margin-right: 3vw;
}

.service-text {
  text-align: left;
}

.service h3 {
  font-size: 2.5vw;
  font-weight: 600;
  color: var(--azul-royal-escuro);
  margin-bottom: 2vh;
}

.service p {
  font-size: 2vw;
  line-height: 1.5;
}

.reverse {
  flex-direction: row-reverse;
}

.reverse img {
  margin-right: 0;
  margin-left: 3vw;
}
</style>