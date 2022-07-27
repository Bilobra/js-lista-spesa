// CONSOLELOG PROVA
console.log('lista della spesa')

// creare array lista della spesa
// stampare nella pagina usando ciclo for

const listaSpesa = [
    'zucchero di canna',
    'carta igienica',
    'ragù di soia',
    'ammorbidente',
    'salmone affumicato',
    'burro'
]

// estrapolo dal dom il mio wrapper
const listaWrapper = document.querySelector('.list-wrapper')
listaWrapper.innerHTML = ''

// CICLO FOR

for (let i = 0; i < listaSpesa.length; i++) {
    const item = listaSpesa[i]
    // creiamo LI come stringhe
    const li = `
    <li class="list-item"> 
        ${item}
    </li>`

    // inseriamo li nel wrapper
    listaWrapper.innerHTML += li
    console.log(listaWrapper)
}
// ----------------

// CICLO WHILE
listaSpesa[i] = 0

while (listaSpesa[i] < listaSpesa.length) {
    const item = listaSpesa[i]
    const li = `
    <li class="list-item"> 
        ${item}
    </li>`
    listaWrapper.innerHTML += li
    i++

    console.log(i)
}