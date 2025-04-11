//console.log("Hola desde javascript");
//alert("mensaje");
//prompt("ingresa tu nombre");
//confirm("deseas eliminar¿?");
//const boton=document.getElementById("loginButton")
//const username=document.getElementById("username");
//const password=document.getElementById("password");
//const login=()=>{
    //Validar credenciales
 //console.log(username.value +" "+ password.value);
 //si el login es correcto
 //sessionStorage.name="Regina Martinez";
 //window.location.href="./pages/profile.html";
 //si el login es incorrecto
 //console.log("credenciales incorrecctas");


//};

// index.js - Versión final funcional
const boton = document.getElementById("loginButton");
const username = document.getElementById("username");
const password = document.getElementById("password");

const login = () => {

    if (!username.value || !password.value) {
        showError("Por favor completa todos los campos");
        return;
    }

   
    const validUsers = {
        "regina": "tec123"
    };

    
    if (validUsers[username.value] === password.value) {
        // Login exitoso
        sessionStorage.setItem("username", username.value);
        sessionStorage.setItem("isLoggedIn", "true");
        window.location.href = "./paginas/tags.html";
    } else {
     
        showError("Usuario o contraseña incorrectos");
        password.value = ""; // Limpiar campo de contraseña
    }
};


function showError(message) {
    
    const existingError = document.querySelector(".error-message");
    if (existingError) {
        existingError.remove();
    }

   
    const errorElement = document.createElement("p");
    errorElement.textContent = message;
    errorElement.style.color = "red";
    errorElement.style.marginTop = "10px";
    errorElement.classList.add("error-message");
    
    
    document.querySelector(".login-box").appendChild(errorElement);
}


boton.addEventListener("click", login);

password.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        login();
    }
});

if (sessionStorage.getItem("isLoggedIn") === "true") {
    window.location.href = "./paginas/tags.html";
}