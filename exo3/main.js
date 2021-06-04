$(function(){
	$("#contact_submit button").click(function(){
	var validFirstName = /^[A-ZÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖ][a-zàáâäãåąčćęèéêëėį']+([-][A-Z][a-z]+)?$/;
	var validLastName = /^[A-ZÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖ][a-zàáâäãåąčćęèéêëėį']+([-][A-Z][a-z]+)?$/;
	var validMail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
	var phoneNumber = /^(06|07)[0-9]{8}$/;
	if (validFirstName.test($("#contact_firstName").val()) == false){
		$("#contact_firstName").css("border", "2px solid red");
	}else {
		$("#contact_firstName").css("border", "2px solid green");
	}
	if (validLastName.test($("#contact_lastName").val()) == false){
		$("#contact_lastName").css("border", "2px solid red");
	}else {
		$("#contact_lastName").css("border", "2px solid green");
	}
	if (validMail.test($("#contact_email").val()) == false){
		$("#contact_email").css("border", "2px solid red");
	}else {
		$("#contact_email").css("border", "2px solid green");
	}
	if (phoneNumber.test($("#contact_telephone").val()) == false){
		$("#contact_telephone").css("border", "2px solid red");
	}else {
		$("#contact_telephone").css("border", "2px solid green");
	}
});
});




// $(document).ready(function() {
// 	//jQuery code goes here
// });
// // Name
// $('#contact_name').on('input', function() {
// 	var input=$(this);
//   var re = /^[a-z ,.'-]+$/i;
// 	var is_name=re.test(input.val());
// 	if(is_name){input.removeClass("invalid").addClass("valid");}
// 	else{input.removeClass("valid").addClass("invalid");}
// });
// // lastName
// $('#contact_lastName').on('input', function() {
// 	var input=$(this);
//   var re = /^[a-z ,.'-]+$/i;
// 	var is_lastName=re.test(input.val());
// 	if(is_lastName){input.removeClass("invalid").addClass("valid");}
// 	else{input.removeClass("valid").addClass("invalid");}
// });
// // Email must be an email
// $('#contact_email').on('input', function() {
// 	var input=$(this);
// 	var re = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
// 	var is_email=re.test(input.val());
// 	if(is_email){input.removeClass("invalid").addClass("valid");}
// 	else{input.removeClass("valid").addClass("invalid");}
// });
// // Telephone must be a telephone
// $('#contact_telephone').on('input', function() {
// 	var input=$(this);
// 	var re = /^0[1-68]([-. ]?[0-9]{2}){4}$/;
// 	var is_telephone=re.test(input.val());
// 	if(is_telephone){input.removeClass("invalid").addClass("valid");}
// 	else{input.removeClass("valid").addClass("invalid");}
// });
//
// // After Form Submitted Validation
// $("#contact_submit button").click(function(event){
// 	var form_data=$("#contact").serializeArray();
// 	var error_free=true;
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
// 		alert('No errors: Form will be submitted');
// 	}
// });
