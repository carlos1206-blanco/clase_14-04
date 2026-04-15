
document.getElementById("formulario").addEventListener("submit", function (e) {

    e.preventDefault(); // Evita que el formulario se envíe automáticamente

    let inputs = document.querySelectorAll("#formulario input, #formulario textarea");
    let edad = document.querySelector("input[type='number']").value;
    let email = document.querySelector("input[type='email']").value;
    valido = true;
    let mensaje = "";

    //validar campos vacios 
    inputs.forEach(function (input) {
        if (input.value.trim() === "") {
            valido = false;
            mensaje = "Todos los campos son obligatorios.";
        }

    });

    // Validar que la edad sea un número positivo

    if (edad < 18) {
        valido = false;
        mensaje = "Debes tener al menos 18 años.";
        console.log(">>>" + edad);
    }
    //validar correo electrónico
    if (!email.includes("@") || !email.includes(".")) {
        valido = false;
        mensaje = "El correo electrónico no es válido.";
    }


        if (valido) {
            window.location.href = "valido.html"; // Redirige a success.html si el formulario es válido
        } else {
            alert(mensaje); // Muestra un mensaje de error si el formulario no es válido

        }



    });
