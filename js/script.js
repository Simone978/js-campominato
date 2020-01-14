// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato”, ovvero presente nella lista di numeri random, o raggiunge il numero massimo possibile di tentativi consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


var numbers= [];
var callNumber = 0;
var userNumber= 0;


for (var i = 0; i <= 15; i++) {
  numbers.push(numRandom(1,100));
}
console.log(numbers);


  for (var j = 0; j < numbers.length; j++) {
    var d=0;
    while(d<5 && numbers[j] != userNumber){
      userNumber = parseInt(prompt('inserisci un numero'));
      if(numbers[j] == userNumber){
     console.log('partita conclusa');
     }
   }
   d++;8
}


function numRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
