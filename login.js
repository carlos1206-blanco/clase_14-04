
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
    
    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("password").value;

    if (user === "admin" && pass === "1234"){
        window.location.href = "form.html"; // Redirige a formulario.html si las credenciales son correctas
    } else {
        document.getElementById("error").innerText = "Usuario o contraseña incorrectos. Inténtalo de nuevo.";
    }

});