
// Botões

var btnAteneu = document.getElementById('ateneu');
var btnSerras = document.getElementById('cidadeSerras');
var btnCortico = document.getElementById('cortico');
var btnDomCasmurro = document.getElementById('domCasmurro');
var btnQuincas = document.getElementById('quincas');
var btnMemorias = document.getElementById('memoriasPostumas');
var btnMulato = document.getElementById('mulato');
var btnReliquia = document.getElementById('reliquia');

// Cards:

var cardAteneu = document.getElementById('ateneuCard');
var cardCortico = document.getElementById('corticoCard');
var cardDomCasmurro = document.getElementById('carrusmoCard');
var cardCidade = document.getElementById('cidadeCard');
var cardQuincas = document.getElementById('quincasCard');
var cardMemorias = document.getElementById('memoriasCard');
var cardMulato = document.getElementById('mulatoCard');
var cardReliquia = document.getElementById('reliquiaCard');


// Functions: 

function AteneuCurta(){

    cardAteneu.style.display = "flex";
    cardCidade.style.display = "none";
    cardCortico.style.display = "none";
    cardDomCasmurro.style.display = "none";
    cardMemorias.style.display = "none";
    cardMulato.style.display = "none";
    cardQuincas.style.display = "none";
    cardReliquia.style.display = "none";

}

function CidadeCurta(){

    cardAteneu.style.display = "none";
    cardCidade.style.display = "flex";
    cardCortico.style.display = "none";
    cardDomCasmurro.style.display = "none";
    cardMemorias.style.display = "none";
    cardMulato.style.display = "none";
    cardQuincas.style.display = "none";
    cardReliquia.style.display = "none";

}

function CorticoCurta(){
    
    cardAteneu.style.display = "none";
    cardCidade.style.display = "none";
    cardCortico.style.display = "flex";
    cardDomCasmurro.style.display = "none";
    cardMemorias.style.display = "none";
    cardMulato.style.display = "none";
    cardQuincas.style.display = "none";
    cardReliquia.style.display = "none";

}

function DomCurta(){

    cardAteneu.style.display = "none";
    cardCidade.style.display = "none";
    cardCortico.style.display = "none";
    cardDomCasmurro.style.display = "flex";
    cardMemorias.style.display = "none";
    cardMulato.style.display = "none";
    cardQuincas.style.display = "none";
    cardReliquia.style.display = "none";

}

function MemoriasCurta(){

    cardAteneu.style.display = "none";
    cardCidade.style.display = "none";
    cardCortico.style.display = "none";
    cardDomCasmurro.style.display = "none";
    cardMemorias.style.display = "flex";
    cardMulato.style.display = "none";
    cardQuincas.style.display = "none";
    cardReliquia.style.display = "none";

}

function MulatoCurta(){

    cardAteneu.style.display = "none";
    cardCidade.style.display = "none";
    cardCortico.style.display = "none";
    cardDomCasmurro.style.display = "none";
    cardMemorias.style.display = "none";
    cardMulato.style.display = "flex";
    cardQuincas.style.display = "none";
    cardReliquia.style.display = "none";

}
function QuincasCurta(){

    cardAteneu.style.display = "none";
    cardCidade.style.display = "none";
    cardCortico.style.display = "none";
    cardDomCasmurro.style.display = "none";
    cardMemorias.style.display = "none";
    cardMulato.style.display = "none";
    cardQuincas.style.display = "flex";
    cardReliquia.style.display = "none";

}

function ReliquiaCurta(){
    
    cardAteneu.style.display = "none";
    cardCidade.style.display = "none";
    cardCortico.style.display = "none";
    cardDomCasmurro.style.display = "none";
    cardMemorias.style.display = "none";
    cardMulato.style.display = "none";
    cardQuincas.style.display = "none";
    cardReliquia.style.display = "flex";
}