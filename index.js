//Msg de info
function detPopup() { alert("Defina qual a distância terão os postes entre sí."); }

function altpPopup() { alert("Defina qual altura do poste a ser instalado."); }

function linpPopup() { alert("Esta é a fiação disponível para instalação da linha primária, a qual ficará ostentada no topo do poste."); }

function linsPopup() { alert("Esta é a fiação disponível para instalação da linha secundária, a qual será fixada na parte intermediária do poste."); }

function lintPopup() { alert("Marque a caixa caso a instalação tenha algum outro tipo de fiação, como cabos de telefone, tv a cabo, etc."); }

function vbrPopup() { alert("Informe a região de instalação para ter ciência quanto a velocidade base do vento a ser considerada."); }

function vblPopup() { alert("Informe o local para ter ciência quanto a média variada de vento ocorrida."); }


//declarando variaveis do HTML
let selectCabo = document.getElementById('dispost');
let selectAlturaPoste = document.getElementById('select-altura');
let selectRN = document.getElementById('select-rn');
let btnCalcular = document.getElementById('btncalculo');
let selectFP = document.getElementById('select-vao');
let selectFS = document.getElementById('select-FS');
let selectVB = document.getElementById('select-cabos-dispo');
let checkboxCaboTerceiro = document.getElementById('caboterceiro');
let RES1 = document.getElementById('RES01');
let RES2 = document.getElementById('RES02');
let RES3 = document.getElementById('RES03');
let RES4 = document.getElementById('RES04');
let RES5 = document.getElementById('RES05');
let RES6 = document.getElementById('RES06');

/* Desativar o select caso selecioe o 80 ou 120 */
selectCabo.innerHTML =
    `
<select class="input_valor" id="dispost">
    <option selected>Distância</option>
    <option value="35">35 metros</optiojn>
    <option value="80">80 metros</option> <!--TRABALHA SOMENTE COM FORÇA PRIMÁRIA-->
    <option value="120">120 metros</option> <!--TRABALHA SOMENTE COM FORÇA PRIMÁRIA-->
</select>
`

selectCabo.onchange = () => {
    if (selectCabo.value == '35') {
        selectFP.innerHTML =
            `
                                <select class="input_valor" id="select-vao">
                                    <option selected>Cabeamento</option>
                                    <option value="187">35mm²</option>
                                    <option value="373">70mm²</option>
                                    <option value="659">185mm²</option>
                                </select>
        `;
        selectFS.innerHTML =
            `<b>LINHA SECUNDÁRIA
                <br>FS / CABOS DISPONÍVEIS
            
                <a href="javascript:linsPopup()"><img src="./img/information-source_2139.png" width="13px"></a>
            
                </br>

                <select class="input_valor" id="campo-seletor-fs">
                    <option value="0">Cabeamento</option>
                    <option value="187">35mm²</option>
                    <option value="373">70mm²</option>
                    <option value="659">185mm²</option>
                </select>
            </b>
        `;
    }
    if (selectCabo.value == '80') {
        selectCabo.innerHTML =
            `
        <select class="input_valor" id="dispost">
            <option >Distância</option>
            <option value="35">35 metros</optiojn>
            <option selected value="80">80 metros</option> <!--TRABALHA SOMENTE COM FORÇA PRIMÁRIA-->
            <option disabled>120 metros</option> <!--TRABALHA SOMENTE COM FORÇA PRIMÁRIA-->
        </select>'
        `;

        selectFP.innerHTML =
            `
                                <select class="input_valor" id="select-vao">
                                    <option selected>Cabeamento</option>
                                    <option value="448">35mm²</option>
                                    <option value="549">70mm²</option>
                                    <option value="837">185mm²</option>
                                </select>
        `;
    }
    if (selectCabo.value == '120') {
        selectCabo.innerHTML =
            `
        <select class="input_valor" id="dispost">
            <option >Distância</option>
            <option value="35">35 metros</optiojn>
            <option disabled>80 metros</option> <!--TRABALHA SOMENTE COM FORÇA PRIMÁRIA-->
            <option selected value="120">120 metros</option> <!--TRABALHA SOMENTE COM FORÇA PRIMÁRIA-->
        </select>'
        `
    }
};
selectAlturaPoste.onchange = () => {
    if (selectAlturaPoste.value == '9') {
        selectRN.innerHTML =
            `
    <select class="input_valor" id="select-rn">
        <option selected>RN(DaN)</option>
        <option value="200">200</option>
        <option value="400">400</option>
        <option value="600">600</option>
    </select>
    `
    }
    if (selectAlturaPoste.value == '12') {
        selectRN.innerHTML =
            `
    <select class="input_valor" id="select-rn">
        <option selected>RN(DaN)</option>
        <option value="400">400</option>
        <option value="600">600</option>
        <option value="1000">1000</option>
    </select>
    `
    }
};
selectFS.onchange = () => {
    calcular();
};


//INICIO DA FORMULA DO CALCULO

const E = 42501010000;
const LF = selectAlturaPoste * 2;
const MB = selectAlturaPoste * selectRN;
const VB = ((25 * 25) * 0.00471) * 2.228;

const WA = 0;
const WB = 0;
if (selectRN == '200') {
    WA = 223;
};
if (selectRN == '400') {
    WA = 337;
};
if (selectRN == '600') {
    WA = 476;
};
if (selectRN == '1000') {
    WA = 859;
};

if (WA == 223 && selectAlturaPoste == '9') {
    WB = 1583
};
if (WA == 337 && selectAlturaPoste == '9') {
    WB = 1977
};
if (WA == 476 && selectAlturaPoste == '9') {
    WB = 2308
};
if (WA == 337 && selectAlturaPoste == '12') {
    WB = 2929
};
if (WA == 476 && selectAlturaPoste == '12') {
    WB = 3329
};
if (WA == 859 && selectAlturaPoste == '12') {
    WB = 4471
};
const LFquad = LF* LF;
const MA = 0.9 * MB * WA / WB;
const DELTAWAWB = WB - WA;
const I = (3.14 * DELTAWAWB) / 64;


function calcular() {
    RES1.innerHTML =
        `<div id="RES01">
                <br>
                <b>FORÇA DE TRAÇÃO NA LINHA PRIMÁRIA</b>
                <p >${selectFP.value}</p>
         </div>`

    RES2.innerHTML =
        `<div id="RES02">
                     <br>
                     <b>FORÇA DE TRAÇÃO NA LINHA SECUNDÁRIA</b>
                     <p >${selectFS.value}</p>
              </div>`

    RES3.innerHTML =
        `<div id="RES03">
            <br>
            <b>FORÇA DO VENTO NA SUPERFÍCIE DO POSTE</b>
            <p>${VB}</p>
         </div>`

    if (checkboxCaboTerceiro.checked == true) {
        RES4.innerHTML =
            `<div id="RES04">
                     <br>
                     <b>FORÇA DE LINHA TELEFONICA</b>
                     <p>${checkboxCaboTerceiro.value}</p>
                  </div>`
    }
    const Fmax = selectFP.value + selectFS.value + VB;
    RES5.innerHTML = 
    `
    <div id="RES05">
        <br>
        <b>FORÇA MAXIMA(VS)</b>
        <p>${Fmax}</p>
    </div>
    `;
    // const FLABAGEM = 3.14 * 425 * I/LFquad;
    // RES6.innerHTML = 
    // `
    // <div id="RES06">
    //     <br>
    //     <b>FLAMBAGEM</b>
    //     <p>${FLABAGEM}</p>
    // </div>
    // `;
};