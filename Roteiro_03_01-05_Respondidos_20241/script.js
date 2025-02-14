function mostrarOperacao(operacao) {
    document.getElementById("menu").style.display = "none"; 
    document.getElementById("titulo").style.display = "none"; 
    document.getElementById(operacao).style.display = "block"; 
}

function voltarMenu() {
    document.querySelectorAll('.operacao').forEach(div => {
        div.style.display = "none"; 
    });
    document.getElementById("titulo").style.display = "block"; 
    document.getElementById("menu").style.display = "block"; 
}

function calcularQuadrados(){
    var numeros = document.getElementById("txt1").value;
    numeros = numeros.split(",");
    for (i = 0; i < numeros.length; i++){
        quadrado = parseInt(numeros[i]) * parseInt(numeros[i]);
        document.write("O quadrado de " + numeros[i] + " é " + quadrado + "<br>");
    }
}

function verificarMaior(){
    var numeros = document.getElementById("txt2").value;
    numeros = numeros.split(",");
    var maior = parseInt(numeros[0]);
    for (i = 1; i < numeros.length; i++){
        if(parseInt(numeros[i]) > maior){
            maior = parseInt(numeros[i]);
        }
    }
    alert("O maior número digitado é: " + maior);
}

function verificarIdadesMaiorMenor18(){
    var idades = document.getElementById("txt3").value;
    idades = idades.split(",");
    var maior18 = 0;
    var menor18 = 0;
    for (i = 0; i < idades.length; i++){
        if(parseInt(idades[i]) >= 18)
            maior18++;
        else
            menor18++;
    }
    document.write("Quantidade de maiores: " + maior18 + "; e menores: " + menor18);
}

function separarDiaMesAno(){
    var data = document.getElementById("txt4").value;
    data = data.split("/");
    document.write("O dia é: " + data[0] + "<br>");
    document.write("O mês é: " + data[1] + "<br>");
    document.write("O ano é: " + data[2] + "<br>");
}

function inverterTexto(){
    var texto = document.getElementById("txt5").value;
    var textoAux = '';
    for (var i = texto.length - 1; i >= 0; i--){
        textoAux += texto[i];
    }
    document.write(textoAux);
}

function ordenarLista(){
    var valores = document.getElementById("txt6").value;
    valores = valores.split(",");

    for(i = 0; i<valores.length; i++){
        for(j=i+1; j<valores.length; j++){
            if(valores[j] < valores[i]){
                aux = valores[i];
                valores[i] = valores[j];
                valores[j] = aux;
            }
        }
    }

    document.write("Lista ordenada <br> " + valores);
}

function multiplosTres(){
    var valores = document.getElementById("txt7").value;
    valores = valores.split(",");
    soma = 0;
    for(i=0; i<valores.length; i++){
        let valor = parseInt(valores[i], 10);
        if(valor % 2 == 1){
            if(valor % 3 == 0){
                soma += valor;
            }
        }    
    }
    document.write("Soma: " + soma);
}

function calcularFatorial(){
    var valores = document.getElementById("txtValores").value;
    valores = valores.split(",");
    for(let i=0; i<valores.length; i++){
        let valor = parseInt(valores[i], 10);
        document.write("O fatorial de " + valor + " é: " + fatorial(valor) + "<br>");
    }
}
    
function fatorial(valor){
    if(valor == 1 || valor == 0) return 1;
    return fatorial(valor-1) * valor;
}

function infos(valores){
    var valores = document.getElementById("txt9").value;
    valores = valores.split(",");
    document.write("Media aritmetica dos numeros: " + media(valores) + "<br>");
    qtdPositivo = valoresPositivos(valores);
    qtdNegativo = valoresNegativos(valores);
    document.write("Quantidade de valores positivos: " + qtdPositivo +  ". Em porcentagem: "+ (qtdPositivo/valores.length)*100 + "%" +"<br>");
    document.write("Quantidade de valores negativos: " + qtdNegativo + ". Em porcentagem: "+ (qtdNegativo/valores.length)*100 + "%");
    
}

function media(valores){
    media = 0;
    for(i=0; i<valores.length; i++){
        media += parseInt(valores[i]);
    }

    return media / valores.length
}

function valoresPositivos(valores){
    count = 0
    for(i=0; i<valores.length; i++){
        if(parseInt(valores[i]) >= 0){
            count++;
        }
    }

    return count;
}


function valoresNegativos(valores){
    count = 0
    for(i=0; i<valores.length; i++){
        if(parseInt(valores[i]) < 0){
            count++;
        }
    }

    return count;
}

function reverteLista(){
    var valores = document.getElementById("txt10").value;
    valores = valores.split(",");

    for(i=0; i<valores.length; i++){
        for(j=i+1; j<valores.length; j++){
            aux = valores[i];
            valores[i] = valores[j];
            valores[j] = aux;
        }
    }

    document.write("Lista Invertida: " + valores);
}


