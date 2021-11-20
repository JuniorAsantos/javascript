function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
    if(fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] verifique os dados e tente novamente!');
    }else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img');
        img.setAttribute('id','foto');
        if(fsex[0].checked){
            genero = 'Masculino'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','_img/menino.png');
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','_img/jovem.png');
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src','_img/adulto.png');
            }else{
                //Idoso
                img.setAttribute('src','_img/idoso.png');
            }
        }else if(fsex[1].checked){
            genero = 'Feminino'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','_img/menina.png');
            }else if(idade < 21){
                //jovem-m
                img.setAttribute('src','_img/jovem-m.png');
            }else if(idade < 50){
                //Adulta
                img.setAttribute('src','_img/adulta.png');
            }else{
                //Idosa
                img.setAttribute('src','_img/idosa.png');
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos o sexo ${genero} e sua idade é ${idade} anos.`
        res.appendChild(img);
    }

}