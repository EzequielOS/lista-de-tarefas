function enter() {
    var textoDigitado = document.getElementById('txt').value;
    if (event.keyCode==13){
        if( textoDigitado > ""){
            var criaLista = document.createElement("li");
            var criaText = document.createTextNode(textoDigitado);
            criaLista.className = 'lista';

            var criaCheck = document.createElement("span");
            var criaCheckInfo = document.createTextNode("\u2713");
            criaCheck.className = 'checar';
            criaCheck.appendChild(criaCheckInfo);
            criaCheck.addEventListener("click", function(){
                if (criaLista.className == 'lista'){
                    criaLista.className = 'checado';
                }
                else if (criaLista.className == "checado") {
                    criaLista.className = "lista";
                }
            })

            var criaDel = document.createElement("span");
            var criaDelInfo = document.createTextNode("\u00D7");
            criaDel.className = 'deletar';
            criaDel.appendChild(criaDelInfo);
            criaDel.addEventListener("click", function(){
               criaLista.remove();
           })
            criaLista.appendChild(criaCheck);
            criaLista.appendChild(criaText);
            criaLista.appendChild(criaDel);

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
