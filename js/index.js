const radioMasc = document.getElementById('radiomasc');
const radioFem = document.getElementById('radiofem');
const verificar = document.getElementById('btnverificar');
const name1 = window.prompt('Qual seu nome?')
let nameTxt = document.getElementById('name')
let result = document.getElementById('result');
let photo = document.getElementById('photo');
let genero = ""

radioMasc.addEventListener('click', () => {
    radioFem.checked = false;
});
radioFem.addEventListener('click', () => {
    radioMasc.checked = false;
});

verificar.addEventListener('click', () => {

    const inpt =  document.getElementById('year');
    let data = new Date();
    let years = data.getFullYear();
    let resultyear = years - Number(inpt.value)
    
    if(inpt.value.length == 0 || inpt.value >= year){
        window.alert('[ERROR] Verifique os dados e tente novamente !!!');
        result.innerHTML = `<p>Não Detectado, preencha as informações</p>`
    } else{
        if(radioMasc.checked){
        if(resultyear >= 1 && resultyear <= 4){
            // BEBE
            genero = "um Bebê"
            photo.setAttribute("src", "./img/mascbebe.png")
        } else if(resultyear < 11){
            // CRIANÇA
            genero = "um Menino"
            photo.setAttribute("src", "./img/masccriança.png")
        } else if(resultyear < 17){
            // ADOLECENTE
            genero = "um Jovem"
            photo.setAttribute("src", "./img/mascadolecente.png")
        } else if(resultyear < 59){
            // ADULTO
            genero = "um Homem"
            photo.setAttribute("src", "./img/mascadulto.png")
        } else if (resultyear >= 60  && resultyear <= 200){
            // IDOSO
            genero = "um Senhor"
            photo.setAttribute("src", "./img/mascidoso.png")
        }
    } else if(radioFem.checked){
        if(resultyear > 1 && resultyear <= 5){
            // BEBE
            genero = "uma Bebê"
            photo.setAttribute("src", "./img/fembebe.png")
        } else if(resultyear < 11){
            // CRIANÇA
            genero = "uma Menina"
            photo.setAttribute("src", "./img/femcriança.png")
        } else if(resultyear < 17){
            // ADOLECENTE
            genero = "uma Jovem"
            photo.setAttribute("src", "./img/femadoleçente.png")
        } else if(resultyear < 59){
            // ADULTO
            genero = "uma Mulher"
            photo.setAttribute("src", "./img/femadulta.png")
        } else if (resultyear >= 60 && resultyear <= 200){
            // IDOSO
            genero = "uma Senhora"
            photo.setAttribute("src", "./img/femidosa.png")
        }
    }
    result.innerHTML = `<p>Detectamos ${genero} de ${resultyear} anos.</p>`
}

    nameTxt.innerHTML = `<h5>${name1}</h5>`
});