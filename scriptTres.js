console.log("Ejercicio c")

let paso = "🐾"
var cantidadDeGatos = 10;
var cantidadDePasos = 4;

let h = 1
while (h <= cantidadDeGatos){
    console.log("Gato #" + h + ": 🐈" + paso.repeat(cantidadDePasos) )
    h++
    if (h <= cantidadDeGatos){
        console.log("Gato #" + h + ": 🐈⬛" + paso.repeat(cantidadDePasos))
        h++
    }   
}

/* while (i <= cantidadDeGatos){
    console.log("Gato #" + i + ": 😺" )
    i++
    if (i <= cantidadDeGatos){
        console.log("Gato #" + i + ": 😸" )
        i++
        if (i <= cantidadDeGatos){
            console.log("Gato #" + i + ": 😹" )
            i++
        }
    }   
} */