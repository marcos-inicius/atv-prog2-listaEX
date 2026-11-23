// 19. Requisição HTTP e API (GET)
document.getElementById("formulario").addEventListener("submit", event => {
  event.preventDefault();
  document.getElementById("retorno").textContent = "Dados enviados (demonstração).";
});

document.getElementById("consultar").addEventListener("click", async () => {
  const nome = document.getElementById("pais").value.trim();
  const saida = document.getElementById("resultado");

  if (!nome) {
    saida.textContent = "Digite o nome de um país.";
    return;
  }

  saida.textContent = "Consultando...";

  try {
    const url = `https://restcountries.com/v3.1/name/${encodeURIComponent(nome)}?fields=name,capital,population,region`;
    const resposta = await fetch(url);

    if (!resposta.ok) {
      throw new Error(`Erro HTTP: ${resposta.status}`);
    }

    const dados = await resposta.json();
    const pais = dados[0];

    saida.textContent =
      `País: ${pais.name.common} | Capital: ${(pais.capital || ["Não informada"])[0]} | ` +
      `População: ${pais.population.toLocaleString("pt-BR")} | Região: ${pais.region}`;
  } catch (erro) {
    saida.textContent = `Não foi possível consultar: ${erro.message}`;
  }
});

// Respostas do exercício 19:
// URL: https://restcountries.com/v3.1/name/{nome}?fields=name,capital,population,region
// Método HTTP: GET.
// Código de sucesso: 200.
// Formato dos dados: JSON.
// Requisição é a mensagem enviada pelo cliente; resposta é o retorno do servidor.
