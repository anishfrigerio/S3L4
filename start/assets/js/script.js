var frase = 'Sto imparando Javascript';


document.getElementById('maiuscola').innerHTML += frase.toUpperCase();



document.getElementById('minuscola').innerHTML += frase.toLocaleLowerCase();


document.getElementById('strArray').innerHTML += frase.split('');

var pezzetto = frase.slice(2, 3) + frase.slice(1, 2) + frase.slice(14, 15 )+ frase.slice(18, 19) ;
document.getElementById('estraiCaratteri').innerHTML += pezzetto;

var js = ' JS';
document.getElementById('concatena').innerHTML += frase.toLocaleLowerCase() + js ;

document.getElementById('estraiStringa').innerHTML += frase.substring(5, 9); 

const lista = ['Giovanni', ' Carla', ' Mirtilla', ' Piero'];
document.getElementById('array').innerHTML += lista;


document.getElementById('lunghezza').innerHTML += lista.length;

document.getElementById('elemento').innerHTML += lista[3];

document.getElementById('ultimo').innerHTML += lista[2]

lista.splice(2, 1, 'Massimo', 'Mirtilli')
document.getElementById('modificato').innerHTML += lista.splice(0, 4);


const animali = ['coniglio', 'cane', 'gatto', 'criceto'];
document.getElementById('intero').innerHTML += animali;
animali.push('leone')
document.getElementById('aggiunto').innerHTML += animali;

animali.pop('leone');
document.getElementById('estratto').innerHTML += animali;

document.getElementById('verifica1').innerHTML += animali.includes('cane');
document.getElementById('verifica2').innerHTML += animali.includes('leone');

const calcolaAnni = function(compleanno) {
    return 2022 - compleanno;
}
const anni = [1990, 2001, 2010, 1987, 2018];
const eta1 = calcolaAnni(anni[1]);
const eta2 = calcolaAnni(anni[0]);
const eta3 = calcolaAnni(anni[3]);
const eta4 = calcolaAnni(anni[4]);
const eta5 = calcolaAnni(anni[2]);
document.getElementById('eta1').innerHTML += eta1 + ' anni';
document.getElementById('eta2').innerHTML += eta2 + ' anni';
document.getElementById('eta3').innerHTML += eta3 + ' anni';
document.getElementById('eta4').innerHTML += eta4 + ' anni';
document.getElementById('eta5').innerHTML += eta5 + ' anni';
var arr1 = [anni];
document.getElementById('arrayEta').innerHTML += arr1;




