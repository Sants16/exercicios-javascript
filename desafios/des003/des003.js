function contar(){
    var txtinicio = document.getElementById('txtinicio')
    var txtfim = document.body.querySelector('input#txtfim')
    var txtpasso = document.getElementById('txtpasso')

    if (txtinicio.value.length == 0 || txtfim.value.length == 0){
        alert('Bota numero ai fi')
    } else if (txtpasso.value.length == 0){
        alert('Bota numero ai fi')
    } else {
        var inicio = Number(txtinicio.value)
        var fim = Number(txtfim.value)
        var passo = Number(txtpasso.value)
        var res = document.getElementById('res')
        var span = document.createElement('span')

        while(inicio < fim){
        res.innerHTML = `${inicio} 👉 ${inicio} 👉 ${inicio}`
        inicio += passo
        }

    }
        
}