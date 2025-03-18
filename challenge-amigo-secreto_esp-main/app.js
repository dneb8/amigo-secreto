let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre) {
        amigos.push(nombre);
        mostrarAmigos(); 
        input.value = ""; 
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

function mostrarAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}


