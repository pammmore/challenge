var botonencriptar = document.querySelector(".btn-encriptar");
var botondesencriptar = document.querySelector(".btn-desencriptar");
var muneco = document.querySelector(".contenedor-muneco");
var h3 = document.querySelector (".contenedor-h3");
var parrafo = document.querySelector(".contenedor-deparrafo");
var resultado = document.querySelector(".texto-encrip");
var botoncopiar = document.querySelector(".btn-copiar")

botonencriptar.onclick = encriptar;
botondesencriptar.onclick = desencriptar;



function encriptar(){
    ocultarfront();
    var area = recuperartexto()
    resultado.textContent = encriptarTexto(area)
}       

function desencriptar(){
    ocultarfront();
    var area = recuperartexto()
    resultado.textContent = desencriptarTexto(area)
}

function recuperartexto(){
    var area= document.querySelector(".area");
    return area.value;
}

function ocultarfront(){
    muneco.classList.add("ocultar");
     h3.classList.add("ocultar");
     parrafo.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal ="";

    for(var i =0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal
}
function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal ="";

    for(var i =0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+2;
        }
        if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+5;
        }
        if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+4;
        }
        if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+5;
        }
        if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal
}