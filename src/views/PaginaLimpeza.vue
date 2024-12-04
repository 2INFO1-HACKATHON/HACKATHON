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
<Menu></Menu>
  <div class="container">
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
      <Swiper :modules="modules" :slidesPerView="auto" @swiper="onSwiper" @slideChange="onSlideChange"
        :grabCursor="true" :centeredSlides="true" :loop="true" :cssMode="true" @autoplay="true" :autoplay="{
          delay: 3900,
          disableOnInteraction: true,
        }" :coverflowEffect="{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
          slideShadows: true
        }" :navigation="true" :keyboard="{
          enabled: true
        }" :mousewheel="true" :pagination="{
          clickable: true
        }">
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
          <img src="../assets/imagens/Limpeza4.jpeg" alt="" />
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
          <li><span class="icon-verificado">✔</span>Limpeza de pisos e superficies</li>
          <li><span class="icon-verificado">✔</span>Organização de espaços</li>
          <li><span class="icon-verificado">✔</span>Higienização de banheiros e cozinhas</li>
        </ul>
      </div>
      <div class="card">
        <h2>Escritórios</h2>
        <ul>
          <li><span class="icon-verificado">✔</span>Higienização de áreas comuns</li>
          <li><span class="icon-verificado">✔</span>Coleta de lixo e reciclagem</li>
          <li><span class="icon-verificado">✔</span>Limpeza de mesas, cadeiras, teclados e monitores.</li>
        </ul>
      </div>
      <div class="card">
        <h2>Pós-Obra</h2>
        <ul>
          <li><span class="icon-verificado">✔</span>Remoção de resíduos de obra</li>
          <li><span class="icon-verificado">✔</span>Polimento de superficies</li>
          <li><span class="icon-verificado">✔</span>Preparação do espaço para uso</li>
        </ul>
      </div>
      <div class="card">
        <h2>Carpetes</h2>
        <ul>
          <li><span class="icon-verificado">✔</span>Aspiração profunda</li>
          <li><span class="icon-verificado">✔</span>Higienização e desodorização</li>
          <li><span class="icon-verificado">✔</span>Preservação das fibras</li>
        </ul>
      </div>
      <div class="card">
        <h2>Vidros</h2>
        <ul>
          <li><span class="icon-verificado">✔</span>Limpeza de janelas internas e externas</li>
          <li><span class="icon-verificado">✔</span>Remoção de manchas e sujeiras</li>
          <li><span class="icon-verificado">✔</span>Polimento de vidros</li>
        </ul>
      </div>
      <div class="card">
        <h2>Estofados</h2>
        <ul>
          <li><span class="icon-verificado">✔</span>Remoção de resíduos de obra</li>
          <li><span class="icon-verificado">✔</span>Polimento de superficies</li>
          <li><span class="icon-verificado">✔</span>Preparação do espaço para uso</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="pacote">
    <h1 class="pacote-title">
      Escolha o pacote ideal<br><span>para você</span>
    </h1>
    <div class="packages">
      <div class="package">
        <h2>Limpeza Diária</h2>
        <p>Ideal para manter o ambiente impecável todos os dias, sem preocupações com a limpeza.</p>
        <p class="price">R$150 <span>/Limpeza</span></p>
        <ul>
          <li><span class="icon-verificado">✔</span>Manutenção continua</li>
          <li><span class="icon-verificado">✔</span>Maior custo-beneficio</li>
          <li><span class="icon-verificado">✔</span>Cuidado com os detalhes</li>
        </ul>
      </div>
      <div class="package middle">
        <h2>Limpeza Semanal</h2>
        <p>
          Perfeito para quem quer uma manutenção contínua e um ambiente sempre limpo e organizado.
        </p>
        <p class="price">R$250 <span>/Limpeza</span></p>
        <ul>
          <li><span class="icon-verificado blue">✔</span>Equilibrio entre custo e manutenção</li>
          <li><span class="icon-verificado blue">✔</span>Foco nas áreas mais utilizadas</li>
          <li><span class="icon-verificado blue">✔</span>Flexibilidade para diferentes rotinas</li>
        </ul>
      </div>
        <div class="package">
        <h2>Limpeza Quinzenal</h2>
        <p>Excelente para quem busca uma solução econômica, com um espaço limpo a cada 15 dias.</p>
        <p class="price">R$300 <span>/Limpeza</span></p>
        <ul>
          <li><span class="icon-verificado">✔</span>Higienização completa e profunda</li>
          <li><span class="icon-verificado">✔</span>Economia e eficácia</li>
          <li><span class="icon-verificado">✔</span>Renovação semanal do espaço</li>
        </ul>
      </div>
    </div>
  </div>

<Footer></Footer>

</template>

<style scoped>
.container {
  font-family: sans-serif;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  padding-bottom: 20vh;
  width: 100%;
  box-sizing: border-box;
}

.title {
  text-align: center;
  margin-bottom: 0.5em;
  font-size: 2rem;
  font-weight: 600;
}

.description {
  text-align: center;
  margin-bottom: 1em;
  font-size: 1.25rem;
  justify-content: center;
}

.descricao {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.t2 {
  width: 90%;
  font-size: 1rem;
  margin-bottom: 2em;
  text-align: center;
}

.subtitle {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1em;
}

.secao {
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide {
  height: auto;
  border-radius: 0.7rem;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.swiper-slide img {
  width: 80%;
  height: auto;
  object-fit: cover;
  border-radius: 0.5rem;
}

.texto-carrosel {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: transparent;
  width: 100%;
  padding: 1rem;
}

.texto-carrosel h3 {
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.texto-carrosel p {
  width: 100%;
  font-size: 0.9rem;
  font-weight: 400;
  text-align: center;
}

.incluso {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 7rem 5rem 7rem;
}

.incluso h1 {
  font-weight: 600;
  color: var(--azul-royal);
  text-align: center;
}

.card-incluso {
  justify-content: center;
  margin-top: 2rem;
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.card {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: scale(1.01);
}

.icon-verificado {
  font-size: 1rem;
  padding-right: 0.5rem;
  color: black;
  font-weight: lighter;
}

.blue {
  color: white;
}

.card h2 {
  color: var(--azul-royal);
  margin-bottom: 1rem;
  font-weight: 600;
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 0.5rem;
}

.pacote {
  font-family: sans-serif;
  text-align: center;
  padding: 1rem 4rem;
  background-color: #f0f0f0;
}

.packages {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: 2rem auto;
}

.package {
  border: 1px solid #ccc;
  background-color: white;
  padding: 2rem 1rem;
  border-radius: 1rem;
  width: 100%;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 4px 4px 10px #e4e4e4, -4px -4px 10px #f5f5f5;
}

.package.middle {
  background-color: var(--azul-royal);
  color: white;
}

.package:hover {
  transform: scale(1.01);
  box-shadow: 8px 8px 15px #e4e4e4, -8px -8px 15px #f5f5f5;
}

.pacote-title {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 2rem;
  line-height: 1.2;
}

.pacote-title span {
  display: block;
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--azul-royal);
}

.package h2 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.price {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin: 1rem 0;
}

.price span {
  font-size: 0.875rem;
  font-weight: normal;
}

@media (max-width: 639px) {
  .incluso {
    padding: 2rem 3rem;
  }

  .card-incluso {
    gap: 1rem;
  }

  .card {
    width: 100%;
  }

  .secao {
    width: 90%;
  }

  .swiper-slide img {
    max-width: 100%;
    max-height: 50vh;
    object-fit: contain;
  }
}

@media (min-width: 640px) {
  .title {
    font-size: 2.25rem;
  }

  .description {
    font-size: 1.3rem;
  }

  .t2 {
    font-size: 1.05rem;
    width: 80%;
  }

  .subtitle {
    font-size: 1.6rem;
  }
  .incluso {
    padding: 3rem 2rem;
  }

  .card-incluso {
    gap: 1.25rem;
  }

  .card {
    width: calc(50% - 0.625rem);
  }

  .secao {
    width: 85%;
  }

  .swiper-slide img {
    max-width: 100%;
    max-height: 50vh;
    object-fit: contain;
  }
}

@media (min-width: 768px) {
  .title {
    font-size: 2.4rem;
    padding-top: 8vh;
  }

  .description {
    font-size: 1.4rem;
  }

  .t2 {
    width: 75%;
    font-size: 1.15rem;
    text-align: center;
  }

  .subtitle {
    font-size: 1.8rem;
  }

  .secao {
    height: auto;
    width: 80%;
  }

  .incluso {
    padding: 4rem 3rem;
  }

  .card-incluso {
    gap: 1.5rem;
  }

  .card {
    width: calc(33.33% - 1rem);
  }

  .swiper-slide {
    flex-direction: row;
  }

  .swiper-slide img {
    max-width: 100%;
    max-height: 50vh;
    object-fit: contain;
  }

  .texto-carrosel {
    width: 50%;
  }

  .texto-carrosel h3 {
    font-size: 1.5rem;
  }

  .texto-carrosel p {
    width: 80%;
    font-size: 0.9rem;
  }

  .packages {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .package {
    width: calc(33.33% - 1.33rem);
  }
}

.packages {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: 2rem auto;
  width: 100%;
}

.package {
  border: 1px solid #ccc;
  background-color: white;
  padding: 2rem 1rem;
  border-radius: 1rem;
  width: 100%;
  max-width: 300px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 4px 4px 10px #e4e4e4, -4px -4px 10px #f5f5f5;
  display: flex;
  flex-direction: column;
}

.package.middle {
  background-color: var(--azul-royal);
  color: white;
}

.package:hover {
  transform: scale(1.01);
  box-shadow: 8px 8px 15px #e4e4e4, -8px -8px 15px #f5f5f5;
}

@media (max-width: 767px) {
  .packages {
    flex-direction: column;
  }

  .package {
    width: 100%;
    max-width: none;
  }
}

@media (min-width: 768px) {
  .packages {
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
  }

  .package {
    width: calc(33.33% - 1.33rem);
    max-width: none;
  }
}

@media (min-width: 1024px) {
  .packages {
    gap: 2rem;
  }

  .package {
    width: calc(33.33% - 1.33rem);
  }
}

@media (min-width: 1024px) {
  .title {
    font-size: 2rem;
    padding-top: 8vh;    
  }

  .description {
    font-size: 1.5rem;
  }

  .t2 {
    width: 70%;
    font-size: 1.25rem;
    text-align: start;
  }

  .subtitle {
    font-size: 1.9rem;
  }

  .secao {
    height: 30vh;
    width: 75%;
  }

  .incluso {
    padding: 4rem 5rem;
  }

  .swiper-slide img {
    max-width: 100%;
    max-height: 50vh;
    object-fit: contain;
  }

  .texto-carrosel {
    width: 35%;
  }

  .texto-carrosel h3 {
    font-size: 1.7rem;
  }

  .texto-carrosel p {
    width: 44%;
    font-size: 0.8rem;
  }

  .icon-verificado {
    font-size: 1.3vw;
    padding-right: 1vw;
    width: 10%;
  }

  .packages {
    gap: 4vw;
    margin: 2vh auto 5vh auto;
  }

  .package {
    width: 30%;
  }

  .pacote-title {
    font-size: 2rem;
    margin-top: 3vh;
  }

  .pacote-title span {
    font-size: 1.8rem;
  }

  .package h2 {
    font-size: 2rem;
    margin-bottom: 1vh;
  }

  .price {
    font-size: 1.7rem;
    margin: 2vh 0;
  }
}

@media (min-width: 1280px) {
  .secao {
    width: 70%;
  }

  .incluso {
    padding: 4rem 7rem;
  }

  .swiper-slide img {
    max-width: 100%;
    max-height: 50vh;
    object-fit: contain;
  }

  .texto-carrosel {
    width: 30%;
  }

  .packages {
    gap: 3vw;
  }
}
</style>