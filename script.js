function calculateTip(event) {  /* Função Calcular gorjeta */
    event.preventDefault(); /* Evita o browser recarregar a pagina sempre que submeter */
    let bill = document.getElementById('bill').value; /* Alimentando a variavel com os valores do input */
    let serviceQual = document.getElementById('serviceQual').value; /* Alimentando a variavel com os valores do select */
    let numPeople = document.getElementById('people').value; /* Alimentando a variavel com os valores do input */

    if(bill == '' | serviceQual == 0){          /* Garantir que os campos sejam preenchidos */
        alert('Por favor, conte como foi o serviço!')
        return;   /* Return encerra a função*/
    }

    if(numPeople == 0 | numPeople <= 1) {     /* Verifica o numero de pessoas que vai dividir a conta */
        numPeople = 1 
        document.getElementById('each').style.display="none";
    }else{
        document.getElementById('each').style.display="block";
    }

    let total = (bill * serviceQual) / numPeople;  /* Calcula o valor da gorjeta */
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";
    console.log(calculateTip)
}

document.getElementById('totalTip').style.display = "none"; /* Escondeu o totalTip com o display none */
document.getElementById('each').style.display = "none"; /* Escondeu o each com o display none */

document.getElementById('tipsForm').addEventListener('submit', calculateTip); /* Chama a função */