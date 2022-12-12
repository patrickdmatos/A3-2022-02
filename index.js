//Msg de info
function detPopup()
{alert("Defina qual a distância terão os postes entre sí.");}

function altpPopup()
{alert("Defina qual altura do poste a ser instalado.");}

function linpPopup()
{alert("Esta é a fiação disponível para instalação da linha primária, a qual ficará ostentada no topo do poste.");}

function linsPopup()
{alert("Esta é a fiação disponível para instalação da linha secundária, a qual será fixada na parte intermediária do poste.");}

function lintPopup()
{alert("Marque a caixa caso a instalação tenha algum outro tipo de fiação, como cabos de telefone, tv a cabo, etc.");}

function vbrPopup()
{alert("Informe a região de instalação para ter ciência quanto a velocidade base do vento a ser considerada.");}

function vblPopup()
{alert("Informe o local para ter ciência quanto a média variada de vento ocorrida.");}


/* Desativar o select caso selecioe o 80 ou 120*/

function disabled_select() {
    var select = document.getElementById('dispost').value;

    if (select == "80") {
        window.alert("é 80 mesmo");
    } else {window.alert("esolhe")}

}