const valorBinario = document.querySelector("#valor-bin");
const formBinToDec = document.querySelector("#formBinToDec")

formBinToDec.addEventListener("submit", (event) => {
  event.preventDefault();
  let binario = valorBinario.value;
  try {
    verifyField(binario);
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