// Mostrar mensaje oculto al hacer clic
function mostrarMensaje() {
    document.getElementById("mensaje").style.display = "block";
}

// Crear corazones flotando en la pantalla
function crearCorazones() {
    for (let i = 0; i < 10; i++) {
        let corazon = document.createElement("div");
        corazon.classList.add("corazon");
        corazon.innerHTML = "❤️";
        corazon.style.left = Math.random() * 100 + "vw";
        corazon.style.top = Math.random() * 100 + "vh";
        corazon.style.animationDuration = Math.random() * 2 + 3 + "s";

        document.body.appendChild(corazon);
    }
}

crearCorazones();