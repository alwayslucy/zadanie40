let przycisk = document.querySelector("button");
let poleimie = document.getElementById("imie");
let polenazwisko = document.getElementById("nazwisko");
let poletel = document.getElementById("nrtel");
let paragrafimie = document.getElementById("name");
let paragrafnazwisko = document.getElementById("surname");
let paragraftel = document.getElementById("phone");

przycisk.onclick = function() {
    paragrafimie.textContent = poleimie.value;
    paragrafnazwisko.textContent = polenazwisko.value;
    paragraftel.textContent = poletel.value;
}