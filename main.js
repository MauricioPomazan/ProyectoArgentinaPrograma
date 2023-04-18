var arraydesuma = [0];
var suma = arraydesuma.reduce((anterior, actual) => anterior + actual, 0);
var items = document.querySelector(".itemsagregados");
var preciototal = document.querySelector(".preciototal");

function verificarPrecio1() {
  var producto1 = document.getElementById("Producto1").value;
  var precio1 = document.getElementById("Precio1").value;
  val(producto1,precio1)
}
function verificarPrecio2() {
  var producto2 = document.getElementById("Producto2").value;
  var precio2 = document.getElementById("Precio2").value;
  val(producto2,precio2)
}
function verificarPrecio3() {
  var producto3 = document.getElementById("Producto3").value;
  var precio3 = document.getElementById("Precio3").value;
  val(producto3,precio3)
}
function verificarPrecio4() {
  var producto4 = document.getElementById("Producto4").value;
  var precio4 = document.getElementById("Precio4").value;
  val(producto4,precio4)
}

function verificarPrecio5() {
  var producto5 = document.getElementById("Producto5").value;
  var precio5 = document.getElementById("Precio5").value;
  val(producto5,precio5)
}

function vaciarCampos() {
  items.textContent = ""
  preciototal.textContent = ""
  arraydesuma = []
}

function enviarPedido() {
  if (items.textContent==false){
    swal("Error","Tienes que pedir algo primero","error")
  } else{
  items.textContent = ""
  preciototal.textContent = ""
  swal("Muchas gracias!","Tu pedido ya ah sido procesado.","success")
  arraydesuma = []
}}

function val(producto, precio){
  lista = document.createElement("li");
  items.appendChild(lista);
  lista.textContent = `Agregaste ${producto}: $${precio}`;
  arraydesuma.push(parseInt(precio));
  var suma = arraydesuma.reduce((anterior, actual) => anterior + actual, 0);
  preciototal.textContent = `El total es de $${suma}`;
}