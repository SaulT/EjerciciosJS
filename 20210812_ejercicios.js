// Ejercicio 1:
/**
 * Construye un algoritmo bajo las siguientes reglas:
 *
 * 1) Itera un arreglo utilizando un ciclo for
 * 2) Imprime en consola los valores que sean mayores 3
 *
    var arr = [1, 4, 6, 10, 22, 55, 46, 2, 5, 0]
 */

var arr = [1, 4, 6, 10, 22, 55, 46, 2, 5, 0]
for (var i=0; i<arr.length; i++){
    if (arr[i]>3){
        console.log(arr[i]);
    }
}



// Ejercicio 2:
/**
 * Construye un algoritmo bajo las siguientes reglas
 * 1) Declara un arreglo vacío
 * 2) Con un ciclo While que se ejecute 5 veces, agrega los elementos al array
 * Nota: recuerda incrementar la variable contador para que pueda incrementar el ciclo
 */

var arreglo=[];
var i=1;
while(i<=5){
    arreglo.push(i);
    i++;
}
console.log(arreglo);


function suma(a, b){
    return a+b;
}
console.log("La suma de dos valores es: ", suma(5, 2));

function sumaArreglo(arreglo){
    var suma=0;
    for (var i = 0; i < arreglo.length; i++){
        suma+=arreglo[i];
    }
    return suma;
}
console.log("La suma de elementos del arreglo es: ", sumaArreglo([5, 2, 3]));