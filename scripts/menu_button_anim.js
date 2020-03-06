//-------------------- W3School-Script -------------------------------//
//--------------Slightly modified for this assignment----------------//

	// Get the container element
	let btnContainer = document.getElementById("nav");

	// Get all buttons with class="btn" inside the container
	let btns = btnContainer.getElementsByClassName("menu_button");

	// Loop through the buttons and add the active class to the current/clicked button
	for (let i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function() {
		let current = document.getElementsByClassName("active");

		// If there's no active class
		if (current.length > 0) { 
		current[0].className = current[0].className.replace(" active", "");
		}

		// Add the active class to the current/clicked button
		this.className += " active";
		});
	} 
//-----------------------End W3School-Script -----------------------------//	
