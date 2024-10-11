<script setup>
import Menu from '@/components/Menu.vue';
import Footer from '@/components/Footer.vue';
</script>
<template>
  <div class="container">

    <header>
      <Menu></Menu>
    </header>

    <div class="main">
      <h1>FixTudo</h1>
      <h2>Sua casa em boas mãos</h2>
      <p>Manutenção e cuidado com carinho</p>

    </div>

    <div class="imagem-home">
      <img src="../assets/imagens/imagemhome.png" alt="">
    </div>


    <div class="sobrenos">
      <div ref="sectionToScroll">
        <h3>Sobre Nós</h3>
        <p>
          Bem-vindo(a) à Fix Tudo, onde transformamos suas necessidades em
          <hr>soluções práticas e
          personalizadas!
          Somos uma empresa dedicada a
          <hr> conectar você com profissionais qualificados
          nas áreas de manutenção,
          <hr> limpeza, cuidados pessoais e culinária.
        </p>
        <p>Nosso compromisso é com a excelência e a satisfação dos nossos
          <hr> clientes.
        </p>

      </div>
    </div>
    <div class="intera">


      <div class="left-side">
        <h4>Fácil e Rápido</h4>
        <h2>Como Funciona?</h2>
        <p>Basta apenas um toque e deixa que o resto a gente facilita para você.</p>
        <p class="small-text">Não leva nem 10 segundos.</p>
        <button class="cta-button">
          <i class="whatsapp-icon"></i> Solicitar Orçamento
        </button>
      </div>
      <div class="right-side">
        <div class="card">
          <p class="card-number">01.</p>
          <p>Toque em qualquer botão do site para ser atendido por nossa equipe por Whatsapp.</p>
        </div>
        <div class="card">
          <p class="card-number">02.</p>
          <p>Escolha qual o tipo de serviço desejado e tenha rapidamente seu orçamento.</p>
        </div>
        <div class="card">
          <p class="card-number">03.</p>
          <p>Receba nossos termos e agende o melhor horário para a limpeza.</p>
        </div>
        <div class="card blue-card">
          <p class="card-number">04.</p>
          <p>Receba em tempo recorde nossos funcionários no seu estabelecimento ou casa.</p>
        </div>
      </div>





    </div>
    <div class="feedback">
      <div class="item">
        <span class="number">10 mil</span>
        <span class="description">Clientes Atendidos</span>
      </div>
      <div class="item">
        <span class="number">27 mil</span>
        <span class="description">Serviços Realizados</span>
      </div>
      <div class="item">
        <span class="number">20 anos</span>
        <span class="description">De Experiência</span>
      </div>
      <div class="item">
        <span class="number">251</span>
        <span class="description">Colaboradores Cadastrados</span>
      </div>
    </div>

    <div class="services-container">
      <h1>Serviços</h1>
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon">

          </div>
          <h2>Serviços de Limpeza</h2>
          <p>Ambientes limpos, organizados e renovados</p>
          <a href="#" class="service-link">→</a>
        </div>
        <div class="service-card">
          <div class="service-icon">

          </div>
          <h2>Serviços de Manutenção</h2>
          <p>Ambientes limpos, organizados e renovados</p>
          <a href="#" class="service-link">→</a>
        </div>
        <div class="service-card">
          <div class="service-icon">

          </div>
          <h2>Serviços de Cuidados</h2>
          <p>Ambientes limpos, organizados e renovados</p>
          <a href="#" class="service-link">→</a>
        </div>
        <div class="service-card">
          <div class="service-icon">

          </div>
          <h2>Serviços de Cuidados</h2>
          <p>Ambientes limpos, organizados e renovados</p>
          <a href="#" class="service-link">→</a>
        </div>
      </div>

      <Footer></Footer>


    </div>
  </div> 
</template>







<style scoped>
.services-container {
  text-align: center;
  background-color: white;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
  justify-items: center;
}

.service-card {
  background-color: #40E0D0;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  width: 20vw;


}

.service-card:hover {
  transform: translateY(-5px);
}



.service-link {
  color: black;
  text-decoration: none;
  font-weight: bold;
}

.feedback {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #12C2E9;
  color: white;
  padding: 20px;
}

.item {
  text-align: center;
}

.number {
  font-size: 3em;
  font-weight: bold;
}

.description {
  font-size: 0.8em;
}

.container {
  display: flex;
  flex-direction: column;
  background-color: #e2e2e2;
  width: 100%;
}

img {
  width: 9vw;
  height: 15vh;
}


h1 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1.5rem;
}

a {
  margin-right: 1.5rem;
  color: #666;
  text-decoration: none;
}

button {
  margin-right: 1.5rem;
  color: #666;
  text-decoration: none;
  border: none;
  background-color: #ffe0e000;
}



.main {
  margin-left: 40px;
  margin-bottom: 1.5rem;

}

.main h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.main h1 {
  font-weight: 600px;
  color: black;
  font-size: 3rem;
}

.main p {
  color: #666;

}

.imagem-home img {
  position: absolute;
  height: 600px;
  width: 600px;
  margin-left: 915px;    
  top: 0
}


.sobrenos {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;

}

.sobrenos img {
  width: 300px;
  height: 300px;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
}

.sobrenos p {
  color: #666;
  font-size: 1rem;

}

.sobrenos h3 {
  padding: 10px;


}

.intera {
  display: flex;
  height: 800px;
  align-items: center;
  justify-content: center;
  gap: 8vw;
  background-color: white;
}

.intera h2 {
  font-weight: bold;
}




.left-side {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 10px
}

.left-side h2 {
  color: #00626d;
}

.left-side h4 {
  letter-spacing: 7px;
  font-weight: 400;
}

.right-side {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  height: 10vh;
  padding: 10px;




}

.card {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  width: 15vw;

}

.blue-card {
  background-color: #2AB0BF;
}

.card-number {
  font-size: 24px;
  font-weight: bold;
  color: teal;
  margin-bottom: 10px;
}

.cta-button {
  background-color: rgb(150, 151, 150);
  color: rgb(0, 0, 0);
  padding: 10px 30px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  width: 13vw;
  font-weight: 600;

}

.whatsapp-icon {}

.small-text {
  font-size: 12px;
  color: #020202;
  font-weight: 600;
}
</style>
