<template>
  <div class="home">
    <h1>Produtos</h1>

    <!-- CATEGORIAS -->
    <div class="categories" v-if="categories.length > 0">
      <h2>Categorias</h2>
      <ul>
        <li 
          v-for="cat in categories" 
          :key="cat.id" 
          :class="{ active: selectedCategory === cat.id }"
          @click="filterByCategory(cat.id)"
        >
          {{ cat.name || cat.nome || 'Categoria sem nome' }}
        </li>
        <li :class="{ active: selectedCategory === 0 }" @click="filterByCategory(0)">
          Todas
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Carregando categorias...</p>
    </div>

    <!-- PRODUTOS -->
    <div class="grid">
      <div 
        v-for="produto in filteredProducts" 
        :key="produto.id" 
        class="card"
        @click="$router.push('/produto/' + produto.id)"
      >
        <img :src="produto.image_url || 'https://via.placeholder.com/300'" :alt="produto.name || produto.nome" />
        <h3>{{ produto.name || produto.nome }}</h3>
        <p>R$ {{ formatPrice(produto.price || produto.preco) }}</p>

        <button @click.stop="adicionarCarrinho(produto)">
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { getTodasTabelas } from "../supabase.js";

const categories = ref([]);
const products = ref([]);
const orders = ref([]);
const order_items = ref([]);
const selectedCategory = ref(0); // 0 = todas

onMounted(async () => {
  try {
    const result = await getTodasTabelas();
    categories.value = result.categories;
    products.value = result.products;
    orders.value = result.orders;
    order_items.value = result.order_items;

    console.log("Categorias:", categories.value);
    console.log("Produtos:", products.value);
  } catch (err) {
    console.error("Erro ao carregar dados:", err);
  }
});

// Filtrar produtos por categoria
const filteredProducts = computed(() => {
  if (selectedCategory.value === 0) return products.value;
  return products.value.filter(p => p.category_id === selectedCategory.value);
});

// Método para selecionar categoria
function filterByCategory(catId) {
  selectedCategory.value = catId;
}

// Formatar preço corretamente
function formatPrice(preco) {
  const num = parseFloat(preco);
  return isNaN(num) ? '0,00' : num.toFixed(2);
}

// Adicionar ao carrinho
function adicionarCarrinho(produto) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.push(produto);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  alert("Produto adicionado ao carrinho!");
}
</script>

<style scoped>
.home {
  padding: 20px;
}

.categories {
  margin-bottom: 20px;
}

.categories ul {
  list-style: none;
  padding-left: 0;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.categories li {
  cursor: pointer;
  padding: 6px 12px;
  border-radius: 8px;
  background: #eee;
  font-weight: 500;
  transition: background 0.2s;
}

.categories li.active {
  background: #42b883;
  color: white;
}

.categories li:hover {
  background: #ddd;
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
  margin-bottom: 10px;
}

h3 {
  font-size: 16px;
  margin: 10px 0;
}

p {
  font-weight: bold;
  color: #42b883;
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