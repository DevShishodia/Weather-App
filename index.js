// Declaring the variables
let lon;
let lat;
let temperature = document.querySelector(".temp");
let summary = document.querySelector(".summary");
let loc = document.querySelector(".location");
let icon = document.querySelector(".icon");
const kelvin = 273;



	// API ID
	// const api = "6d055e39ee237af35ca066f35474e9df";
    const ACCES_KEY = "09cba7b0c8244664b97122257221601";



    fetch(`http://api.weatherapi.com/v1/current.json?key= ${ACCES_KEY}&q=MEERUT&aqi=yes`)
		.then((response) => {
		return response.json();
		})
		.then((data) => {
		console.log(data);
		temperature.textContent = data.current.temp_c  + "°C";
		summary.textContent = data.condition;
		loc.textContent = data.location.name + "," + data.location.region+',   '+data.location.country;
		let icon1 = data.current.condition.icon;
		icon.innerHTML =
			`<img src="${icon1}" style= 'height:10rem'/>`;
		});
