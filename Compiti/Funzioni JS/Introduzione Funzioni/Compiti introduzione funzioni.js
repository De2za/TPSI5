//Esercizio 1
function saluta() {return "Ciao!"}
const s1 = saluta;
const s2 = saluta();

console.log(typeof s1);
console.log(typeof s2);
console.log(s1());

//Esercizio 2

console.log('           ')
console.log('esercizio 2')

function raddoppia (n){return n* 2;}
function incrementa(n){return n+1;}
function applica(f, x){return f(x)}

applica(raddoppia, 21);
applica(incrementa, 41);
applica(raddoppia, applica(incrementa, 4));
console.log(applica(raddoppia, 21))
console.log(applica(incrementa, 41))
console.log(applica(raddoppia, applica(incrementa, 4)))

//Esercizio 3

function applicaDueVolte(f, x){return f(f(x));}
console.log('           ')
console.log('esercizio 3')
console.log(applicaDueVolte(raddoppia, 5))
console.log(applicaDueVolte(incrementa, 5))
console.log(applicaDueVolte(raddoppia, '3'))

//Esercizio 4
function applicaNvolte(f,n,x){
  if (x === 0){return x}
  else {for(let i = 0; i < n ; i++){x = f(x)}
  return x;}
}
console.log('           ')
console.log('esercizio 4')
console.log(applicaNvolte(raddoppia, 10, 1))
console.log(applicaNvolte(incrementa, 3, 7))
console.log(applicaNvolte(incrementa, 0, 7))

//Esercizio 5
function isNumeroValido(x){if (typeof x === 'number' && !Number.isNaN(x)){
  return true;}
  else{return false;}

}

function isStringaNonVuota(x){if(typeof x === 'string' && x !== ''){
  return true
}
else{return false}
}
function isFunzione(x){if(typeof x === 'function'){return true;}
else{return false;}}

console.log('           ')
console.log('esercizio 5')
console.log(isNumeroValido(3))
console.log(isNumeroValido("3"))
console.log(isNumeroValido(NaN))
console.log(isStringaNonVuota("Orione"))
console.log(isStringaNonVuota(""))
console.log(isStringaNonVuota(5))
console.log(isFunzione(raddoppia))
console.log(isFunzione(raddoppia(2)))

//Esercizio 6

function applicaSicuro(f,x){if(typeof f !== 'function'){return 'Errore: non e una funzione'}
else if(!isNumeroValido(x)){return 'Errore: valore non numerico'}
else{return f(x)}}

console.log('           ')
console.log('esercizio 6')
console.log(applicaSicuro(raddoppia, 4))
console.log(applicaSicuro(raddoppia(4), 4))
console.log(applicaSicuro(raddoppia, "4"))
console.log(applicaSicuro(incrementa, NaN))



