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
  <div class="container">
    <Menu></Menu>
    <h1 class="title">Limpeza</h1>
    <p class="description">Solicite seu orçamento personalizado</p>
    <div class="descricao">
      <p class="t2">
        A limpeza é essencial para garantir um ambiente saudável e agradável. Nossa equipe
        especializada cuida de todos os detalhes, deixando tudo impecável enquanto você se concentra
        nas suas atividades
      </p>
    </div>

    <h2 class="subtitle">Limpezas mais solicitadas:</h2>
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
          
          <img src="../assets/imagens/limpeza1.jpg" alt="" />
          <div class="texto-carrosel">
            <h3>Limpeza Residencial</h3>
            <p>
              Deixe seu lar impecável com uma limpeza detalhada em todos os cômodos.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src="../assets/imagens/Limpeza2.jpeg" alt="" />
          <div class="texto-carrosel">
            <h3>Limpeza de Carpetes</h3>
            <p>
           Carpetes como novos, livres de poeira e ácaros.
             
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src="../assets/imagens/Limpeza3.jpeg" alt="" />
          <div class="texto-carrosel">
            <h3>Limpeza de Escritório </h3>
            <p>
              Garanta um ambiente de trabalho limpo e produtivo, com uma limpeza regular e eficiente.
            
            </p>
            
          </div>
        </SwiperSlide>

        <SwiperSlide>
          
          <img src="../assets/imagens/LImpeza4.jpeg" alt="" />
          <div class="texto-carrosel">
            <h3>Limpeza de Pós-Obra</h3>
            <p>
              Elimine toda a poeira após a reforma, deixando o espaço pronto para uso.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src="../assets/imagens/Limpeza5.jpeg" alt="" />
          <div class="texto-carrosel">
            <h3>Limpeza de Estofados</h3>
            <p>
             Estofados limpos e renovados, livres de manchas e odores. 
            </p>
            <h1></h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src="../assets/imagens/Limpeza6.jpeg" alt="" />
          <div class="texto-carrosel">
            <h3>Limpeza de Vidros</h3>
            <p>
              Vidros brilhantes e limpos, oferecendo uma visão clara e renovada.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  </div>

  <div class="incluso">
    <h1>O que está incluso:</h1>
    <div class="card-incluso">
      <div class="card">
        <h2>Residencial</h2>
        <ul>
          <li>Limpeza de pisos e superficies</li>
          <li>Organização de espaços</li>
          <li>Higienização de banheiros e cozinhas</li>
        </ul>
      </div>
      <div class="card">
        <h2>Escritórios</h2>
        <ul>
          <li>Higienização de áreas comuns</li>
          <li>Coleta de lixo e reciclagem</li>
          <li>Limpeza de mesas, cadeiras, teclados e monitores.</li>
        </ul>
      </div>
      <div class="card">
        <h2>Pós-Obra</h2>
        <ul>
          <li>Remoção de resíduos de obra</li>
          <li>Polimento de superficies</li>
          <li>Preparação do espaço para uso</li>
        </ul>
      </div>
      <div class="card">
        <h2>Carpetes</h2>
        <ul>
          <li>Aspiração profunda</li>
          <li>Higienização e desodorização</li>
          <li>Preservação das fibras</li>
        </ul>
      </div>
      <div class="card">
        <h2>Vidros</h2>
        <ul>
          <li>Limpeza de janelas internas e externas</li>
          <li>Remoção de manchas e sujeiras</li>
          <li>Polimento de vidros</li>
        </ul>
      </div>
      <div class="card">
        <h2>Estofados</h2>
        <ul>
          <li>Remoção de resíduos de obra</li>
          <li>Polimento de superficies</li>
          <li>Preparação do espaço para uso</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="pacote">
    <h1>Escolha o pacote ideal para você</h1>
    <div class="packages">
      <div class="package">
        <h2>Limpeza Semanal</h2>
        <p>
          Perfeito para quem quer uma manutenção contínua e um ambiente sempre limpo e organizado.
        </p>
        <p class="price">$250 <span>/Limpeza</span></p>
        <ul>
          <li>Equilibrio entre custo e manutenção</li>
          <li>Foco nas áreas mais utilizadas</li>
          <li>Flexibilidade para diferentes rotinas</li>
        </ul>
      </div>
      <div class="package">
        <h2>Limpeza Diária</h2>
        <p>Ideal para manter o ambiente impecável todos os dias, sem preocupações com a limpeza.</p>
        <p class="price">$150 <span>/Limpeza</span></p>
        <ul>
          <li>Manutenção continua</li>
          <li>Maior custo-beneficio</li>
          <li>Cuidado com os detalhes</li>
        </ul>
      </div>
      <div class="package">
        <h2>Limpeza Quinzenal</h2>
        <p>Excelente para quem busca uma solução econômica, com um espaço limpo a cada 15 dias.</p>
        <p class="price">$300 <span>/Limpeza</span></p>
        <ul>
          <li>Higienização completa e profunda</li>
          <li>Economia e eficácia</li>
          <li>Renovação semanal do espaço</li>
        </ul>
      </div>
    </div>
  </div>
  <Footer></Footer>

</template>

<style scoped>
.secao {
  height: 60vh;
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
  
  
}
.swiper-slide {
  height: 80vh;
  width: 5vw;
  border-radius: 0.7rem;
  

  overflow: hidden;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  
}

.swiper-slide img {
  width: 40vw;
  height: 50vh;
  justify-content: center;
  display: flex;
  border-radius: .4rem;
  align-items: center;

  
  
}
.texto-carrosel {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: transparent;
  width: 30vw;
  
  
}
.texto-carrosel h3 {
  font-size: 1.7rem;
  font-weight: 500;
  margin-bottom: 20px;
}
.texto-carrosel p {
  width: 44%;
  font-size: 0.8rem;
  font-weight: 400;
  text-align: center;
}

.pacote {
  font-family: sans-serif;
  text-align: center;
  padding: 20px;
}

.packages {
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
}

.package {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  width: 30%;
  text-align: left;
}

.price {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.price span {
  font-size: 14px;
  font-weight: normal;
}

.incluso {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}

.card-incluso {
  justify-content: center;
  margin-top: 2rem;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
}

.card {
  border: 1px solid #ccc;
  padding: 2rem;
  border-radius: 5px;

  width: 30%;
}

h2 {
  color: #008cba;
  margin-bottom: 1rem;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 0.5rem;
}

header {
  width: 100%;
  display: flex;

  align-items: center;
  margin-bottom: 1.5rem;
}

.container {
  font-family: sans-serif;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.title {
  text-align: center;
  margin-bottom: 1em;
  font-size: 2.5rem;
  padding-top: 15vh;
}

.description {
  text-align: center;
  margin-bottom: 2em;
  font-size: 22px;
  justify-content: center;
}

.t2 {
  display: flex;
  width: 700px;
  font-size: 20px;
  margin-bottom: 2em;
  text-align: start;
}

.descricao {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.subtitle {
  text-align: center;
  font-size: 1.5em;
  margin-bottom: 1em;
}

.carousel {
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
  background-color: #4caf50;
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
