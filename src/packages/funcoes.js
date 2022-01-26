function verificaEsquerdaDireita(palavra, matriz, i, j) {
  const ocorr = [];

  for (let h = 0; h < palavra.length; h++) {
    const tamanhoLinha = matriz[i].length;

    if (j + h >= tamanhoLinha || palavra[h] !== matriz[i][j + h]) {
      return [];
    }

    ocorr.push([i, j + h]);
  }

  return ocorr;
}

function verificaDireitaEsquerda(palavra, matriz, i, j) {
  const ocorr = [];

  for (let h = 0; h < palavra.length; h++) {
    if (j - h < 0 || palavra[h] !== matriz[i][j - h]) {
      return [];
    }

    ocorr.push([i, j - h]);
  }

  return ocorr;
}

function verificaCimaBaixo(palavra, matriz, i, j) {
  const ocorr = [];

  for (let h = 0; h < palavra.length; h++) {
    const tamanhoColuna = matriz.length;

    if (i + h >= tamanhoColuna || palavra[h] !== matriz[i + h][j]) {
      return [];
    }

    ocorr.push([i + h, j]);
  }

  return ocorr;
}

function verificaBaixoCima(palavra, matriz, i, j) {
  const ocorr = [];

  for (let h = 0; h < palavra.length; h++) {
    if (i - h < 0 || palavra[h] !== matriz[i - h][j]) {
      return [];
    }

    ocorr.push([i - h, j]);
  }

  return ocorr;
}

function diagonalSubindoEsquerdaDireita(palavra, matriz, i, j) {
  const ocorr = [];

  for (let h = 0; h < palavra.length; h++) {
    const tamanhoLinha = matriz[i].length;

    if (
      i - h < 0 ||
      j + h >= tamanhoLinha ||
      palavra[h] !== matriz[i - h][j + h]
    ) {
      return [];
    }

    ocorr.push([i - h, j + h]);
  }

  return ocorr;
}

export default function verificaOcorrencias(palavra, grade) {
  let ocorr = [];

  for (let i = 0; i < grade.length; i++) {
    for (let j = 0; j < grade[i].length; j++) {
      if (palavra[0] === grade[i][j]) {
        ocorr = ocorr.concat(verificaEsquerdaDireita(palavra, grade, i, j));
        ocorr = ocorr.concat(verificaDireitaEsquerda(palavra, grade, i, j));
        ocorr = ocorr.concat(verificaCimaBaixo(palavra, grade, i, j));
        ocorr = ocorr.concat(verificaBaixoCima(palavra, grade, i, j));
        ocorr = ocorr.concat(
          diagonalSubindoEsquerdaDireita(palavra, grade, i, j)
        );
      }
    }
  }

  return ocorr;
}
