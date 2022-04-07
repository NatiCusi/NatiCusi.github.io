let emailElement = document.querySelector('#email');
console.log(emailElement);
let messageElement = document.querySelector('#message');
let submitButton = document.querySelector('#submit-button');
submitButton.addEventListener("click", function(e){
	e.preventDefault(); 
	let emailValue=emailElement.value;
	let messageValue=messageElement.value;
	console.log("Email:", emailValue);
	console.log('Message:', messageValue);
	console.log("clicked button");
	if (messageValue.includes('crap')){
		if(emailValue.includes('@')){
			alert('This message is not safe for work');
		} else{
			alert('This message is not safe for work and your email is not valid');
		}
	} else {
		if(emailValue.includes('@')){
			alert('Thank you for your message. I will answer as soon as possible');
		} else {
			alert('Oh No! That does not look like a valid email adress. Please try again!');
	}
	}
}	
);
