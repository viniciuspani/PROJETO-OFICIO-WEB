var userSistema = document.getElementById(inputLogin);
var userPassword = document.getElementById(inputPassword);

var user = "vinicius";
var senha = 123;

function VerificaUsuario(user, senha) {
    if (user == userSistema && senha == userPassword) {
        alert("usuario logado!");
        window.location.href="https://sistemaOficios.html:5500";
        
    } else {
        alert("usuario incorreto!");
    }
}