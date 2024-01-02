function filaPrimeiro(resolver) {

    const customPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            //console.log ('Primeiro!')
            if (resolver ) {
                resolve('Promise Executado')
            } else {
                reject('Promise NÃO executado')
            }
        }, 4000)

       })

    return customPromise
    
}

// function filaSegundo() {
    
//     setTimeout(() => {
//         console.log ('Segundo!')
//     }, 2000);

// }

// function filaTerceiro() {
    
//     setTimeout(() => {
//         console.log ('Terceiro!')
//     }, 4000);

// }

filaPrimeiro(true).then(data => {
    console.log(data)
    return this
}).catch(err => {
    console.log (err)
})

console.log('Executei até o final e estou aguardando o promise concluir...')