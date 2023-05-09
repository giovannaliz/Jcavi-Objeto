let carros = []

//validar se a placa tem 8 digitos "mev-1234"
//validar se os carros são a partir de 2018

function cadastrasCarro() {
    let placa = prompt('Digite a placa')
    let cor = prompt('Digite a cor')
    let ano = prompt('Digite o ano')

    let carro = {
        placa,
        cor,
        ano,
    }

function validarCarro(carro){
    let msg = ''
     if (carro.placa.length !=8) {
         msg += 'Placa inválida'
     }
     return msg
}
   

    // if(carro.ano < 2018){
    //     alert('Ano inválido')
    //     executarMenu()
    // }

   

    let msgErro = validarCarro(carro)
    if(msgErro==''){
        carros.push(carro)
        } else{
            alert(msgErro)
        }
    executarMenu()

}
//pesquisar carros pelo ano
function pesquisarCarro() {
    let placaPesquisa = prompt('Digite a placa de pesquisa:')


    for (let i = 0; i < carros.length; i++) {
        let carro = carros[i]
        if (placaPesquisa == carro.placa) {
            alert(`
            Placa: ${carro.placa}
            Cor: ${carro.cor}
            Ano: ${carro.ano}
            `)
            executarMenu()
        }
    }

    alert('Placa Inválida')
    executarMenu()

}

function pesquisarAno() {
    let anoPesquisa = prompt('Digite o ano de pesquisa:')
    let msg = []

    for (let i = 0; i < carros.length; i++) {
        let carro = carros[i]
        if (anoPesquisa == carro.ano) {
            msg += `Placa: ${carro.placa}|Cor: ${carro.cor}|Ano: ${carro.ano}\n`           
        }
    }

    alert(msg)
    executarMenu()

}
function executarMenu() {
    let acao = prompt(`
        (1) Cadastrar automóvel
        (2) Pesquisar automóvel por placa
        (3) Pesquisar automóvel por ano
        (4) Excluir
        (5) Atualizar
        (6) Sair

    `)
    if (acao == "1") {
        cadastrasCarro()
    } else if (acao == "2") {
        pesquisarCarro()
    } else if (acao == "3") {
        pesquisarAno()
    }
}
executarMenu()
