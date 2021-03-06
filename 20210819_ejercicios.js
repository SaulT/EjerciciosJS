/*
ex. 1
una función que reciba un objeto y un string…
El string va a ser el nombre de una propiedad, y
esa función tiene que validar si existe esa propiedad dentro del objeto que le mandes
la función debe retornar true o false
*/
var Car = {
    wheels: 4,
    company: 'honda',
    name: 'civic',
    year: 2016
}


function validar(objEvaluar, texto) {
    if (objEvaluar.hasOwnProperty(texto)){
        return true
    } else{
        return false
    }
}
console.log(validar(Car, 'company'));



/*
ex. 2
Create an object that will be filled only by a function inside of it, 
and not from someone outside of it's function.. example:
let myObject = {
    myFunction: function ()... // This function is supposed to fill this object
}

myObject.myNewProp = "Hello world" // This should throw an exception or error because we don't want this object to be filled from outside... 
It supposed to be filled using it's own function

Add any type of element on the object.. arrays, objects, int, strings, etc
*/

let myObject = {
    myFunction: function(propiedad, valor){
        Object.defineProperty(myObject, propiedad, {value: valor})
    }
}

//myObject.myFunction('Id', 5);
//console.log(myObject.Id);
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

myObject.myNewProp = "Hello world"
console.log(myObject.myNewProp);

/*
var simpleExercise = [{a: 11, b:224, name: "M48 Bulldog"}, {a:23, b:56, name: "Object 140"}, {a: 32, b:75, name: "T57 Heavy"}];

Hacer una función para que reciba ese arreglo de objetos
y que retorne la suma de "a" y "b" de cada objeto y concatenarlo 
al String "name" para que devuelva algo así:

["235 M48 Bulldog-=-79 Object 140-=-107 T57 Heavy" ]
*/

var simpleExercise = [{a: 11, b:224, name: "M48 Bulldog"}, {a:23, b:56, name: "Object 140"}, {a: 32, b:75, name: "T57 Heavy"}];

function concatenar(arreglo){
    return arreglo.map((element)=>{
        return element.a + element.b + ' ' + element.name;
    });
}
console.log(concatenar(simpleExercise));
console.log(concatenar(simpleExercise).join('-=-'));