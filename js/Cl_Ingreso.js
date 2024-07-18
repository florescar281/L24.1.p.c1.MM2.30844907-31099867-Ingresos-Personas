export default class Cl_Ingreso{

    constructor(){
        this.acumIngreso = 0;
        this.contPersonas = 0;
        this.mayor = 0;
        this.auxNombre = " ";
    }

    procesarPersona(p){
        if(p.monto > this.mayor){
            this.mayor = p.monto;
            this.auxNombre = p.Nombre;
        }

        if (p.Sexo == "F"){
            this.acumIngreso += p.monto;
            this.contPersonas++;
        }
    }

    mostrarNombre(){
        return this.auxNombre;
    }

    mostrarPromedio(){
        return this.acumIngreso / this.contPersonas;
    }

    mostrarMayor(){
        return this.mayor;
    }
}