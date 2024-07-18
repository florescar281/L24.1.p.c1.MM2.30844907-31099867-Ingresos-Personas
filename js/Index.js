/*
Se dispone de los siguientes datos de varias personas: (nombre, sexo, ingreso) (Mary, F,
150), (José, M, 135), (Carlos, M, 160), (Pedro, M, 75), (Rosa, F, 120), (Carmen, F, 120) 

Promedio de ingreso de las mujeres: 130
Nombre de la persona con mayor ingreso: Mary con un ingreso de 150$
*/

import Cl_Ingreso from "./Cl_Ingreso.js";
import Cl_Persona from "./Cl_Persona.js";

let salida = document.getElementById("salida");

let ingreso = new Cl_Ingreso();

let p1 = new Cl_Persona("Mary", "F", 150);
let p2 = new Cl_Persona("Jose", "M", 135);
let p3 = new Cl_Persona("Carlos", "M", 160);
let p4 = new Cl_Persona("Pedro", "M", 75);
let p5 = new Cl_Persona("Rosa", "F", 120);
let p6 = new Cl_Persona("Carmen", "F", 120);

ingreso.procesarPersona(p1);
ingreso.procesarPersona(p2);
ingreso.procesarPersona(p3);
ingreso.procesarPersona(p4);
ingreso.procesarPersona(p5);
ingreso.procesarPersona(p6);

salida.innerHTML = `
    Promedio de ingreso de las mujeres: ${ingreso.mostrarPromedio()}<br>
    Nombre de la persona con mayor ingreso: ${ingreso.mostrarNombre()} con un ingreso de ${ingreso.mostrarMayor()}$
`;