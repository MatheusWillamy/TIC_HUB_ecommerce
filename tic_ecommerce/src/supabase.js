// URL da sua instância Supabase REST API
const BASE_URL = "https://hrgudhxcyiavzlmrlutb.supabase.co/rest/v1/";

// Chave anônima (anon) do Supabase
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhyZ3VkaHhjeWlhdnpsbXJsdXRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2MDg3MjUsImV4cCI6MjA5MDE4NDcyNX0.eaRJYgjysv6_G3UdVNLoYjz_ux2_BEUHQt9E3q2Uw1Q";

// Função para buscar qualquer tabela
export async function getTabela(tabela) {
  const url = `${BASE_URL}${tabela}?select=*`;
  
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "apikey": TOKEN,
      "Authorization": `Bearer ${TOKEN}`,
      "Content-Type": "application/json"
    }
  });

  if (!res.ok) {
    throw new Error(`Erro ao acessar ${tabela}: ${res.status}`);
  }

  return await res.json();
}

// Função para buscar todas as tabelas de uma vez
export async function getTodasTabelas() {
  const [categories, products, orders, order_items] = await Promise.all([
    getTabela("categories"),
    getTabela("products"),
    getTabela("orders"),
    getTabela("order_items")
  ]);

  return { categories, products, orders, order_items };
}