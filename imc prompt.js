let peso = prompt("Digite seu peso");
let altura = prompt("Digite sua altura");

let imc = peso / (altura * altura);

document.bodyinnerHTML = `<h1>Seu IMC é de %(imc)</h1>´;