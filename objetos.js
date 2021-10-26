var miAuto = {
    marca: "Toyota",
    modelo: "Corola",
    anio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.anio}`);
    }
};

miAuto.marca;
miAuto.detalleDelAuto;

function auto(marca, modelo, anio,){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}

var autoNuevo = new auto("Tesla","Model 3",2020);
var autoNuevo2 = new auto("Tesla", "Model X", 2018);
var autoNuevo3 = new auto("Toyoya", "Corolla", 2018);
