function enter() {
    var textoDigitado = document.getElementById('txt').value;
    if (event.keyCode==13){
        if( textoDigitado > ""){
            var criaLista = document.createElement("li");
            var criaText = document.createTextNode(textoDigitado);

            criaLista.appendChild(criaText);
            document.getElementById('lista').appendChild(criaLista);
            document.getElementById('txt').value = "";
        }
        else {
            alert("A tarefa não deve ser vazia!!");
        }
    }
    else {
        console.log("Tecla alternativa");
    }
}
