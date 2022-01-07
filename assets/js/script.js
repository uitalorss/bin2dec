const valorBinario = document.querySelector("#valor-bin");
const formBinToDec = document.querySelector("#formBinToDec")

formBinToDec.addEventListener("submit", (event) => {
  event.preventDefault();
  let binario = valorBinario.value;
  try {
    verifyField(binario);
    isBinary(binario);
    console.log(binario);
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