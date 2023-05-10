let livros = []

function cadastrar() {
    let codigo = prompt('Digite o código')
    let titulo = prompt('Digite o título')
    let categoria = prompt('Digite a categoria')

    let livro = {
        codigo,
        titulo,
        categoria,
    }       
    
    executarMenu()
    }

function pesquisar() {
    let livroPesquisa = prompt('Digite o código para pesquisa:')
    let msg = []

    for (let i = 0; i < livros.length; i++) {
        let livro = livros[i]
        if (livroPesquisa == livro.codigo) {
            msg += `Código: ${livro.codigo}|Título: ${livro.titulo}|Categoria: ${livro.categoria}\n`           
        }
    }

    alert(msg)
    executarMenu()

}

function executarMenu() {
    let acao = prompt(`
        (1) Cadastrar 
        (2) Pesquisar 
        (3) Excluir
        (4) Alterar
        (5) Filtrar livros por categoria
        (6) Sair

    `)
    if (acao == "1") {
        cadastrar()
    } else if (acao == "2") {
        pesquisar()
    } else if (acao == "3") {
        excluir()
    }
}
executarMenu()
