// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato”, ovvero presente nella lista di numeri random, o raggiunge il numero massimo possibile di tentativi consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


var numeriCasuali = [];
while(numeriCasuali.length < 16){
  numeriCasuali.push(numRandom(1,100));
}
console.log(numeriCasuali);

var fine = false;
var domandaUtente = [];
var numeriUtente = 0;
while(domandaUtente.length < 84 && fine == false){
  numeriUtente = parseInt(prompt('inserisci un numero'));
  domandaUtente.push(numeriUtente);
  if(arrayCheck(numeriCasuali, numeriUtente) == true){
    console.log('hai perso. Hai effettuato n. ' + domandaUtente.length + ' tentativi');
    fine = true;
  }
}

function arrayCheck(arraytoCheck, number){
  var i = 0;
  var result = false;
  while(i < arraytoCheck.length) {
    if(arraytoCheck[i] == number){
      result = true;
    }
    i++;
  }
  return result;
}


// var arrayRay =[4,6,5,9];
//
// var provaArray = arrayCheck(arrayRay, 1);
// console.log(provaArray);


function numRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// var userTries =[];
// var numbers= [];
// var callNumber = 0;
// var userNumber= 0;
// var maxTries=84;
//
// while (numbers.length<16){
//   var randomNumbers = numRandom(1,100);
//   if(numbers.includes(randomNumbers) == false){
//     numbers.push(randomNumbers)
//   }
// }
//
// function checkbomb(arrayToCheck, number){
//  for (var i = 0; i < arrayToCheck.length; i++) {
//    if(number == arrayToCheck[i]){
//      return true;
//    }
//  }
//  return false;
// }
//
// var count= 0;
// while (userTries.length < maxTries && checkbomb(number,usertry) == false) {
//   var usertry= parseInt('inserisci un numero');
//   usertries
//
// }

// for (var i = 0; i <= 15; i++) {
//   numbers.push(numRandom(1,100));
// }
// console.log(numbers);
//
// for(var d=0; d<=5; d++){
//   userNumber = parseInt(prompt('inserisci un numero'));
//   for (var j = 0; j < numbers.length; j++){
//       if(numbers[j] == userNumber){
//      console.log('partita conclusa');
//      }
//    }
// }
