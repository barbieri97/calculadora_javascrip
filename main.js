function insert(param){
    var resul = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resul + param
}

function limpar(){
    document.getElementById('resultado').innerText = ""
}

function apagar(){
    var resul = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resul.substring(0, resul.length - 1)

}

function calc(){
    var resul = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = eval(resul)
}
