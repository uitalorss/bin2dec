const valorBinario = document.querySelector("#valor-bin");
const formBinToDec = document.querySelector("#formBinToDec");
const campoResultado = document.querySelector(".resultado");

formBinToDec.addEventListener("submit", (event) => {
  event.preventDefault();
  let binario = valorBinario.value;
  try {
    clearFields();
    verifyField(binario);
    isBinary(binario);
    calcToDecimal(binario);
  } catch (error) {
    alert(error.message);
  }
})

const verifyField = (value) => {
  if(value === ''){
    throw new Error("Favor prencher o campo");
  }
}

const verifySize = (value) => {
  if(value.length > 8){
    throw new Error("Quantidade de caracteres acima para ser binário.");
  }
}

isBinary = (value) => {
  verifySize(value);
  const valorParaTeste = value.split('').filter(value => (value === "0" || value === "1"));
  if(valorParaTeste.length !== value.split('').length){
    throw new Error("Valor inválido para binário")
  }
}

calcToDecimal = (value) => {
  arrayBinary = value.split('').reverse();
  let total = 0;
  arrayBinary.forEach((element, index) => {
    total += Number(element) * (Math.pow(2, index));
  });
    const conteudoTotal = document.createElement("p");
    conteudoTotal.innerHTML = `O valor de ${value} em decimal é: ${total}`;
    campoResultado.appendChild(conteudoTotal);
}

clearFields = () => {
  campoResultado.innerHTML = "";
}