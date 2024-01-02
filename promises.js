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
    

filaPrimeiro(true).then(data => {
    console.log(data)
    return this
}).catch(err => {
    console.log (err)
})

console.log('Executei até o final e estou aguardando o promise concluir...')