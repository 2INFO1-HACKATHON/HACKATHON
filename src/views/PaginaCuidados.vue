<script setup>
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'
</script>
<template>
  <div class="container">
    <header>
      <Menu></Menu>
    </header>

    <h1 class="title">Cuidados</h1>
    <p class="subtitle">Garanta conforto e segurança para quem você ama</p>
    <p class="text">
      Oferecemos cuidados personalizados para garantir conforto e segurança. Nossa equipe cuida de
      cada detalhe, permitindo que você tenha tranquilidade e confiança. Deixe seus entes queridos
      em boas mãos
    </p>
    <div class="cards">
      <div class="card">
        <h2 class="card-title">Equipe Multidisciplinar</h2>
        <p class="card-text">
          Profissionais qualificados em diversas áreas para abordar todas as necessidades de saúde.
        </p>
      </div>
      <div class="card">
        <h2 class="card-title">Avaliação Especializada</h2>
        <p class="card-text">
          Avaliação especializada no local, garantindo planos de cuidados personalizados e
          eficientes.
        </p>
      </div>
      <div class="card">
        <h2 class="card-title">Atendimento Consultivo</h2>
        <p class="card-text">
          Ouvimos suas necessidades, oferecendo orientações e soluções adaptadas para o bem-estar.
        </p>
      </div>
    </div>

    <div class="cuidados">
      <h1 class="title-cuidados">Tipos de Cuidados</h1>
      <div class="cards-cuidados">
        <div class="card1">
          <div class="img-card-cuidados">
            <img src="@/assets/imagens/logo.png" alt="" class="img-card-cuidados" />
          </div>
          <div class="texto-card">
            <div class="p-tamanho">
              <h2 class="title-card">Cuidados com crianças</h2>
              <p class="p-card">
                Nossa equipe oferece serviços de babá que garantem que seus filhos estejam seguros,
                bem cuidados e felizes enquanto você estiver fora.
              </p>
            </div>
          </div>
        </div>
        <div class="card2">
          <img
            src="https://example.com/cuidados-com-idosos.jpg"
            alt="Cuidados com idosos"
            class="img-card-cuidados"
          />
          <h2 class="title-card2">Cuidados com idosos</h2>
          <p class="text-card2">
            Conforto e segurança para idosos, promovendo qualidade de vida e independência com uma
            equipe experiente.
          </p>
        </div>
        <div class="card3">
          <img
            src="https://example.com/cuidados-pos-operatorios.jpg"
            alt="Cuidados pós-operatórios"
            class="img-card-cuidados"
          />
          <h2 class="title-card3">Cuidados pós-operatórios</h2>
          <p class="text-card3">
            Apoio especializado para uma recuperação segura, com acompanhamento cuidadoso em cada
            etapa do processo.
          </p>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<style scoped>
.title-cuidados {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
  justify-content: center;
  display: flex;
}

.cards-cuidados {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card1 {
  margin: 20px;
  padding: 20px;

  display: flex;
}

.card2 {
  margin: 20px;
  padding: 20px;
  width: 300px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  justify-content: center;
}

.card3 {
  margin: 20px;
  padding: 20px;
  width: 300px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  justify-content: center;
}

.img-card-cuidados {
  width: 350px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.title-card {
  font-weight: bold;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.p-card {
  color: #666;
  display: flex;
  flex-direction: column;
  margin-left: 25px;

  width: 30%;
}

.p-tamanho {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #f7f7f7;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
}

.subtitle {
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
  justify-content: center;
  display: flex;
}

.text {
  color: #333;
  margin-bottom: 30px;
  margin: 0 auto;
  width: 50%;
  display: flex;
  align-items: center;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 300px;
}

.card {
  margin: 20px;
  padding: 20px;
  width: 300px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-text {
  font-size: 14px;
  color: #666;
}
</style>
