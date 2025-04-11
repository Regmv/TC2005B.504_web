window.onload = () => {
    
    if(sessionStorage.username) {
        const nameElement = document.querySelector(".contenido-box p:nth-of-type(1)");
        if(nameElement) {
            nameElement.textContent = "Nombre: " + sessionStorage.username;
        }
    } else {
        window.location.href = "../index.html";
    }
};


const logout = document.getElementById("logout");
if(logout) {
    logout.addEventListener("click", () => {
        sessionStorage.clear();
        window.location.href = "../index.html";
    });
}