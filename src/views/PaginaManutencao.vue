<script setup>
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };

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
          <p>
            Escolha entre os serviços de manutenção, como reparo de eletrodomésticos e conserto de
            encanamentos, e agende com facilidade.
          </p>
        </div>
        <div class="card">
          <p class="card-title">Orçamento imediato</p>
          <p>
            Receba seu orçamento na hora ao informar sua necessidade pelo formulário, sem esperas
            desnecessárias.
          </p>
        </div>
        <div class="card">
          <p class="card-title">Agendamento online</p>
          <p>
            Agende tudo pelo seu dispositivo e receba seu atendimento. Pagamento é realizado após a
            conclusão do serviço, garantindo total transparência e segurança.
          </p>
        </div>
  </div>

        <h2 class="subtitle">Hidráulica</h2>
        <div class="carousel-hidraulica">
            <swiper
    :slides-per-view="1"
    :space-between="40"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  > 
    <swiper-slide><img src="@/assets/imagens/limpeza1.jpg" alt="" > <p></p> </swiper-slide>
    <swiper-slide><img src="@/assets/imagens/Limpeza2.jpeg" alt=""> <p></p></swiper-slide>
    <swiper-slide><img src="@/assets/imagens/Limpeza3.jpeg" alt=""> <p></p></swiper-slide>
    <swiper-slide><img src="@/assets/imagens/Limpeza4.jpeg" alt=""><p></p></swiper-slide>
    <swiper-slide><img src="@/assets/imagens/Limpeza5.jpeg" alt=""><p></p></swiper-slide>
    <swiper-slide><img src="@/assets/imagens/Limpeza6.jpeg" alt=""><p></p></swiper-slide> 
 
  </swiper>
            </div>

            <button class="arrow right">&gt;</button>



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
}
.descripition {
  text-align: center;
  max-width: 600px;
  margin-bottom: 2rem;
}
.t2 {
  display: flex;
  width: 700px;
  font-size: 20px;
  margin-bottom: 2em;
  text-align: start;
}
.descricao {
  font-size: 2 rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #0f0e0e;
}

.cards-iniciais {
  display: flex;
  flex-wrap: wrap; /* Permite que os cards ocupem uma nova linha se a tela for menor */
  gap: 40px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 50px;
}

.card {
  flex: 1 1 300px; /* Garante que os cards ocupem no mínimo 300px e tenham tamanhos proporcionais */
  padding: 20px;
  border: 1px solid #ccc;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  max-width: 300px; /* Limite máximo de largura */
  height: 200px;
}

.card-title {
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  color: var(--azul-royal-escuro);
  margin-bottom: 10px;
}
.subtitle {
  font-size: 2rem;
  font-weight: bold;
  color: #2ab0bf;
}
.carousel-hidraulica img{
        width: 20vw;
         height: 
        25vh;

}
 .carousel{
        display: flex;
 }
 
.arrow {
    background: none;
    border: none;
    font-size: 2em;
    cursor: pointer;
}

.item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
    margin: 0 1em;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.item img {
    width: 100%;
    max-width: 300px;
    height: auto;
    object-fit: cover;
    margin-bottom: 1em;
}

.item h3 {
    margin-bottom: 0.5em;
}

.button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 0.5em 1em;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1em;
    margin-top: 1em;
    border-radius: 5px;
    cursor: pointer;
}
</style>
