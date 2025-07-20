function buscarDadosSimulados() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sucesso = Math.random() < 0.5;
      if (sucesso) {
        resolve("Dados carregados com sucesso!");
      } else {
        reject("Erro ao carregar dados!");
      }
    }, 2000);
  });
}

buscarDadosSimulados()
  .then((mensagem) => {
    console.log("Usando then/catch:", mensagem);
  })
  .catch((erro) => {
    console.error("Usando then/catch:", erro);
  });

async function executarBusca() {
  try {
    const mensagem = await buscarDadosSimulados();
    console.log("Usando async/await:", mensagem);
  } catch (erro) {
    console.error("Usando async/await:", erro);
  }
}

executarBusca();
