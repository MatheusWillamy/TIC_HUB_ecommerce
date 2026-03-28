<template>
  <div class="catalogo">
    <h1>Catálogo Completo</h1>

    <div v-if="produtos.length === 0">
      <p>Carregando produtos...</p>
    </div>

    <div class="grid" v-else>
      <div 
        v-for="produto in produtos" 
        :key="produto.id" 
        class="card"
        @click="$router.push('/produto/' + produto.id)"
      >
        <img :src="produto.imagem || 'https://via.placeholder.com/300'" :alt="produto.nome" />

        <h3 class="nome">{{ produto.nome || produto.name || 'Produto sem nome' }}</h3>
        <p class="preco">R$ {{ Number(produto.preco || 0).toFixed(2) }}</p>

        <button @click.stop="adicionarCarrinho(produto)">
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getTabela } from '../supabase'

const produtos = ref([])

onMounted(async () => {
  try {
    produtos.value = await getTabela('products')
    console.log(produtos.value)  
  } catch (err) {
    console.error('Erro ao carregar produtos:', err)
  }
})

// Função para adicionar produto ao carrinho
function adicionarCarrinho(produto) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || []
  carrinho.push(produto)
  localStorage.setItem('carrinho', JSON.stringify(carrinho))
  alert(`Produto "${produto.nome}" adicionado ao carrinho!`)
}
</script>

<style scoped>
.catalogo {
  padding: 20px;
}

.catalogo h1 {
  margin-bottom: 20px;
  font-size: 2rem;
  color: #333;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.card {
  border: 1px solid #eee;
  padding: 16px;
  border-radius: 12px;
  text-align: center;
  background: white;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
}

.nome {
  color: #333;
  font-size: 16px;
  margin: 10px 0;
}

.preco {
  color: #42b883;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
}

button {
  background: #42b883;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  transition: background 0.2s;
}

button:hover {
  background: #369870;
}
</style>