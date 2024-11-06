<script setup>
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'


  
    

</script>
<template>
  <header>
    <Menu></Menu>
  </header>
  <div class="container">
    <h1 class="title">Manutenção</h1>

    <h2 class="descricao">Soluções precisas para um lar perfeito.</h2>

    <div class="description">
      <p class="t2">
        Oferecemos soluções completas para a manutenção da sua casa, garantindo que tudo funcione
        perfeitamente. Nossa equipe especializada resolve diversos problemas com agilidade e
        segurança, cuidando de cada detalhe para um ambiente seguro e funcional.
      </p>
    </div>

      <div class="cards-iniciais">
        <div class="card">
          <p class="card-title">O que você precisa hoje?</p>
          <div class="line-cards"></div>
          <p>
            Escolha entre os serviços de manutenção, como reparo de eletrodomésticos e conserto de
            encanamentos, e agende com facilidade.
          </p>
        </div>
        <div class="card">
          <p class="card-title">Orçamento imediato</p>
          <div class="line-cards"></div>
          <p>
            Receba seu orçamento na hora ao informar sua necessidade pelo formulário, sem esperas
            desnecessárias.
          </p>
        </div>
        <div class="card">
          <p class="card-title">Agendamento online</p>
          <div class="line-cards"></div>
          <p>
            Agende tudo pelo seu dispositivo e receba seu atendimento. Pagamento é realizado após a
            conclusão do serviço, garantindo total transparência e segurança.
          </p>
        </div>
  </div>

        <h2 class="subtitle">Hidráulica</h2>

<section>
  <swiper>

  </swiper>


</section>
      
  <h2 class="subtitle">Elétrica</h2>

  </div>

  <div class="descricao-clientes">
    <div class="text-content">
      <div class="line"></div>
      <h2>O que nossos clientes dizem</h2>
      <p>
        Todos esses depoimentos são fruto de muita dedicação, carinho e
        empenho do nosso time de profissionais.
      </p>
    </div>
    <img  class="avaliacao" src="../assets/imagens/manutencao1.jpeg" alt="Imagem de avaliação dos clientes">
  </div>

  <Footer></Footer>
</template>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f7f6f6;
}
.title {
  font-size: 3em;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #000000;
  text-align: center;
}

.t2 {
  display: flex;
  width: 700px;
  font-size: 20px;
  margin-bottom: 2em;
  text-align: center;
}
.descricao {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color: #0f0e0e;
}

.cards-iniciais {
  display: flex;
  flex-wrap: wrap;
  gap: 70px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 50px;
}

.card {
  flex: 1 1 300px;
  padding: 20px;
  border: 1px solid #ccc;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  min-width: 250px;
  width: 100%;
  height: 200px;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
}

.card-title {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: var(--azul-royal-escuro);
  margin-bottom: 10px;
}
.line-cards{
  width: 250px;
  height: 1px;
  background-color: #292929;
  margin-bottom: 1rem;
}
.subtitle {
  font-size: 2rem;
  font-weight: bold;
  color: #2ab0bf;
}
.descricao-clientes {
  background-color: #29b6c5; /* Fundo azul */
  padding: 4rem;
  color: #ffffff;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.avaliacao {
width: 230px;
height: auto;
display: flex;
margin-left: 2rem;
}

.text-content {
  max-width: 200px;
}

.line {
  width: 200px;
  height: 2px;
  background-color: #ffffff;
  margin-bottom: 1em;
}

.text-content h2 {
  font-size: 1.8em;
  font-weight: bold;
  margin: 0.7em 0;
}

.text-content p {
  font-size: 1em;
  line-height:1.6;
  display: flex;
  align-items: flex-start;
}

</style>
