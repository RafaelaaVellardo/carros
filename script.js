function exibir(){
var marca1 = document.getElementById('marca').value
var modelo1 = document.getElementById('modelo').value
const carro = {

    marca: marca1,
    modelo: modelo1,
};

localStorage.setItem("Carro", JSON.stringify(carro))
}