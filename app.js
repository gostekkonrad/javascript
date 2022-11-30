console.log(100 - 50)
let pi = 3.14;
let imie = "Konrad";
let nazwisko = "Radon";

console.log(100 + pi)
console.log(imie + " " + nazwisko)
imie = "janek"
nazwisko = "Kowalski"
console.log(imie + " " + nazwisko);
let osoba1 = {
	imie: 'Kacper',
	nazwi: 'Skrzypce'
};
console.log(osoba1.imie + ' ' + osoba1.nazwi);
let osoba2 = {
	imie: "Konrad",
	nazwi: "Radon"
};
let powitanie = "WITAJ!"




console.log(osoba2.imie + ' ' + osoba2.nazwi);
console.log(osoba1.imie + ' ' + osoba2.nazwi);

/*alert(osoba1.imie + ' ' + osoba2.nazwi);
document.getElementById("tekst").style.color = "blue";
alert(document.getElementById("tekst").style.color);*/

alert(powitanie);

const przycisk = document.getElementById("przycisk");
przycisk.addEventListener('click', function onClick(event){
	document.body.style.color = "magenta";
});

const guzik = document.getElementById("guzik");
guzik.addEventListener('click', function onClick(event) {
	event.target.style.color = "salmon";
});



function myFunction() {
  let person = prompt("Podaj twoje imię", "Konrad");
  if (person != null) {
    document.getElementById("imie").innerHTML =
    "Witaj " + person + "! Jak sie masz?";
  }
}

function kalkulator(operator){
	var a = document.getElementById('a').value;
	var b = document.getElementById('b').value;
	switch(operator)
	{
		case "+":
			var wynik = parseFloat(a) + parseFloat(b);
		break;
		case "-":
			var wynik = parseFloat(a) - parseFloat(b);
		break;
		case "x":
			var wynik = parseFloat(a) * parseFloat(b);
		break;
		case "/":
		var wynik = parseFloat(a) / parseFloat(b);
		break;
	}
	document.getElementById("c").value = wynik;
}