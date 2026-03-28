<script setup lang="ts">
</script>

<template>
  <div id="app">

    <!-- CABEÇALHO GLOBAL -->
    <header class="navbar">
      <router-link to="/" class="logo">🛍️ Minha Loja</router-link>

      <!-- Menu vertical -->
      <nav class="menu">
        <router-link to="/">Início</router-link>
        <router-link to="/catalogo">Catálogo</router-link>
        <router-link to="/checkout">Carrinho 🛒</router-link>
      </nav>
    </header>

    <main class="container">
      <router-view />
    </main>

  </div>
</template>

<style scoped>
header.navbar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;
  background-color: #f8f8f8;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #333;
  margin-bottom: 1rem;
}

.menu {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.menu a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 16px;
}

.menu a:hover {
  color: #007BFF;
}

.container {
  padding: 2rem;
}
</style>