var assert = require('assert');

function totalMul(num,arr){
   var total= arr.reduce(function(a,b){

      return (a*b);
   });
  return total*num;
}

var telefonos=[784123123,454123784,453145235];
var validar=784;
	function telefono(celular,num){
	var resultado=celular.filter(function(tel){
	tel=tel.toString();
	num=num.toString();

	if(tel.substr(0,3) == num || tel.substr(-3) == num){
		return true;

	}
 		else{ return false;}

});

return resultado;
}


function multiplo(array,x)
{
	var num=[];
	array.forEach( function(item) {
		if (item%x==0) {
      num.push(item);}
	});
	return num;
}

function doblesyUno(arr){
var doubles = arr.map(function(x) {
   return ((x*2) +1);
});
  return doubles;
}

function Conversor(arr){
var Fahrenheit = arr.map(function(x){
   return (((9/5)*x) + 32);

});
return Fahrenheit;
}

function productoArreglo(arr){
   var total= arr.reduce(function(a,b){
      return (a*b);
   });
  return total;
}

function fecha(array)
{
	var num=[];
	array.forEach(function(item) {
		if (item>18) num.push(2017-item);
	}
);
	return num;
}


describe('Ejercicio de Arreglos, Ejercicio 1', function(){
  it('8640 debe ser el resultado', function(){
    assert.equal(8640, totalMul(9,[4,4,5,12]));
  });
});

describe('Ejercicio de Arreglos, Ejercicio 2', function(){
  it('Numero de telefonos validos ', function(){
    assert.deepEqual([784123123,454123784], telefono([784123123,454123784,453145235],784));
  });
});

describe('Ejercicio de Arreglos, Ejercicio 3', function(){
  it('Multiplosss', function(){
    assert.deepEqual([7,21,77,35], multiplo([7,21,44,80,77,35],7));
  });
});

describe('Ejercicio de Arreglos, Ejercicio 4', function(){
  it('Dobless de Arreglos mas 1', function(){
    assert.deepEqual([5,11,15,5,7,17,21], doblesyUno([2,5,7,2,3,8,10]));
  });
});

describe('Ejercicio de Arreglos, Ejercicio 5', function(){
  it('Coversor de Temperatura grados Celsius a Fahrenheit', function(){
    assert.deepEqual([35.6, 37.4, 39.2], Conversor([2,3,4]));
  });
});

describe('Ejercicio de Arreglos, Ejercicio 6', function(){
  it('Multiplicacion de los elementos del arreglo', function(){
    assert.deepEqual(24, productoArreglo([1,2,3,4]));
  });
});

describe('Ejercicio de Arreglos, Ejercicio 7', function(){
  it('Años de nacimiento para las personas mayores de 18', function(){
    assert.deepEqual([1997, 1928], fecha([20,16,89,6]));
  });
});
