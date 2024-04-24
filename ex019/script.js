
function gerar() {
    let num = document.getElementById('txtnum').value
    let ip = document.querySelector('input#txtnum')
    let res = document.getElementById('res')
    let valores = []

    
    if(num.length == '' || num > 100 || num < 0){
        alert('Valor inválido')
    }
    else{
        for(let c = 0; c < Number(num); c++){
            valores[c] = Math.floor(Math.random() * 100)
        }
        res.innerHTML = '<p>Eis aqui os valores: </p>'
        for(let c = 0; c < valores.length; c++){
            res.innerHTML += `${valores[c]} `
        }
        let inpu = document.createElement('input')
        inpu.type = 'button'
        inpu.value = 'Ordenar'
        inpu.setAttribute('id', 'orde')        
        res.appendChild(inpu)
        inpu.addEventListener('click', ()=>{            
            res.innerHTML += '<p>Eis aqui os valores ordenados: <br></p>'

            let j = 0
            for(let c = 0; c < valores.length - 1; c++){
                for(let l = c + 1; l < valores.length; l++){
                    if(valores[c] > valores[l]){
                        j = valores[c] 
                        valores[c] = valores[l]
                        valores[l] = j
                    }
                }
            }

            for(let c = 0; c < valores.length; c++){
                res.innerHTML += `${valores[c]} `
            }
        })
    }    
}

