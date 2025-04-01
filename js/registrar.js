function Registrar() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("contrasena").value;
    let telefono = document.getElementById("telefono").value;
    let direccion = document.getElementById("direccion").value;

    let array = [
        nombre,
        apellido,
        email,
        password,
        telefono,
        direccion
    ]

    console.log(array);

    let texto = document.getElementById("texto");
    let text_apellido = document.getElementById("text-apellido");
    texto.textContent = array[0];
    text_apellido.textContent = array[1];

    // location.href = "../index.html";
}