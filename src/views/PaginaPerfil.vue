

<template>
    <header><Menu></Menu></header>
    <div class="container-perfil">
      <div class="conteudo-perfil">
        <!-- Lado esquerdo com foto -->
        <div class="secao-foto-perfil">
          <div class="foto-perfil">
            <img :src="perfil.urlFoto" alt="" />
          </div>
          <button @click="handleEditar" class="botao-editar">Editar</button>
        </div>
  
        <!-- Lado direito com formulário -->
        <div class="secao-formulario-perfil">
          <h1>Meu perfil</h1>
          <form @submit.prevent="handleSalvar">
            <div class="grupo-formulario">
              <label for="nome">Nome:</label>
              <input
                id="nome"
                v-model="perfil.nome"
                type="text"
              />
            </div>
  
            <div class="grupo-formulario">
              <label for="telefone">Telefone:</label>
              <input
                id="telefone"
                v-model="perfil.telefone"
                type="tel"
              />
            </div>
  
            <div class="grupo-formulario">
              <label for="email">Email:</label>
              <input
                id="email"
                v-model="perfil.email"
                type="email"
              />
            </div>
  
            <button type="submit" class="botao-salvar">Salvar</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import Menu from '@/components/Menu.vue'
  import { reactive } from 'vue'
  
  const perfil = reactive({
    urlFoto: '/placeholder.svg?height=150&width=150',
    nome: '',
    telefone: '',
    email: ''
  })
  
  const handleEditar = () => {
    // Lógica para editar a foto
    console.log('Clicou em editar foto')
  }
  
  const handleSalvar = () => {
    // Lógica para salvar o perfil
    console.log('Perfil salvo:', perfil)
  }
  </script>
  
  <style scoped>
  .container-perfil {
    min-height: 100vh;
    background-color: #f3f4f6;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
  
  .conteudo-perfil {
    width: 100%;
    max-width: 800px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    padding: 2rem;
    display: flex;
    gap: 3rem;
  }
  
  .secao-foto-perfil {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .foto-perfil {
    background-color: #374151;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 1rem;
  }
  
  .foto-perfil img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .botao-editar, .botao-salvar {
    width: 100%;
    padding: 0.5rem 1rem;
    background-color: #107F8B;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .botao-editar:hover, .botao-salvar:hover {
    background-color: #107F8B;
  }
  
  .secao-formulario-perfil {
    flex: 1;
  }
  
  h1 {
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 2rem;
    padding-bottom: 0.5rem;
    border-bottom: 3px solid #e5e7eb;
  }
  
  .grupo-formulario {
    margin-bottom: 1.5rem;
  }
  
  label {
    display: block;
    font-size: 0.875rem;
    font-weight: 500;
    color: #374151;
    margin-bottom: 0.5rem;
  }
  
  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    font-size: 1rem;
  }
  
  input:focus {
    outline: none;
    border-color: #107F8B;
    box-shadow: 0 0 0 1px #107F8B;
  }
  </style>