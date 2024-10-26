<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
</script>

<template>
  <footer class="footer">
    <div>
      <div class="columns">

        <div class="first-column">
          <h1 class="first-title">
            FixTudo
            <img src="../assets/imagens/logo.png" alt="Logo da FixTudo" class="logo">
          </h1>
          <p class="description">Especialistas em resolver seus problemas.</p>
          <div class="social-icons">
            <a href="https://www.facebook.com" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon facebook-icon" viewBox="0 0 24 24" width="30" height="30">
                <path fill="currentColor"
                  d="M22.5 0h-21C.7 0 0 .7 0 1.5v21C0 23.3.7 24 1.5 24H12V14.7h-3v-3h3V9c0-3.2 1.9-5 4.8-5 1.4 0 2.8.3 2.8.3v3h-1.6c-1.6 0-2.2 1-2.2 2v2.4h3.7l-.5 3h-3.2V24h6.3c.8 0 1.5-.7 1.5-1.5v-21C24 .7 23.3 0 22.5 0z" />
              </svg>
            </a>

            <a href="https://www.instagram.com" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon instagram-icon" viewBox="0 0 24 24" width="30" height="30">
                <path fill="#0077b5"
                  d="M12 2.2c3.2 0 3.6 0 4.9.1 1.3.1 2 .3 2.5.5.5.2.9.5 1.3.9.4.4.7.8.9 1.3.2.5.4 1.2.5 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.3-.3 2-.5 2.5-.2.5-.5.9-.9 1.3-.4.4-.8.7-1.3.9-.5.2-1.2.4-2.5.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.3-.1-2-.3-2.5-.5a3.4 3.4 0 0 1-1.3-.9 3.4 3.4 0 0 1-.9-1.3c-.2-.5-.4-1.2-.5-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.3.3-2 .5-2.5a3.4 3.4 0 0 1 .9-1.3 3.4 3.4 0 0 1 1.3-.9c.5-.2 1.2-.4 2.5-.5C8.4 2.2 8.8 2.2 12 2.2m0-2C8.7.2 8.3.2 7 .3c-1.4.1-2.5.3-3.4.6-.9.3-1.6.8-2.3 1.4-.6.6-1.1 1.4-1.4 2.3C.3 6.5.1 7.6 0 9.1-.1 10.4-.1 10.8-.1 12c0 1.2 0 1.6.1 2.9.1 1.5.3 2.6.6 3.4.3.9.8 1.6 1.4 2.3.6.6 1.4 1.1 2.3 1.4.9.3 1.9.5 3.4.6 1.3.1 1.7.1 4.9.1s3.6 0 4.9-.1c1.4-.1 2.5-.3 3.4-.6.9-.3 1.6-.8 2.3-1.4.6-.6 1.1-1.4 1.4-2.3.3-.9.5-1.9.6-3.4.1-1.3.1-1.7.1-4.9s0-3.6-.1-4.9c-.1-1.4-.3-2.5-.6-3.4-.3-.9-.8-1.6-1.4-2.3-.6-.6-1.4-1.1-2.3-1.4C18.5.3 17.4.1 16 .1 14.7.1 14.3.1 12 .1m0 5.7a6.1 6.1 0 1 0 0 12.2A6.1 6.1 0 0 0 12 5.8zm0 10.1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.8-11.4a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Coluna Nossos Contatos -->
        <div class="second-column">
          <h3 class="second-title">NOSSOS CONTATOS</h3>
          <p class="description">fixtudocontato@gmail.com</p>
          <p class="description">(47)9090-9999</p>
          <p class="description">(47)3456-7811</p>
        </div>
      </div>
      <div>
        <div>
          <p class="copyright">
            &copy; Copyright 2024 | Fix Tudo | Todos os direitos reservados | Images from Freepik
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #F0F0F0;
}

.columns {
  justify-content: space-between;
  flex-wrap: wrap;
  display: flex;
  padding: 3vw;
  align-items: center;
}

.first-column {
  width: 50%;
  line-height: 3.5vw;
}

.second-column {
  width: 50%;
  line-height: 3vw;
}

.first-title {
  font-size: 2.8rem;
  padding-bottom: 1vw;
  align-items: center;
}

.logo {
  width: 10vw;
  position: absolute;
}

.second-title {
  font-size: 2rem;
  font-weight: 800;
  padding-bottom: 1vw;
  color: var(--azul-royal-escuro);
}

.description {
  font-weight: inherit;
  font-size: 1.5rem;
}

.icon {
  width: 30px;
  height: 30px;
  justify-content: space-between;
  transition: transform 0.3s ease;
}

.icon:hover {
  transform: scale(1.1);
}

.facebook-icon {
  color: #0077b5;
  margin-right: 2vw;
}

.instagram-icon {
  fill: #0077b5;
}

.copyright {
  background-color: var(--azul-royal);
  color: white;
  margin-bottom: 0;
  padding: 2vw;
  font-size: 1rem;
}
</style>
