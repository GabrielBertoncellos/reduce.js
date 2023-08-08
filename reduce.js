/* 

.reduce recebe por padrao uma FUNCTION com 2 parametros padrao, e +2 opcionais

array.reduce(function (acumulador, valorAtual, index, arrayOriginal))


*/

let array = [1 , 2 , 3 , 4]

let soma = array.reduce(function(acumulador,valorAtual, index){
    
    console.log("indice" , index)
    console.log("valorAtual do indice", valorAtual)
    console.log("valor a ser somado", acumulador)
    return acumulador + valorAtual
    
})

console.log(soma)
console.log(array)


//////

const nomes = [ "Gabriel", "Maria", "Joao", "Joana"]
let nomeEmOrdem = nomes.reduce(function (nomes, nomeAtual){
    let primeiraLetra = nomeAtual[0] // pega a primeira letra do nome
    
    if (nomes[primeiraLetra]){
        nomes[primeiraLetra]++ // se existe a propriedade primeira letra (seja ela G,M,J etc), continua somando 
    }else{
        nomes[primeiraLetra] = 1
    }
    return nomes
}, {})

console.log(nomeEmOrdem)


/*
ou seja, as iterações seguem dessa maneira

PRIMEIRA ITERAÇÃO

nomes = {}  // objeto vazio, assim o acumulador sera esse objeto //
nomeAtual = primeiraLetra = nomeAtual[0] = "G"
loop é feito

return {G: 1}

SEGUNDA ITERAÇÃO

nomes = {G:1}
nomeAtual = primeiraLetra = nomeAtual[0] = "M"
Loop só identifica 1 "M"
return {G:1 , M:1}

TERCEIRA ITERAÇÃO

nomes = {G:1, M:1}
nomeAtual = primeiraLetra = nomeAtual[0] = "J"
Loop só identifica 1 "J"
return {G:1 , M:1, J:1}

QUARTA ITERAÇÃO

nomes = {G:1, M:1, J:1}
nomeAtual = primeiraLetra = nomeAtual[0] = "J"
Loop identifica +1 "J"
return {G:1 , M:1, J:2}


*/
