//Stwórz zmienne potrzebne do wykonania działania (a * a) + (2 * a * b) - (b * b) , 
//a jego wynik przypisz do zmiennej value. Wyświetl wynik w konsoli,

var a = prompt('Wpisz wartość dla a');

var b = prompt('Wpisz wartość dla b');

var value = (a*a) + (2*a*b) - (b*b);

console.log('Wynik wynosi: ' + value);

//następnie za pomocą instrukcji warunkowej sprawdź, czy wynik jest dodatni czy ujemny, a potem wyświetl informację wynik dodatni lub wynik ujemny w konsoli.
//Dodaj instrukcję, która sprawdzi, czy wynik jest równy zero i wyświetli tę informację.

if ( value > 0) { 
	console.log('wynik jest dodatni od zera');
} else if ( value < 0 ) {
	console.log('wynik jest ujemny');
} if ( value = 0) { console.log('wynik jest równy zero');}
