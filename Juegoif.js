var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";

function comparacion(player,cpu){
    if(player == papel && cpu == piedra){
        console.log("Jugador ha ganado");
    }else if(player == piedra && cpu == papel){
        console.log("CPU ha ganado");
    }else if(player == papel && cpu == tijera){
        console.log("CPU ha ganado");
    }else if(player == tijera && cpu == papel){
        console.log("Jugador ha ganado");
    }else if(player == piedra && cpu == tijera){
        console.log("Jugador ha ganado");
    }else if(player == tijera && cpu == piedra){
        console.log("CPU ha ganado");
    }else{
        console.log("Ha habido un empate")
    }
}

comparacion(papel,piedra);