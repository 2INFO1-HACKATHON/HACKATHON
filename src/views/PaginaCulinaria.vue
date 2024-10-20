<script setup>
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <Menu></Menu>
  <section class="services-section">
    <div class="service-details">
      <div class="detail-card">
        <h3>Qualidade Garantida</h3>
        <p>Serviços personalizados que atendem às necessidades dos clientes com eficiência.</p>
      </div>
      <div class="detail-card">
        <h3>Serviço Personalizado</h3>
        <p>Adapte as suas escolhas conforme suas necessidades e preferências.</p>
      </div>
      <div class="detail-card">
        <h3>Suporte 24/7</h3>
        <p>Assistência total, em qualquer momento do dia ou da noite.</p>
      </div>
    </div>

    <section class="how-it-works">
      <h2>Como Funciona?</h2>
      <div class="right-side">
        <div class="card">
          <p class="card-number">01.</p>
          <p>Personalize seu pedido com opções que melhor atendem ao que você precisa.</p>
        </div>
        <div class="card">
          <p class="card-number">02.</p>
          <p>Receba propostas com base nas suas escolhas e necessidades.</p>
        </div>
        <div class="card">
          <p class="card-number">03.</p>
          <p>
            Reserve sua experiência no melhor horário para você e receba um serviço de qualidade.
          </p>
        </div>
        <div class="card blue-card">
          <p class="card-number">04.</p>
          <p>
            Avalie a execução do serviço e aproveite nossos profissionais altamente qualificados.
          </p>
        </div>
      </div>
    </section>
  </section>
  <Footer></Footer>
</template>

<style scoped>
.services-section {
  background-color: #f5f5f5;
  padding: 20px;
}

h3 {
  color: var(--azul-royal-escuro);
  margin-bottom: 10px;
}

.service-details {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  align-items: center;
}

.detail-card {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  color: rgb(0, 0, 0);
  flex: 1;
  margin: 0 10px;
  text-align: center;
}

.how-it-works h2 {
  text-align: center;
  color: #00626d;
  margin-bottom: 20px;
}

.right-side {
  display: grid;
  grid-template-columns: 2fr 2fr;
  gap: 40px;
}

.card {
  border: 1px solid #ccc;
  padding: 35px;
  border-radius: 10px;
  text-align: center;
}

.card-number {
  font-size: 24px;
  font-weight: bold;
  color: teal;
  margin-bottom: 10px;
}
</style>
