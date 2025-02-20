let contador = 0
let res = document.querySelector('section#res')

function contar() {
    contador++
    res.innerHTML = `<p>O contador está com <mark>${contador}</mark> cliques.</p>`
}

function restart() {
    contador = 0
    res.innerHTML = `<p>O contador está com <mark>${contador}</mark> cliques.</p>`
}
