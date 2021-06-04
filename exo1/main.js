$(function(){
  var numberGame = 0;
  var numberWin = 0;
  var percentWin = 0;

  $("#button").click(function(){
    numberGame++;
    var computerChoice = Math.floor(Math.random()*3)+1;
    var userChoice = $("#select").val();
if(userChoice == computerChoice){
  alert ('égalité !');
}else if((userChoice == 1 && computerChoice == 2) || (userChoice == 2 && computerChoice == 3) || (userChoice == 3 && computerChoice == 1)){
  alert ("perdu !");
}else{
  numberWin++;
  alert ("gagné !");
}
percentWin = numberWin*100/numberGame;
alert (percentWin + "%" + "de victoires !");
});
});



//
// $("#scissors").on('click', function(){
//   var result = compare('scissors', computerChoice());
//   $("#decision").html(result);
// });
//
// $('#rock').on('click', function(){
//   var result = compare('rock', computerChoice());
//   $("#decision").html(result);
// });
//
// $('#paper').on('click', function(){
//   var result = compare('paper', computerChoice());
//   $("#decision").html(result);
// });
//
//
// var compare = function(me, opponent) {
//   if(me === 'rock') {
//
//       if(opponent === 'rock') {
//           return 'Tie';
//       } else if (opponent === 'paper') {
//         return 'Ma pierre a perdu contre la feuille :(';
//       } else if (opponent === 'scissors') {
//         return 'Ma pierre a gagné contre les ciseaux ! :)';
//       }
//
//   } else if (me === 'paper') {
//
//       if(opponent === 'paper') {
//         return 'Tie';
//       } else if (opponent === 'rock') {
//         return 'Ma feuille a gagné contre la pierre:)';
//       } else if (opponent === 'scissors') {
//         return 'Ma feuille a perdu contre les ciseaux :()';
//     }
//   } else if (me === 'scissors') {
//
//       if(opponent === 'scissors') {
//         return 'Tie';
//       } else if (opponent === 'paper') {
//         return 'Mes ciseaux ont gagné contre la feuille :)';
//       } else if (opponent === 'rock') {
//         return 'Mes ciseaux ont perdu contre la pierre :(';
//     }
//   } else {
//     return "Ceci ne fait pas de sens !"
//   }
// };
// var computerChoice = function() {
//         var random = Math.random();
//         if (random < 0.333) {
// 	      return  'rock';
//         } else if(random < 0.67777) {
// 	      return 'paper';
//         } else {
// 	      return 'scissors';
//         }
// };
