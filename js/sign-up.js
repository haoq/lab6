//signup.js/ add your JavaScript code to this file

//Qingying Hao, INFO 343A, Lab6.
//I did all the optional steps. 

//function that will be called when the 
//document is ready for 
$(function(){
    //document is now ready for manipulation
    var stateSelect = $('.us-states');
    var idx;
    var state;
    var option;
    for(idx = 0; idx < usStates.length; ++idx) {
    	state = usStates[idx];
    	option = $(document.createElement('option'));
		option.attr('value', state.abbreviation);
		option.html(state.name);
		stateSelect.append(option);    	
    }

    $('.signup-form').submit(function(){
    //code to execute when the sign-up form is submitted
    //this is the raw DOM form element
    //wrap it in a jQuery object so we can use jQuery methods on it
    var signupForm = $(this);
    var reqField;       //reference to a required field
    var reqValue;       //the required field's value
    var testArr = ['first-name', 'last-name', 'email'];
    //find the input with name="first-name" and get its trimmed value
    for(var i = 0; i < testArr.length; ++i) {
    	var item = testArr[i];
    	reqField = signupForm.find('input[name=' + item + ']');
    	reqValue = reqField.val().trim();
    	if (0 === reqValue.length) {
        //field has no value
       	 alert('You must enter a ' + item + '!');
       	 return false;
    	}
    }
    
    //select a descendant input element with the name "addr-1"
    var addr1Input = signupForm.find('input[name="addr-1"]');
    var addr1Value = addr1Input.val();
    if(addr1Value.length > 0) {
    	var zipInput = signupForm.find('input[name="zip"]');
   		var zipValue = zipInput.val();
   		var value = (null != zipValue && zipValue.length > 0);
   		if(!value) {
   			alert('Zip code needed when the first line address has been entered!');
   			 return false;
   		}
    }

	});

	$('select[name="refer"]').change(function(){
    //get a ref to the refer select
    //add the refer-other input
    	var referSelect = $(this);
    	var otherInput = $('[name="refer-other"]');

    //if the refer select's value in lower case is equal to "other"...
    	if ('other' === referSelect.val().toLowerCase()) {
        //remove the disabled attribute from the
        //refer-other input, show it, and set focus to it
        	otherInput.removeAttr('disabled');
        	otherInput.show();
        	otherInput.focus()
    	}
    	else {
        //otherwise, make the refer-other input disabled
        //and hide it
        	otherInput.attr('disabled', true);
       	 	otherInput.hide();
    	}
	}); //refer change function


	$('.cancel-signup').click(function(){
    //code to run when user clicks "No Thanks!" button
    	$('.cancel-signup-modal').modal();
	}); //cancel-signup click

	$('.btn-abandon').click(function(){
    window.location = 'http://www.google.com';
	});

}); //on document ready 
