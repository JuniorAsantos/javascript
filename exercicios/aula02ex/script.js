function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();
    var seg = data.getSeconds();
    if(hora < 10){
        hora = '0'+hora
    }else if(min < 10){
        min = '0'+min
    }else if(seg < 10){
        seg = '0'+seg
    }
    var horas = hora +':'+ min +':'+ seg
    msg.innerHTML =`Agora são ${horas} horas.`
    if(hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = '_img/fotomanha.png'
        document.body.style.backgroundColor = '#e2cd9f'
        msg.style.color = '#e2cd9f'
    }else if(hora >= 12 && hora < 18){
        //BOA TARDE!
        img.src = '_img/fototarde.png'
        document.body.style.backgroundColor = '#b9846f'
        msg.style.color = '#b9846f'
    }else{
        //BOA NOITE!
        img.src = '_img/fotonoite.png'
        document.body.style.backgroundColor = '#515154'
        msg.style.color = '#515154'
    }
}
setInterval(carregar, 1000)