let produtosSelecionados = [];

function adicionar() {
  const produtoSelecionado = document.getElementById(
    "produto_selecionado"
  ).value;

  const quantidadeProduto = document.getElementById("quantidade_produto").value;

  switch (produtoSelecionado.toLowerCase()) {
    case "arroz":
      produtosSelecionados.push({
        nome: produtoSelecionado,
        quantidade: quantidadeProduto,
        preco: 20,
      });
      break;
    default:
      produtosSelecionados = produtosSelecionados;
  }

  montarTabelaCompras();
}

function montarTabelaCompras() {
  const tabelaCompras = document.getElementById("tabela_compras"); // pega a tabela no html pelo id
  tabelaCompras.innerHTML = ""; // limpa ou zera toda a tabela

  for (let i = 0; i < produtosSelecionados.length; i++) {
    tabelaCompras.innerHTML += `
      <tr>
        <td>${produtosSelecionados[i].nome}</td>
        <td>${produtosSelecionados[i].quantidade}</td>
        <td>R$ ${produtosSelecionados[i].preco}</td>
        <td>R$ ${
          produtosSelecionados[i].quantidade * produtosSelecionados[i].preco
        }</td>
        <td>
          <button onclick="excluirProduto(${i})">Excluir</button>
        </td>
      </tr>
    `;
  }
}

function limparMinhasCompras() {
  document.getElementById("produto_selecionado").value = "";
  document.getElementById("quantidade_produto").value = "";
  produtosSelecionados = [];
  montarTabelaCompras();
}

function excluirProduto(indice) {
  const desejaExcluir = confirm(`Excluir produto ${produtosSelecionados[indice].nome}?`);
  if(desejaExcluir){
    produtosSelecionados.splice(indice, 1);
    montarTabelaCompras();
  }
}

montarTabelaCompras();
