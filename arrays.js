var frutas = ["Manzana","Platano","Cereza","Fresa"];

console.log(frutas.length);

console.log(frutas[2]);

var masFrutas = frutas.push("Uvas"); // Agrega un elemento al final array

var ultimo = frutas.pop("Uvas"); // Elimina el ultimo elemento del array

var nuevaLongitud = frutas.unshift("Uvas");// Agrega un elemento al inicio del arrary

var borrarFruta = frutas.shift("Uvas"); // Elimina el primer elemento del array

var posicion = frutas.indexOf("Cereza");// indica la posicion del elemento en el array

var articulos = [
    {nombre: "Tele", costo: 30000},
    {nombre: "Celular", costo: 15000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 3000},
    {nombre: "Libro", costo: 1500}
];

var articuloFiltrado = articulos.filter(function(articulo){
    return articulo.costo <= 3000;
});

var articuloMapeado = articulos.map(function(articulo){
    return articulo.nombre;
});

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "laptop";
});

 articulos.forEach(function(articulo){
    console.log(articulo.nombre);
 });

 var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
 });