<script setup>
import Menu from '@/components/Menu.vue';
import Footer from '@/components/Footer.vue';
</script>
<template>
    <div class="container">
        <Menu></Menu>
        <h1 class="title">Limpeza</h1>
        <p class="description">Solicite seu orçamento personalizado</p>
        <div class="descricao">

            <p class="t2">
                A limpeza é essencial para garantir um ambiente saudável e
                agradável. Nossa equipe especializada cuida de todos os
                detalhes, deixando tudo impecável enquanto você se concentra
                nas suas atividades
            </p>
        </div>

        <h2 class="subtitle">Limpezas mais solicitadas:</h2>

        <div class="carousel">
            <button class="arrow left">&lt;</button>

            <div class="item">
                <img src="../assets/imagens/logo.png" alt="Limpeza Residencial">
                <h3>Limpeza Residencial</h3>
                <p>
                    Deixe seu lar impecável com uma limpeza detalhada em
                    todos os cómodos.
                </p>
                <button class="button">Saiba mais</button>
            </div>

            <button class="arrow right">&gt;</button>
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
                    <p>Perfeito para quem quer uma manutenção contínua e um ambiente sempre limpo e organizado.</p>
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
    </div>
</template>

<style scoped>
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
    color: #008CBA;
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
}

.title {
    text-align: center;
    margin-bottom: 1em;
    font-size: 2.5rem
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
    align-items: center;
    justify-content: center;
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