<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <div id="app">
    
    <!-- CABEÇALHO GLOBAL (Aparece em todas as telas) -->
    <header class="navbar">
      
      <!-- AQUI ESTÁ O LINK PARA A HOME! 
           Clicar na logo ou no nome da loja sempre joga o usuário para o início (/) -->
      <router-link to="/" class="logo">
        🛍️ Minha Loja
      </router-link>

      <!-- Menu de navegação rápido -->
      <nav class="menu">
        <router-link to="/">Início</router-link>
        <router-link to="/checkout">🛒 Carrinho</router-link>
      </nav>

    </header>

    <main class="container">

      <router-view />
    </main>

  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
