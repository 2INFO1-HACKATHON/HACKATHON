<script setup>
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectCoverflow, Navigation, Keyboard } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/keyboard'
import 'swiper/css/bundle'
import 'swiper/css/autoplay'
const modules = [Navigation, EffectCoverflow, Keyboard, Autoplay]


const onSwiper = (swiper) => {
  console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}

</script>
<template>
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

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

<section class="secao">
  <Swiper
  :modules="modules"
        :slidesPerView="auto"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :grabCursor="true"
        :centeredSlides="true"
        :loop="true"
        :cssMode="true"
       
        @autoplay="true"
        :autoplay="{
          delay:3900,
          disableOnInteraction:true,
        }"
        :coverflowEffect="{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
          slideShadows: true
        }"
        :navigation="true"
        :keyboard="{
          enabled: true
        }"
        :mousewheel="true"
        :pagination="{
          clickable: true
        }"
>
  <SwiperSlide>
         
         <img src="../assets/imagens/manutencao2.jpeg" alt="" />
         <div class="texto-carrosel">
           <h3>Troca de encanamento</h3>
           <p>
                Oferecemos serviços rápidos e eficientes para a troca de encanamento, garantindo novos tubos e conexões de alta qualidade
           </p>
         </div>
  </SwiperSlide>


  <SwiperSlide>
         
         <img src="../assets/imagens/manutencao4.jpeg" alt="" />
         <div class="texto-carrosel">
           <h3>Instalação de chuveiro</h3>
           <p>
                Oferecemos instalação profissional de chuveiros, garantindo um ajuste seguro e eficiente.
           </p>
         </div>
  </SwiperSlide>


  <SwiperSlide>
         
         <img src="../assets/imagens/manutencao3.jpeg" alt="" />
         <div class="texto-carrosel">
           <h3>Troca de resistência</h3>
           <p>
                Realizamos a troca de resistência com precisão e cuidado, assegurando uma instalação correta que prolonga a vida útil do equipamento e mantém seu funcionamento seguro e eficiente.
           </p>
         </div>
      </SwiperSlide>
    </Swiper>
</section>
      
  <h2 class="subtitle">Elétrica</h2>
  <section class="secao">
  <Swiper
  :modules="modules"
        :slidesPerView="auto"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :grabCursor="true"
        :centeredSlides="true"
        :loop="true"
        :cssMode="true"
       
        @autoplay="true"
        :autoplay="{
          delay:3900,
          disableOnInteraction:true,
        }"
        :coverflowEffect="{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
          slideShadows: true
        }"
        :navigation="true"
        :keyboard="{
          enabled: true
        }"
        :mousewheel="true"
        :pagination="{
          clickable: true
        }"
>
  <SwiperSlide>
         
         <img src="../assets/imagens/manutencao1.jpeg" alt="" />
         <div class="texto-carrosel">
           <h3>Instalação de pia</h3>
           <p>
                Realizamos a instalação de pias com precisão e cuidado, garantindo um ajuste perfeito e funcionamento eficiente
           </p>
         </div>
  </SwiperSlide>


  <SwiperSlide>
         
         <img src="../assets/imagens/manutencao6.jpeg" alt="" />
         <div class="texto-carrosel">
           <h3>Troca de lâmpada</h3>
           <p>
                Realizamos a troca de lâmpadas com precisão e cuidado, proporcionando uma iluminação adequada e duradoura para o seu ambiente,  garantindo uma instalação segura e eficiente.
           </p>
         </div>
  </SwiperSlide>


  <SwiperSlide>
         
         <img src="../assets/imagens/manutencao5.jpeg" alt="" />
         <div class="texto-carrosel">
           <h3>Instalação ar-condicionado</h3>
           <p>
                Realizamos a instalação de ar-condicionado com precisão e cuidado, assegurando que o processo seja seguro e eficiente, proporcionando conforto térmico e eficiência energética no seu ambiente.
           </p>
         </div>
      </SwiperSlide>
    </Swiper>
</section>

<div class="descricao-clientes">
    <div class="text-content">
      <div class="line"></div>
      <h2>O que nossos clientes dizem</h2>
      <p>
        Todos esses depoimentos são fruto de muita dedicação, carinho e
        empenho do nosso time de profissionais.
      </p>
    </div>
    <div class="avaliacao-cliente1">
      <i class=""></i>
          <p class="text-avaliacao1">
            Empresa de excelente qualidade, profissionais atenciosos. Recomendo o
            serviço de instalação de ar condicionado.
          </p>
    </div>

    <div class="avaliacao-cliente2">
      <i class=""></i>
          <p class="text-avaliacao2">
            Empresa de excelente qualidade, profissionais atenciosos. Recomendo o
            serviço de instalação de ar condicionado.
          </p>
    </div>
</div>
 
  <header> <Footer></Footer></header> 
  </div>

</template>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  justify-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f7f6f6;

}
.title {
  width: auto;
  font-size: 3em;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #000000;
  text-align: center;
   padding-top: 15vh;
}

.t2 {
  display: block;
  width: 700px;
  font-size: 20px;
  margin:0 auto 2em;
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
  gap: 90px;
  justify-content: center;
  margin-bottom: 100px;
  margin-top: 60px;
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
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-top: 3em;
}
.secao{
  height: 60vh;
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

}
.swiper-slide{
  height: 80vh;
  width: 5vw;
  border-radius: 0.7rem;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
}

.swiper-slide img{
  width: 40vw;
  height: 50vh;
  justify-content: center;
  display: flex;
  border-radius: .4rem;
  align-items: center;

}

.texto-carrosel{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: transparent;
  width: 30vw;
}

.texto-carrosel h3{
  font-size: 1.7rem;
  font-weight: 500;
  margin-bottom: 20px;
}

.texto-carrosel p{
  width: 44%;
  font-size: 0.9rem;
  line-height: normal;
  font-weight: 500;
  text-align: left;
  }

.carousel{
  display: flex
}

.descricao-clientes {
  background-color: #29b6c5; 
  padding: 5.5rem;
  color: #ffffff;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  margin-top: 3rem;

}

.text-content {
  max-width: 250px;
}

.line {
  width: 200px;
  height: 3px;
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
.avaliacao-cliente1{
  position: relative;
  background-color: #f3f4f6;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.avaliacao-cliente2{
  position: relative;
  background-color: #f3f4f6;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.text-avaliacao1{
  text-align: center;
  color: #040507;
}
.text-avaliacao2{
  text-align: center;
  color:  #040507;
  
}

</style>
