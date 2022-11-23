function validateForm()
{
	var validName = false;
	var re = /^[A-Za-z]+$/; 
	var validEmail = false;
	var atpos = myForm.email.indexOf("@");
	var dotpos = myForm.email.lastIndexOf(".");

	var errormsgs ="";
	
	//validate Name field is not empty, has no more than 100 characters using alphabetic characters only
	if (myForm.name.value.length > 100 || myForm.name.value===null || myForm.name.value==="" || !re.test(myForm.name))
			errormsgs += "<p>Name is required and must be no more than 100 characters. No numbers or special characters allowed.</p>";
				else
					validName = true;
				
	//validate Email field has a valid formatted email address
	if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=myForm.email.length)
			errormsgs += "<p>Invalid email</p>";
				else
					validEmail = true;
				
	//validate Username field is not empty, has no more than 100 characters
	if (myForm.email.value.length > 100 || myForm.email.value===null || myForm.email.value==="")
			errormsgs += "<p>Email is required and must be no more than 100 characters.</p>";
				else
					validUsername = true;
	
	document.getElementById("errormsgs").innerHTML = errormsgs;
	
	return (validName && validEmail);
	}

