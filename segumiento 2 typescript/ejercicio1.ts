let mensaje:string = "arle un 5 ahi suave porfa";
console.log(mensaje);
console.log(typeof(mensaje));

function suma(a:number , b:number) {
    if(a <= 8 || b <= 8) {
        throw new Error ("Los numeros deben ser mayores a 8")
    }
    return a + b;
}

const num1 = 13;
const num2 = 15;

const resultado = suma(num1, num2);
console.log(resultado); 