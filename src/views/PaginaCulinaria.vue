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
        <span class="icon-verificado preto">✔</span>
        Chefs cuidadosamente selecionados.
      </p>
      <p>
        <span class="icon-verificado preto">✔</span>
        Garantia de refeição impecável.
      </p>
      <p>
        <span class="icon-verificado preto">✔</span>
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
        <span class="icon-verificado preto">✔</span>
        Equipe disponível a todo momento.
      </p>
      <p>
        <span class="icon-verificado preto">✔</span>
        Comunicação rápida e eficaz para imprevistos.
      </p>
      <p>
        <span class="icon-verificado preto">✔</span>
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
.inicioPagina {
  background-color: #f0f0f0;
  padding: 2rem 1rem;
}

.titulo,
.subtitulo,
.texto-inicio {
  text-align: center;
  margin-bottom: 1rem;
}

.titulo {
  font-weight: 600;
  font-size: 2.5rem;
  padding-top: 4rem;
}

.subtitulo {
  font-size: 1.5rem;
}

.texto-inicio {
  font-size: 1rem;
  max-width: 800px;
  margin: 0 auto 2rem;
}

.cards-iniciais {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
  padding-bottom: 4rem;
}

.card {
  flex: 1;
  min-width: 250px;
  max-width: 350px;
  padding: 1.5rem;
  background-color: white;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.titulo-card {
  text-align: center;
  font-weight: 600;
  font-size: 1.5rem;
  color: var(--azul-royal);
  margin-bottom: 1rem;
}

.card p {
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.card-middle {
  background-color: var(--azul-royal);
  color: white;
}

.card-middle .titulo-card {
  color: white;
}

.icon-verificado {
  font-size: 1.2rem;
}

.icon-verificado.preto {
  color: black;
}

.icon-verificado.branco {
  color: white;
}

.how-it-works {
  margin: 1rem auto 4rem auto;
  background-color: white;
}

.how-it-works .titulo {
  color: var(--azul-royal-escuro);
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.how-it-works-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.card-grid {
  padding: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-grid:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.card-grid h3 {
  font-weight: bold;
  color: var(--azul-royal-escuro);
  font-size: 1.2rem;
}

.card-grid p {
  font-size: 1rem;
}

.culinary-services {
  text-align: center;
  padding: 2rem 1rem;
  background-color: #f0f0f0;
}

.culinary-services h2 {
  font-size: 2.5rem;
  font-weight: 550;
  margin: 1rem auto 2rem auto;
  color: var(--azul-royal-escuro);
}

.culinary-services h2 span {
  display: block;
  font-size: 2rem;
}

.services-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

.service {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 100%;
}

.service img {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
}

.service-text {
  text-align: center;
}

.service h3 {
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--azul-royal-escuro);
  margin-bottom: 1rem;
}

.service p {
  font-size: 1rem;
  line-height: 1.5;
}

@media (min-width: 768px) {
  .titulo {
    font-size: 3rem;
  }

  .subtitulo {
    font-size: 1.8rem;
  }

  .texto-inicio {
    font-size: 1.1rem;
  }

  .card {
    padding: 2rem;
  }

  .titulo-card {
    font-size: 1.8rem;
  }

  .card p {
    font-size: 1.1rem;
  }

  .how-it-works .titulo {
    font-size: 3rem;
  }

  .card-grid h3 {
    font-size: 1.5rem;
  }

  .card-grid p {
    font-size: 1.1rem;
  }

  .culinary-services h2 {
    font-size: 3rem;
  }

  .culinary-services h2 span {
    font-size: 2.5rem;
  }

  .service {
    flex-direction: row;
    align-items: center;
    text-align: left;
    padding: 3rem;
  }

  .service img {
    width: 50%;
    margin-bottom: 0;
    margin-right: 2rem;
  }

  .service-text {
    width: 50%;
    text-align: left;
  }

  .reverse {
    flex-direction: row-reverse;
  }

  .reverse img {
    margin-right: 0;
    margin-left: 2rem;
  }
}

@media (min-width: 1024px) {
  .titulo {
    font-size: 3.5rem;
  }

  .subtitulo {
    font-size: 2rem;
  }

  .texto-inicio {
    font-size: 1.2rem;
  }

  .card p {
    font-size: 1.2rem;
  }

  .how-it-works .titulo {
    font-size: 3.5rem;
  }

  .card-grid h3 {
    font-size: 1.8rem;
  }

  .card-grid p {
    font-size: 1.2rem;
  }

  .culinary-services h2 {
    font-size: 3.5rem;
  }

  .culinary-services h2 span {
    font-size: 3rem;
  }

  .service h3 {
    font-size: 2.2rem;
  }

  .service p {
    font-size: 1.2rem;
  }
}
</style>