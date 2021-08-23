/*
You should set up some constants for the “tax rate,” “phone
price,” “accessory price,” and “spending threshold,” as well as a
variable for your “bank account balance.”
*/

const tasaImpuesto = 0.08;
const precioTelefono = 99.99;
const precioAccesorio = 9.99;
const umbralGasto = 200;
//var saldoCuentaBancaria = 303.91;
var saldoCuentaBancaria = prompt('¿Cuál es su saldo de cuenta bancaria?');
/*
You should define functions for calculating the tax and for formatting
the price with a “$” and rounding to two decimal
places.
*/
function calcularImpuesto(monto){
    return monto * tasaImpuesto;
}
function formatearPrecio(precio){
    return '$ ' + precio.toFixed(2);
}

/*
Write a program to calculate the total price of your phone purchase.
You will keep purchasing phones (hint: loop!) until you
run out of money in your bank account. You’ll also buy accessories
for each phone as long as your purchase amount is below
your mental spending threshold.
*/
var monto = 0;
while(monto < saldoCuentaBancaria){
    monto = monto + precioTelefono;
    if(monto < umbralGasto){
        monto = monto + precioAccesorio;
    }
}

/*
After you’ve calculated your purchase amount, add in the tax,
then print out the calculated purchase amount, properly formatted.
*/
monto = monto + calcularImpuesto(monto);
//console.log('El costo total de la compra es: ' + formatearPrecio(monto));
alert('El costo total de la compra es: ' + formatearPrecio(monto));

/*
Finally, check the amount against your bank account balance to
see if you can afford it or not.
*/
if(monto > saldoCuentaBancaria){
    //console.log('Compra no permitida');
    alert('Compra no permitida');
}
