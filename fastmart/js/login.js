function validate () {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if ( username == "tim" && password == "tim") {
		window.location = "fastmart.html";
	}
	else if ( username == "karen" && password == "karen") {
		alert ("Login successful");
		window.location = "index.html";
	}
	else alert ("Login Failed");
		return false;
}