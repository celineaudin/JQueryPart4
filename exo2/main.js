$(function(){
	$("#calcul").click(function(){
var note1 = $("#note1").val();
var note2 = $("#note2").val();
var note3 = $("#note3").val();
var note4 = $("#note4").val();
var note5 = $("#note5").val();
if (note1 && note2 && note3 && note4 && note5 && note1 <=20 && note2 <= 20 && note3 <= 20 && note4 <= 20 && note5 <= 20){
	var moyenne = (parseInt(note1) + parseInt(note2) + parseInt(note3) + parseInt(note4) + parseInt(note5))/5;
	alert ('Votre moyenne est de : ' + moyenne);
}else if (note1 > 20 || note2 > 20 || note3 > 20 || note4 > 20 || note5 > 20){
alert ('Les notes ne peuvent pas être supérieur à 20 !!!');
}else {
	alert ('Vérifier tout les champs !!');
}
});
});



// $(document).ready(function(){
// 	$('#getAve').on('click', function(){
// 		var grades = [];
// 		$('.grade').each(function(){
// 			if($(this).val() == ""){
// 				alert("Please complete the required field");
// 				return false;
// 			}
//
// 			grades.push($(this).val());
// 		});
//
// 		var sum = eval(grades.join('+')), avg = sum / grades.length;
// 		if(avg >= 10){
// 			$('#result').html("<center>The average is <label class='text-primary'>"+ avg.toFixed(0) +", </label> <label class='text-success'>You passed!</label></center>");
// 		}else if(avg < 10){
// 			$('#result').html("<center>The average is <label class='text-primary'>"+ avg.toFixed(0) +", </label> <label class='text-danger'>You failed!</label></center>");
// 		}
// 	});
//
// 	$('#addField').on('click', function(){
// 		var newField = $('<br /><input type="number" placeholder="Enter a number" class="form-control grade" min="0" max="100"/>');
// 		newField.appendTo($('#data'));
// 	});
//
// 	$('#reset').on('click', function(){
// 		window.location = "index.html";
// 	});
//
//
// });
