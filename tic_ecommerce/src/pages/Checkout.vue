<template>
  <div class="checkout">
    <h1>Carrinho</h1>

    <div v-if="carrinho.length === 0">
      <p>Seu carrinho está vazio</p>
    </div>

    <div v-else>
      <div v-for="item in carrinho" :key="item.id" class="item">
        <p>{{ item.name || item.nome }} - R$ {{ formatPrice(item.price || item.preco) }}</p>
      </div>

      <h2>Total: R$ {{ formatPrice(total) }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Checkout",
  data() {
    return {
      carrinho: []
    }
  },
  computed: {
    total() {
      return this.carrinho.reduce((soma, item) => soma + Number(item.price || item.preco), 0)
    }
  },
  mounted() {
    // Carrega o carrinho do localStorage
    this.carrinho = JSON.parse(localStorage.getItem('carrinho')) || []
  },
  methods: {
    // Formata o preço com 2 casas decimais
    formatPrice(valor) {
      const num = parseFloat(valor)
      return isNaN(num) ? '0,00' : num.toFixed(2)
    }
  }
}
</script>

<style scoped>
.checkout {
  padding: 20px;
}

.checkout h1 {
  margin-bottom: 20px;
  font-size: 2rem;
  color: #333;
}

.item {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.item p {
  margin: 0;
  font-size: 16px;
  color: #555;
}

h2 {
  margin-top: 20px;
  font-size: 20px;
  color: #42b883;
}
</style>