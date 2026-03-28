<template>
  <div class="produto">
    <img :src="produto.imagem" />

    <div class="info">
      <h1>{{ produto.nome }}</h1>
      <p class="preco">R$ {{ produto.preco }}</p>
      <p class="descricao">
        Produto incrível com ótima qualidade.
      </p>

      <button @click="adicionarCarrinho">
        Adicionar ao carrinho
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      produto: {
        id: 1,
        nome: "Produto Exemplo",
        preco: 99.90,
        imagem: "https://via.placeholder.com/400"
      }
    }
  },

  methods: {
    adicionarCarrinho() {
      console.log("Produto adicionado:", this.produto)
    }
  }
}
</script>

<style scoped>
.produto {
  display: flex;
  gap: 30px;
  padding: 20px;
}

img {
  width: 300px;
  border-radius: 10px;
}

.info {
  max-width: 400px;
}

.preco {
  font-size: 20px;
  color: #42b883;
  font-weight: bold;
}

button {
  margin-top: 20px;
  background: #42b883;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
}

.nome {
  color: #333;
  font-size: 16px;
}

.preco {
  color: #42b883;
  font-weight: bold;
  font-size: 18px;
}
</style>