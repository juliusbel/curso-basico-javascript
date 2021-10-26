var piedra = piedra;
var papel = papel;
var tijera = tijera;

function comparacion(player,cpu){
    switch(true){
        case (player == piedra && cpu == papel):
            console.log("CPU gana");
            break;
        case (player == piedra && cpu == tijera):
            console.log("Jugador gana");
            break;
        case (player == papel && cpu == piedra):
            console.log("Jugador gana");
            break;
        case (player == papel && cpu == tijera):
            console.log("CPU gana");
            break;
        case (player == tijera && cpu == piedra):
            console.log("CPU gana");
            break;
        case (player == tijera && cpu == papel):
            console.log("Jugador gana");
            break;
        default:
            console.log("Hubo un empate")
    }
}

comparacion(tijera,papel);