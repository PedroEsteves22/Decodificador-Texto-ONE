const input = document.querySelector('input');
const h1 = document.querySelector('h1');
const criptografarButton = document.querySelector('.criptografar');
const descriptografarButton = document.querySelector('.descriptografar');
const copiar = document.querySelector('.copiar');

const pattern = /^[a-zç'\s]+$/;

function cript() {
  if (pattern.test(input.value)) {
    let criptografado = input.value;
    criptografado = criptografado.replaceAll('e', 'enter');
    criptografado = criptografado.replaceAll('i', 'imes');
    criptografado = criptografado.replaceAll('a', 'ai');
    criptografado = criptografado.replaceAll('o', 'ober');
    criptografado = criptografado.replaceAll('u', 'ufat');
    h1.innerText = criptografado;
  } else {
    h1.innerText =
      'O campo não pode ter letras maiúscula, acentos, caracteres especiais ou o campo ficar vazio!!!';
  }
}

function descript() {
  if (pattern.test(input.value)) {
    let criptografado = input.value;
    criptografado = criptografado.replaceAll('enter', 'e');
    criptografado = criptografado.replaceAll('imes', 'i');
    criptografado = criptografado.replaceAll('ai', 'a');
    criptografado = criptografado.replaceAll('ober', 'o');
    criptografado = criptografado.replaceAll('ufat', 'u');
    h1.innerText = criptografado;
  } else {
    h1.innerText =
      'O campo não pode ter letras maiúscula, acentos, caracteres especiais ou o campo ficar vazio!!!';
  }
}

async function copy() {
  await navigator.clipboard.writeText(h1.innerText);
}

criptografarButton.addEventListener('click', cript);
descriptografarButton.addEventListener('click', descript);
copiar.addEventListener('click', copy);
