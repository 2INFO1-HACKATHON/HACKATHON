<script setup>
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>

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
  </div>

  <section class="cards-iniciais">
    <div class="card">
      <h1 class="titulo-card">Qualidade Garantida</h1>
      <p>Chefs cuidadosamente selecionados.</p>
      <p>Garantia de refeição impecável.</p>
      <p>Foco na qualidade dos ingredientes e na apresentação.</p>
    </div>
    <div class="card">
      <h1 class="titulo-card">Serviço Personalizado</h1>
      <p>Serviço adaptado para diferentes tipos de eventos.</p>
      <p>Menus criados sob medida para cada preferência.</p>
      <p>Flexibilidade no horário e local de atendimento.</p>
    </div>
    <div class="card">
      <h1 class="titulo-card">Suporte 24/7</h1>
      <p>Equipe disponível a todo momento</p>
      <p>Comunicação rápida e eficaz para imprevistos.</p>
      <p>Acompanhamento completo, desde a reserva até o final do evento.</p>
    </div>
  </section>

  <section class="how-it-works">
    <h1 class="titulo">Como Funciona?</h1>
    <div class="how-it-works-grid">
      <div class="card-grid">
        <p class="card-number">01. Personalize seu Pedido</p>
        <p>
          Partilhe conosco os detalhes da refeição dos seus sonhos, incluindo tipo de cozinha,
          preferências e intolerâncias.
        </p>
      </div>
      <div class="card-grid">
        <p class="card-number">02. Receba propostas de cardápio</p>
        <p>Nossos chefs criarão menus baseados exclusivamente em seus desejos e necessidades.</p>
      </div>
      <div class="card-grid">
        <p class="card-number">03. Reserve sua experiência</p>
        <p>
          Quando estiver satisfeito com sua escolha, envie seu pagamento para garantir sua
          experiência.
        </p>
      </div>
      <div class="card-grid">
        <p class="card-number">04. Execução e Avaliação</p>
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
        <img src="../assets/imagens/culinaria1.jpg" alt="" />
        <div class="service-text">
          <h3>Chef de Festa</h3>
          <p>
            Garanta pratos sofisticados em sua celebração com um chef dedicado, criando menus
            personalizados para seus convidados.
          </p>
        </div>
      </div>
      <div class="service">
        <img src="../assets/imagens/culinaria1.jpg" alt="" />
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

/*INÍCIO*/

.cinza{
  background-color: var(--cinza);
}

.titulo,
.subtitulo,
.texto-inicio {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 5px;
}

.titulo {
  font-weight: 500;
  font-size: 28px;
}

.texto-inicio {
  display: flex;
  width: 80%;
  font-size: 20px;
  margin-bottom: 2em;
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
  gap: 60px;
  justify-content: center;
  align-items: stretch;
  margin-bottom: 50px;
  margin-top: 50px;
}

.titulo-card {
  text-align: center;
  font-weight: 550;
}

.card {
  flex: 1;
  padding: 20px;
  border: 1px solid #ccc;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 400px;
  height: 240px;
}

/* COMO FUNCIONA*/

.how-it-works h1{
  color: var(--azul-royal-escuro);
}
.how-it-works-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  justify-content: center;
  max-width: 74%;
  margin: 0 auto
}

.card-grid {
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 2rem;
}

.card-number {
  font-size: 22px;
  font-weight: bold;
  color: var(--azul-royal-escuro);
  margin-bottom: 10px;
}

/*SERVIÇOS DE CULINÁRIA*/

.culinary-services {
  text-align: center;
  margin: 50px 0;
}

.culinary-services h2 {
  font-size: 28px;
  margin-bottom: 2rem;
  color: var(--azul-royal-escuro);
}

.services-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
}

.service {
  display: flex;
  max-width: 80%;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.service img {
  width: 200px;
  height: auto;
  border-radius: 10px;
  margin-right: 20px;
}

.service-text {
  text-align: left;
}

.service h3 {
  font-size: 1.5rem;
  color: var(--azul-royal-escuro);
  margin-bottom: 10px;
}

.service p {
  font-size: 1rem;
  line-height: 1.5;
}

.reverse {
  flex-direction: row-reverse;
}

.reverse img {
  margin-right: 0;
  margin-left: 20px;
}

</style>
