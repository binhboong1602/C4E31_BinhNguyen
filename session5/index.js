// Serious exercises:

// 1 Follow the HTML
// 
	let button= document.getElementById('btn-demo');
	let input= document.getElementById('demo-input');
	let a= document.getElementById('demo-a')
	let link= a.href

	button.addEventListener('click', () =>{
		input.value = link
	})



	// let btn-demo = document.getElementById('btn-demo');
	// let a_link = document.getElementById('demo-a');
	// let input_link = document.getElementById('demo-input');
	// demo.onclick = (function (e) {e.preventDefault();demo-input.value = a.getAttribute('href');
	// });
	// 	btn-demo.onclick = (function () {
	// 	demo-input.value = btn-demo.value;
	// 	});

	2
	function remove() {
		let deleteselect = document.getElementById('select');
		deleteselect.remove(deleteselect.selectIndex);

	}

	3
	function myFunction() {
  var x = document.getElementById("myTable").rows[0].cells.length;
  document.getElementById("demo").innerHTML = "Found " + x + " cells in the first tr element.";
}