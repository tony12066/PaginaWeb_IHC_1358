function Saludar() {
    var nombre=document.getElementById('txtNombre').value;
    alert("Hola "+nombre+", bienvenido!!");
}
function Resetear() {
    var txtNombre=document.getElementById('txtNombre');
    txtNombre.value="";
    txtNombre.focus();
}