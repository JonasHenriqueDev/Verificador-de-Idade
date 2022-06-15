function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')


    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os valores e tente novamente.')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', './img/menino.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', './img/rapaz.png')
            } else if (idade < 60) {
                //ADULTO
                img.setAttribute('src', './img/homem.png')
            } else {
                //IDOSO
                img.setAttribute('src', './img/idoso.png')
            }

        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', './img/menina.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', './img/moça.png')
            } else if (idade < 60) {
                //ADULTO
                img.setAttribute('src', './img/mulher.png')
            } else {
                //IDOSO
                img.setAttribute('src', './img/idosa.png')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade} anos</strong>.`
        res.appendChild(img)

    }
}
