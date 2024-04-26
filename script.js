function inicioSegundos() {
  return (
    new Date().getSeconds() +
    new Date().getMinutes() * 60 +
    new Date().getHours() * 3600
  );
}

function anguloHora(s) {
  s %= 43200; 
  return ((360 * s) / 43200 + 180) % 360;
}

function anguloMinuto(s) {
  s %= 3600;
  return ((6 * s) / 60 + 180) % 360;
}

function anguloSegundo(s) {
  s %= 60;
  return (6 * s + 180) % 360;
}

const horario = document.getElementById("horario");
const minutero = document.getElementById("minutero");
const segundero = document.getElementById("segundero");

setInterval(() => {
  let s = inicioSegundos();
  horario.style.transform = `rotate(${anguloHora(s)}deg)`;
  minutero.style.transform = `rotate(${anguloMinuto(s)}deg)`;
  segundero.style.transform = `rotate(${anguloSegundo(s)}deg)`;
}, 1000);
