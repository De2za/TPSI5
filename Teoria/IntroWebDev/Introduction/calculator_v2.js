const n1Elem = document.getElementById("n1");
const n2Elem = document.getElementById("n2");
const calcolBtn = document.getElementById("calcolaBtn");

const op = document.getElementById("operation");
const resElem = document.getElementById("result");

//JS OBJ = hashmap -> k,v
const operations = {
 '+': (a,b) => a + b,
 '-': (a,b) => a - b,
 '/': (a,b) => {
    if (b===0) throw new Error("Denominator is zero")
        return a/b;
 }

}

function compute(f, a, b) {
    return f(a, b)
}

calcolBtn.addEventListener("click", function() {
    const a = Number(n1Elem.value);
    const b = Number(n2Elem.value);

    try {
        resElem.textContent = compute(operations[op.value], a, b);

    } catch (err) {
        resElem.textContent = err.message;
    }

    console.log("Done");
});

//Eseguo quando html è renderizzato
document.addEventListener("DOMContentLoaded", () => {
    //setTimeout setInterval
    setTimeout(() => console.log("qui"), 2000);
});

