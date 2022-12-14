function setHalfVolume() {
    var myAudio = document.getElementById("audio1");  
    myAudio.volume = 0.5;
}

function validateForm()
{
	var validName = false;
	var validEmail = false;
	var re = /^[A-Za-z\s]*$/
	var userEmail = document.getElementById("email").value;
	var atpos = userEmail.indexOf("@");
	var dotpos = userEmail.lastIndexOf(".");

	var errormsgs ="";
	
	//validate Name field is not empty, has no more than 100 characters
	if (myForm.name.value===null || myForm.name.value==="" || !re.test(myForm.name.value))
			errormsgs += "<p>Name is required. No numbers or special characters.</p>";
				else
					validName = true;
				
	//validate Email field has a valid formatted email address
	if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length || userEmail.value===null || userEmail.value==="")
			errormsgs += "<p>Valid email is required.</p>";
				else
					validEmail = true;
				
	
	document.getElementById("errormsgs").innerHTML = errormsgs;
	
	return (validName && validEmail);
	}

