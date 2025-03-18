let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre) {
        amigos.push(nombre);
        console.log("Lista de amigos:", amigos); //BORRAR CONSOLE LOG
        input.value = ""; 
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}
