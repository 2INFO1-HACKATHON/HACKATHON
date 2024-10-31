<script setup>
import Menu from '@/components/Menu.vue';
import Footer from '@/components/Footer.vue';
</script>
<template>
<header>
        <Menu></Menu>
</header>
<div class="container">
        <h1 class="title">Manutenção</h1>
        <div class="description">

            <p class="t2">
                Oferecemos soluções completas para a manutenção de sua casa,
                assegurando que todos os aspectos estejam em perfeito estado
                de funcionamento. Nossa equipe é especializada em resolver uma variedade de problemas,
                 garantindo segurança e eficiência em cada intervenção.
            </p>
        </div>

        <h2 class="subtitle">Hidráulica</h2>

  
 
</div>

<Footer></Footer>
</template>

<style scoped>

.container{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100vh;
        background-color: #F0F0F0;
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
.t2{
        display: flex;
        width: 700px;
        font-size: 20px;
        margin-bottom: 2em;
        text-align: start;
}
.subtitle{
        font-size: 2rem;
        font-weight: bold;
        color:#2AB0BF;
}
</style>
