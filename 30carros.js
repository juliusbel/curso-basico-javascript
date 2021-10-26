function auto(marca, modelo, anios){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}

var autos = [];

for(var i = 0; i < 30; i++){
    j = i+1;
    var marca = "marca " + j;
    var modelo = "modelo " + j;
    var anio = 1990 + j;
    autos.push(new auto(marca,modelo,anios));
}

for(var i = 0; i < autos.length; i++){
    console.log(autos[i]);
}