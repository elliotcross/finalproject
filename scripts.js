function validateForm()
{
	var validName = false;
	var re = /^[A-Za-z]+$/; 
	var validEmail = false;
	var userEmail = document.getElementById("email").value;
	var atpos = userEmail.indexOf("@");
	var dotpos = userEmail.lastIndexOf(".");

	var errormsgs ="";
	
	//validate Name field is not empty, has no more than 100 characters using alphabetic characters only
	if (myForm.name.value.length > 100 || myForm.name.value===null || myForm.name.value==="" || !re.test(myForm.name))
			errormsgs += "<p>Name is required and must be no more than 100 characters. No numbers or special characters allowed.</p>";
				else
					validName = true;
				
	//validate Email field has a valid formatted email address
	if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length)
			errormsgs += "<p>Invalid email</p>";
				else
					validEmail = true;
				
	
	document.getElementById("errormsgs").innerHTML = errormsgs;
	
	return (validName && validEmail);
	}

