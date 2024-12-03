<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="columns">
        <!-- Coluna FixTudo -->
        <div class="column first-column">
          <img src="../assets/imagens/nomeelogo.png" alt="FixTudo" class="logo">
          <p class="description">Especialistas em resolver seus problemas.</p>
          <div class="social-icons">
            <a href="https://www.facebook.com" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon facebook-icon" viewBox="0 0 24 24" width="30"
                height="30">
                <path fill="currentColor"
                  d="M22.5 0h-21C.7 0 0 .7 0 1.5v21C0 23.3.7 24 1.5 24H12V14.7h-3v-3h3V9c0-3.2 1.9-5 4.8-5 1.4 0 2.8.3 2.8.3v3h-1.6c-1.6 0-2.2 1-2.2 2v2.4h3.7l-.5 3h-3.2V24h6.3c.8 0 1.5-.7 1.5-1.5v-21C24 .7 23.3 0 22.5 0z" />
              </svg>
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon instagram-icon" viewBox="0 0 24 24" width="30"
                height="30">
                <path fill="currentColor"
                  d="M7.75 2C4.13 2 2 4.13 2 7.75v8.5C2 19.87 4.13 22 7.75 22h8.5C19.87 22 22 19.87 22 16.25v-8.5C22 4.13 19.87 2 16.25 2h-8.5zM12 6.75a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm6.25 1.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Coluna Nossos Contatos -->
        <div class="column second-column">
          <h3 class="second-title">NOSSOS CONTATOS</h3>
          <p class="description">fixtudocontato@gmail.com</p>
          <p class="description">(47)9090-9999</p>
          <p class="description">(47)3456-7811</p>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p>
        &copy; Copyright 2024 | Fix Tudo | Todos os direitos reservados | Images from Freepik
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #F0F0F0;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.columns {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
}

.column {
  flex: 1;
  min-width: 250px;
}

.first-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.logo {
  width: 100%;
  max-width: 200px;
  height: auto;
  margin-bottom: 1rem;
}

.second-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.second-title {
  font-size: 1.4rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: var(--azul-royal);
}

.description {
  font-weight: inherit;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.icon {
  width: 30px;
  height: 30px;
  transition: transform 0.3s ease;
}

.icon:hover {
  transform: scale(1.1);
}

.facebook-icon,
.instagram-icon {
  color: var(--azul-royal);
}

.copyright {
  background-color: var(--azul-royal);
  color: white;
  padding: 1rem;
  font-size: 0.9rem;
  text-align: center;
}

@media (max-width: 768px) {
  .footer-content {
    padding: 1rem;
  }

  .columns {
    flex-direction: column;
    gap: 2rem;
  }

  .column {
    width: 100%;
  }

  .logo {
    max-width: 150px;
  }

  .second-title {
    font-size: 1.2rem;
  }

  .description {
    font-size: 1rem;
  }

  .copyright {
    font-size: 0.8rem;
  }
}
</style>