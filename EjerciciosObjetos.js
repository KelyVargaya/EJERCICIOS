var assert = require('assert');

// Ejercicios de Objetos

function rectangulos(base, altura){
  this.base = base;
  this.altura = altura;
    this.calcularArea = function(){
    return this.base * this.altura;
  };
}

function persona (nombre, dia, mes, annio){
  this.nombre = nombre;
  this.dia = dia;
  this.mes = mes;
  this.annio = annio;
  this.annioActual = 2017;
  this.edadActual = function actual(){
    return this.annioActual - this.annio;
  };
   }

   function Persona(nombre, edad, pasatiempos) {
     this.nombre = nombre;
     this.edad = edad;
     this.pasatiempos = pasatiempos;
     this.imprimir = function hablar(){
       return ("hola soy " + this.nombre + " tengo " + this.edad + " años y me gusta " + this.pasatiempos);
     };
   }

   var r1 = new rectangulos(4,4);
   var persona1 = new persona ("Kely", 23, "diciembre", 1996, 2017);
   var primeraPersona = new Persona("camilo", 22, ['patinar', 'bailar']);

   describe('Ejercicio de Objetos, Ejercicio 1', function(){
     it('Area de Rectangulos ', function(){
       assert.equal(16, r1.calcularArea());
     });
   });

   describe('Ejercicio de Objetos, Ejercicio 2', function(){
     it('edad de la persona ', function(){
       assert.equal(21, persona1.edadActual());
     });
   });

   describe('Ejercicio de Objetos, Ejercicio 3', function(){
     it('edad de la persona ', function(){
       assert.equal("hola soy camilo tengo 22 años y me gusta patinar,bailar", primeraPersona.imprimir());
     });
   });
