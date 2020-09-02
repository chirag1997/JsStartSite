let myImage = document.querySelector('img');

myImage.onclick = function imageClick() {                                    // Document Object Model API   
	// body...
	let mySrc = myImage.getAttribute('src');

	if(mySrc === 'images/covid.jpg')
		myImage.setAttribute('src','images/covid2.jpg');
	else 
		myImage.setAttribute('src','images/covid.jpg');
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');



function setNewHeading()
{
	let newHeading = prompt('Enter New Heading');
	if(!newHeading)
		setNewHeading();
	else
	{
	localStorage.setItem('heading', newHeading);             //Web Storage API
	myHeading.textContent = newHeading;
    }
}

if(!localStorage.getItem('heading'))
{
	setNewHeading();
}
else
{
	let storedHeading = localStorage.getItem('heading');
	myHeading.textContent = storedHeading;
}

myButton.onclick = function() {
setNewHeading();
}