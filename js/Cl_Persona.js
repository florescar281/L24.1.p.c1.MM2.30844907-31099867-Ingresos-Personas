export default class Cl_Persona{
    constructor(n, s, m){
        this.Nombre = n;
        this.Sexo = s;
        this.monto = m;
    }

    set monto(m){
        this._monto = m;
    }

    get monto(){
        return this._monto;
    }

    set Nombre(n){
        this._nombre = n; 
    }

    get Nombre(){
        return this._nombre;
    }

    set Sexo(s){
        this._sexo = s;
    }

    get Sexo(){
        return this._sexo;
    }
}