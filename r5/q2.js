verificaTCC = (dataEntregue, dataFinal) =>{
    const dataPrevista = dataFinal - dataEntregue

    if(dataFinal > dataEntregue){
        console.log("Eu odeio o prof. Florovsky!")
    }
    
    if(dataPrevista >= 3){
        console.log("Muito bem! \nO aluno está apto a apresentar até o natal!")
    } else{
        dataEntregue += 2
        console.log("O trabalho está muito ruim!")
        if(dataEntregue < 24){
            console.log("TCC Apresentado")
        }else{
            console.log("Não deu! Só no proximo ano")
        }
    }
    

}



