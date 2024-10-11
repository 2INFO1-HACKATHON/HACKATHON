<template>
  <footer class="footer">
    <div class="container mx-auto p-4">
      <div class="flex flex-wrap justify-between">
        <div class="w-full md:w-12">
          <h1 class="text-dark text-3xl font-bold">
            FixTudo <span><img src="../assets/imagens/logo.png" alt="" /></span>
          </h1>
          <p class="text-dark text-lg">Especialistas em resolver seus problemas.</p>
          <ul class="flex justify-start">
            <li class="mr-4">
              <a href="#"><i class="fab fa-facebook-f fa-2x text-dark"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-instagram fa-2x text-dark"></i></a>
            </li>
          </ul>
        </div>
        <div class="w-full md:w-1/2 text-right">
          <h3 class="text-uppercase font-bold text-lg">Nossos Contatos</h3>
          <p class="text-lg">contato@fixtudo@gmail.com</p>
          <p class="text-lg">(47)9090-9999</p>
          <p class="text-lg">(47)3456-7811</p>
        </div>
      </div>
      <div class="mt-4">
        <div class="text-center">
          <p class="text-sm mb-0">
            &copy; Copyright 2024 | Fix Tudo | Todos os direitos reservados | Images from Freepik
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped>
.footer{
  background-color: #b2e6ce;
}

.text-dark {
  color: #333;
}

.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.p-4 {
  padding: 1rem;
}

.flex {
  display: flex;
}

.flex-wrap {
  flex-wrap: wrap;
}

.justify-between {
  justify-content: space-between;
}

.w-full {
  width: 100%;
}

.md:w-12 {
  width: 50%;
}

.text-3xl {
  font-size: 1.875rem;
}

.font-bold {
  font-weight: bold;
}

.text-lg {
  font-size: 1.125rem;
}

.mr-4 {
  margin-right: 1rem;
}

.mt-4 {
  margin-top: 1rem;
}

.text-sm {
  font-size: 0.875rem;
}

.mb-0 {
  margin-bottom: 0;
}
</style>