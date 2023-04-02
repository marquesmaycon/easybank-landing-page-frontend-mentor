const body = document.querySelector("body");
const btnHamburguer = document.querySelector("#btnHamburguer");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

btnHamburguer.addEventListener("click", () => {
	if (header.classList.contains("open")) { // Close Hamburguer Menu
		body.classList.remove("noscroll");
		header.classList.remove("open");
		fadeElems.forEach(el => {
			el.classList.remove("fade-in");
			el.classList.add("fade-out");
		})

	} else { // Open Hamburguer Menu
		body.classList.add("noscroll");
		header.classList.add("open");
		fadeElems.forEach(el => {
			el.classList.remove("fade-out");
			el.classList.add("fade-in");
		});

	}
});
