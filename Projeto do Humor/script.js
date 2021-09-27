const botao = document.querySelector("#btn-Texto");
const nome = document.querySelector("#texto1");
const situacao = document.querySelector("#texto2");
const situacao3 = document.querySelector("#texto3");
const situacao4 = document.querySelector("#texto4");
const situacao5  = document.querySelector("#texto5");
const imagem01 = document.querySelector("#foto1");
const imagem02 = document.querySelector("#foto2");
const imagem03 = document.querySelector("#foto3");
const imagem04 = document.querySelector("#foto4");
const imagem05 = document.querySelector("#foto1");


window.onload = function() {
    alert("Olá Mundo!")
};

btnTexto.addEventListener("click", function() {
    if(botao.value == "foto2") {
        nome.innerText="QUE RAIVA";
        situacao.innerText = "QUE RAIVA";
        imagem01.src="Bravo.jpg"
        botao.value = "segundo";
    }else if (botao.value == "segundo") {
        nome.innerText="DESCONTRAIDO";
        situacao3.innerText="DESCONTRAIDO";
        imagem02.src="Descontraido.jpg";
        botao.value = "terceiro";
    }else if (botao.value == "tercerio") {
        nome.innerText="INDIGNADO";
        situacao4.innerText="INDIGNADO";
        imagem03.src="Indignado.jpg"
        botao.value = "quarto";
    }else if (botao.value == "quarto") {
        nome.innerText="SURPREENDIDO";
        situacao5.innerText="SURPREENDIDO";
        imagem04.src="Surpreendido.jpg"
        botao.value = "quinto";
    }else if(botao.value == "quinto") {
        nome.innerText="OBRIGADO";
        situacao5.innerText="OBRIGADO";
        imagem05.src="bruce wayner.jpeg"
        botao.value = "quinto";
    }
});