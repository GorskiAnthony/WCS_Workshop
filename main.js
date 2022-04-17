// Create a "close" button and append it to each list item
const myNodelist = document.getElementsByTagName("LI");
for (let i = 0; i < myNodelist.length; i++) {
	const span = document.createElement("SPAN");
	const txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
const close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
	close[i].onclick = function () {
		const div = this.parentElement;
		div.style.display = "none";
	};
}

// Add a "checked" symbol when clicking on a list item
const list = document.querySelector("ul");
list.addEventListener("click", function (event) {
	if (event.target.tagName === "LI") {
		event.target.classList.toggle("checked");
	}
});

// Create a new list item when clicking on the "Add" button
function newElement() {
	// Create a new <li> element
	const li = document.createElement("li");
	const inputValue = document.getElementById("myInput").value;
	const text = document.createTextNode(inputValue);
	li.appendChild(text);
	if (inputValue === "") {
		alert("You must write something!");
	} else {
		document.getElementById("myUL").appendChild(li);
	}
	document.getElementById("myInput").value = "";

	// Create a "close" button and append it to each list item
	const span = document.createElement("SPAN");
	const txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);

	for (i = 0; i < close.length; i++) {
		close[i].onclick = function () {
			const div = this.parentElement;
			div.style.display = "none";
		};
	}
}
