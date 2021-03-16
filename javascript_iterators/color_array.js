const colors = ["yellow", "blue", "red", "orange"]

//While loop
var i = 0;

while (i < colors.length) {
    console.log(`De huidige kleur is ${colors[i]}`);
    i++;
}

console.log("====================================")

for (i=0; i < colors.length; i++) {
    console.log(`De huidige kleur is ${colors[i]}`)
}

console.log("====================================")

//array method forEach
colors.forEach(myFunction);

function myFunction(item, index) {
    console.log(`Index ${index} is kleur ${item}`)
};

/* Hoeveel regels neemt mijn for loop en mijn while loop in beslag? - Antwoord while 6, for 3
Hoeveel regels neemt mijn forEach method in beslag? Antwoord foreach 5
Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop?
Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom? Ik vind de for loop op zich het
makkelijkst leesbaar, als het inclusief de code in de loop gaat. foreach is minder foutgevoelig
omdat je geen start en eindwaarde hoeft mee te geven + je hoeft geen increment mee te geven.
Dat je altijd een functie eraan moet koppelen is even wennen voor me.
Kun je een array method gebruiken op een object? Het antwoord is nee. */