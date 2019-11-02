// RECEBENDO VALORES DOS CAMPOS
let numero = document.getElementById("numero");
let resultado = document.getElementById("resultado");
let erro = document.getElementById("erro");
let valores = document.getElementById("valores");
let numeros = [];

// VERIFICA SE É UM NÚMERO
function isNumero(n) 
{    
    if(Number(n) >= 1 && Number(n) <= 100)
    {
        return true;
    }
    else
    {
        return false;
    }
}

// VERIFICA SE O NÚMERO ESTA NA LISTA
function inLista(n, l)
{
    if(l.indexOf(Number(n)) != -1)
    {
        return true;
    }
    else
    {
        return false;
    }
}

// ADICIONA NÚMERO
function adicionar()
{
    // VERIFICA SE É UM NÚMERO E SE NÃO ESTA NA LISTA
    if (isNumero(numero.value) && !inLista(numero.value, numeros))
    {
        limparResultado();
        limparErro();
        
        let div = document.createElement("div");
        div.innerHTML = Number(numero.value);
        valores.appendChild(div);

        // CRIA UM ARRAY COM OS NÚMEROS
        numeros.push(Number(numero.value));

        limparInput();
    }
    else
    {
        erro.style.display = "block";
        erro.innerHTML = "Ops, número inválido ou já se encontra na lista.";
        limparInput();
    }  
}

function finalizar()
{
    limparResultado();
    limparErro();

    if(numeros.length == 0)
    {
        erro.style.display = "block";
        erro.innerHTML = "Ops, você não pode finalizar. Adicione um número.";
    }
    else
    {
        // VERIFICA QUANTOS NÚMERO FORAM ADICIONADOS
        let qtd_numeros = numeros.length;    

        // VERIFICA MAIOR NÚMERO DA LISTA
        //let maior_numero = Math.max(...numeros);        

        // VERIFICA MENOR NÚMERO DA LISTA
        //let menor_numero = Math.min(...numeros);

        let soma = 0;

        // NO COMEÇO O MAIOR E O MENOR É O PRIMEIRO NUMERO INFORMADO
        let maior_numero = numeros[0];
        let menor_numero = numeros[0];

        for(s = 0; s < numeros.length; s++)
        {
            // SOMANDO TODOS OS NÚMERO DA LISTA
            soma += Number(numeros[s]);

            // VERIFICA SE O MAIOR NÚMERO ATÉ AGORA É MAIOR DO QUE O PRÓXIMO, SE FOR SUBSTITUI O MAIOR ATUAL
            if(numeros[s] > maior_numero)
                maior_numero = numeros[s];

            // VERIFICA SE O MENOR NÚMERO ATÉ AGORA É MENOR DO QUE O PRÓXIMO, SE FOR SUBSTITUI O MENOR ATUAL
            if(numeros[s] < menor_numero)
                menor_numero = numeros[s];
        }

        // MÉDIA DOS NÚMEROS DA LISTA
        let media = soma / qtd_numeros;

        resultado.style.display = "block";
        resultado.innerHTML += `<div>Ao todo, temos <span>${qtd_numeros}</span> números na lista.</div>`;
        resultado.innerHTML += `<div>O maior número informado foi <span>${maior_numero}</span>.</div>`;
        resultado.innerHTML += `<div>O menor número informado foi <span>${menor_numero}</span>.</div>`;
        resultado.innerHTML += `<div>Somando todos os valores, temos <span>${Number(soma)}</span>.</div>`;
        resultado.innerHTML += `<div>A média dos valores informados é <span>${media.toFixed(2).replace(".", ",")}</span>.</div>`;
    }
}

// AO PRESSIONAR ENTER
document.addEventListener('keypress', function(e) {
    if(e.which == 13) { adicionar(); }
}, false);

// LIMPA INPUT
function limparInput() 
{
    numero.value = ''; 
    numero.focus();
}

// LIMPA RESULTADO
function limparResultado() 
{
    resultado.style.display = "none";
    resultado.innerHTML = '';
}

// LIMPA ERRO
function limparErro() 
{
    erro.style.display = "none";
    erro.innerHTML = '';
}