// Ao selecionar a opção na listagem deve-se esconder o cartçao atual e exibir o cartão correspondente

// Para isso vamos trabalhar com dois elementos 
// 1 - Listagem
// 2 - Cartão Pokemon

// É necessário criar duas variáveis no JS para trabalhar com os elementos da tela


// Precisamos criar duas variáveis no JS pra trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

function soma(numero1, numero2){
    console.log(numero1 + numero2)
}

listaSelecaoPokemons.forEach(pokemon => {
    // Vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem
    pokemon.addEventListener('click', () => {
        console.log(pokemon)
    // -Remover a classe aberto só do cartão que está aberto
    const cartaoPokemonAberto =document.querySelector('.aberto')
    cartaoPokemonAberto.classList.remove('aberto')

    // -Ao clicar no Pokemon da listagem pegamos o ID do Pokemon da listagem para saber qual cartão mostrar
    const idPokemonSelecionado = pokemon.attributes.id.value
    
    const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado)
    cartaoPokemonParaAbrir.classList.add('aberto')

    
    // -Remover a aclasse 'ativo' que marca o Pokemon selecionado
    const pokemonAtivoNaListagem = document.querySelector('.ativo')
    pokemonAtivoNaListagem.classList.remove('ativo')

    // Ativar a classe ativo no item da lista selecionado
    const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
    pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})