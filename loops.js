var estudiantes = ["Maria","Sergio","Rosa","Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++){ // for
    saludarEstudiantes(estudiantes[i]); 
}

for(var estudiante of estudiantes){ //for of
    saludarEstudiantes(estudiante);
}

while(estudiantes.length > 0){ // while
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}