function calcularQuadrados(){
    var numeros = document.getElementById("txtNumeros").value;
    numeros = numeros.split(",");
    for (i = 0; i < numeros.length; i++){
        quadrado = parseInt(numeros[i]) * parseInt(numeros[i]);
        document.write("O quadrado de " + numeros[i] + " é " + quadrado + "<br>");
    }
}

function verificarMaior(){
    var numeros = document.getElementById("txtNumeros").value;
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
    var idades = document.getElementById("txtIdades").value;
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
    var data = document.getElementById("txtData").value;
    data = data.split("/");
    document.write("O dia é: " + data[0] + "<br>");
    document.write("O mês é: " + data[1] + "<br>");
    document.write("O ano é: " + data[2] + "<br>");
}

function inverterTexto(){
    var texto = document.getElementById("txt").value;
    var textoAux = '';
    for (var i = texto.length - 1; i >= 0; i--){
        textoAux += texto[i];
    }
    document.write("String invertida: " + textoAux);
}

function ordenarLista(){
    var valores = document.getElementById("txtValores").value;
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

    document.write(valores)
}

function multiplosTres(){
    var valores = document.getElementById("txtValores").value;
    valores = valores.split(",");
    soma = 0;
    for(i=0; i<valores.length; i++){
        valor = parseInt(valores[i], 10);
        if(valor % 2 == 1){
            if(valor % 3 == 0){
                soma += valor;
            }
        }    
    }
    document.write(soma);
}

function calculaFatorial(){
    var valores = document.getElementById("txtValores").value;
    valores = valores.split(",");
    for(i=0; i<valores.length; i++){
        valor = parseInt(valores[i], 10);
        document.write("O fatorial de " + valor + " é: " + fatorial(valor) + "<br>");
    }
}

function fatorial(valor){
    if(valor == 1 || valor == 0) return 1;
    return fatorial(valor-1) * valor;
}