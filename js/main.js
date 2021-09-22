
//DESENVOLVA PÁGINAS WEB COM JAVASCRIPT

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigada por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    //window.open("https://www.google.com"); // ao clicar, abre nova aba que vai para esse site
    window.location.href = "https://www.google.com" //abre pagina na mesma aba, não redireciona
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse";
    elemento.innerHTML = "Obrigada por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/* PARTE 1
function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;        
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));

Exemplo 1:
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

//INTRODUÇÃO A JAVASCRIPT
/* PARTE 3 - Condicionais, laços de repetição e Date

DATE
var d = new Date();
//alert(d.getMonth()+1); (mostra o mês)
//alert(d.getMinutes()); minutos, etc...

REPETIÇÃO 2 - FOR
var count;
for(count=0; count <= 5; count++){
    alert(count);
};

REPETIÇÃO 1 - WHILE
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count = count + 1; //ou "count++"
};

CONDIÇÃO C/ POP-UP
var idade = prompt("Qual sua idade?"); //abre pop-up com pergunta e usuário digita resposta
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/

/*PARTE 2 - DICIONÁRIO
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);

var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);*/

/*PARTE 2 - ARRAY
var lista = ["maçã", "pêra", "laranja"]; usar [] faz lista!!!!
//lista.push("uva"); é para colocar elementos
//lista.pop(); retira o ultimo item da "lista", que seria "laranja"
//console.log(lista.length); mostra quantos itens tem na lista
//console.log(lista.reverse()); inverte posição dos elementos na lista
console.log(lista);
//console.log(lista.toString()); perde referencia de Array e torna-se String(?)
console.log(lista.join(" - ")); //tbm transforma em String, mas coloca a separação que eu quiser
var lista = ["maçã", "pêra", "laranja"];
console.log(lista[1]);
alert(lista[1]);
*/

/* PARTE 1
var nome = "Mariana Schmidt";
var idade = 32; //se estiver entre aspas, entende como texto: "32"
var idade2 = 10; //sem aspas, é número
var frase = "Japão é o melhor time do mundo";
alert(nome + " tem " + idade + " anos");
alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil"));
alert(frase.replace("Japão", "Brasil"));
console.log(frase.toLowerCase()); */