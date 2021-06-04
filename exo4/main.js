$(function(){
$("#btn").click(function(){
	var firstName = $('#contact_name').val();
	var lastName = $('#contact_lastName').val();
	var birthDate = $('#contact_birthDate').val();
	var birthPlace = $('#contact_birthPlace').val();
	var work = $('#contact_work').val();
	var firm = $('#contact_firm').val();

	var validFirstName = /^[A-Z][a-z'éè]+([-][A-Za-z][a-z]+)?$/;
	var validLastName = /^[A-Z][a-z'éè]+([-][A-Za-z][a-z]+)?$/;
	var validBirthPlace = /^[A-Z][a-z']+([-][A-Za-z][a-z]+)?$/;
	var validBirthDate = /^([0-2][0-9]|(3)[0-1])+\/(0[1-9]|1[0-2])\/(19|20)[0-9]{2}$/;

	if(!validFirstName.test(firstName)){
		$('#contact_name').css('border','2px solid red');
			$('#errorName').html('Vérifier votre saisie').css('color', 'red');
			return false;
	}else{
		$('#contact_name').css('border','2px solid green');
	}
	if(!validLastName.test(lastName)){
		$('#contact_lastName').css('border','2px solid red');
			$('#errorLastName').html('Vérifier votre saisie').css('color', 'red');
			return false;
	}else{
		$('#contact_lastName').css('border','2px solid green');
	}
	if(!validBirthDate.test(birthDate)){
		$('#contact_birthDate').css('border','2px solid red');
			$('#errorBirthDate').html('Vérifier votre saisie').css('color', 'red');
			return false;
	}else{
		$('#contact_birthDate').css('border','2px solid green');
	}
	if(!validBirthPlace.test(birthPlace)){
		$('#contact_birthDate').css('border','2px solid red');
			$('#errorBirthPlace').html('Vérifier votre saisie').css('color', 'red');
			return false;
	}else{
		$('#contact_birthPlace').css('border','2px solid green');
	}if(work){
		$('#contact_work').css('border','2px solid green');
	}else if(!work){
		$('#contact_Work').css('border','2px solid red');
		$('#errorWork').html('Vérifier votre saisie').css('color', 'red');
		return false;
	}if(firm){
		$('#contact_firm').css('border','2px solid green');
	}else if(!firm){
		$('#contact_firm').css('border','2px solid red');
		$('#errorFirm').html('Vérifier votre saisie').css('color', 'red');
		return false;
	}if(true){
alert('Prénom : ' + lastName + ' ; Nom : ' + firstName + ' ; Date de naissance : ' + birthDate + ' ; Lieu de naissance : ' + birthPlace + ' ; Emploi : ' + work + ' ; Société : ' + firm);
}

});
});


// // Name
// $('#contact_name').on('input', function() {
// 	var input=$(this);
//   var re = /^[A-Z][a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
// 	var is_name=re.test(input.val());
// 	if(is_name){input.removeClass("invalid").addClass("valid");}
// 	else{input.removeClass("valid").addClass("invalid");}
// });
// // lastName
// $('#contact_lastName').on('input', function() {
// 	var input=$(this);
//   var re = /^[A-Z][a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
// 	var is_lastName=re.test(input.val());
// 	if(is_lastName){input.removeClass("invalid").addClass("valid");}
// 	else{input.removeClass("valid").addClass("invalid");}
// });
// // Date of birth must be an a date of birth
// $('#contact_birthDate').on('input', function() {
// 	var input=$(this);
// 	var re = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
// 	var is_birthDate=re.test(input.val());
// 	if(is_birthDate){input.removeClass("invalid").addClass("valid");}
// 	else{input.removeClass("valid").addClass("invalid");}
// });
// // Place of birth must be a place of birth
// $('#contact_birthPlace').on('input', function() {
// 	var input=$(this);
// 	var re = /^[A-Z][a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
// 	var is_birthPlace=re.test(input.val());
// 	if(is_birthPlace){input.removeClass("invalid").addClass("valid");}
// 	else{input.removeClass("valid").addClass("invalid");}
// });
// // Work title must be a work title
// $('#contact_work').on('input', function() {
// 	var input=$(this);
// 	var re = /^[A-Z][a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
// 	var is_work=re.test(input.val());
// 	if(is_work){input.removeClass("invalid").addClass("valid");}
// 	else{input.removeClass("valid").addClass("invalid");}
// });
// // Firm name must be a firm name
// $('#contact_firm').on('input', function() {
// 	var input=$(this);
// 	var re = /^[A-Z][a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
// 	var is_firm=re.test(input.val());
// 	if(is_firm){input.removeClass("invalid").addClass("valid");}
// 	else{input.removeClass("valid").addClass("invalid");}
// });





// After Form Submitted Validation
// $("#btn").click(function(event){
// 	var form_data=$("#contact").serializeArray();
// 	var error_free=true;
// 	var str = $("#contact_submit").val();
// 	for (var input in form_data){
// 		var element=$("#contact_"+form_data[input]['name']);
// 		var valid=element.hasClass("valid");
// 		var error_element=$("span", element.parent());
// 		if (!valid){error_element.removeClass("error").addClass("error_show"); error_free=false;}
// 		else{error_element.removeClass("error_show").addClass("error");}
// 	}
// 	if (!error_free){
// 		event.preventDefault();
// 	}
// 	else{
// 		alert();
// 	}
// 	});
