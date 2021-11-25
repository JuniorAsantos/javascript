function contar(){
    var ini = window.document.getElementById('txti');
    var fim = window.document.getElementById('txtf');
    var pas = window.document.getElementById('txtp');
    var res = window.document.getElementById('res');
    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        window.alert('[ERRO] faltou dados!')
    } else {
        res.innerHTML = 'Contando...</br>'
        var i = Number(ini.value);
        var f = Number(fim.value);
        var p = Number(pas.value);
        if(p <= 0){
            window.alert('Passo invalido considerando, PASSO 1');
            p = 1
        }
        if(i < f){
            //Contagem Crecente
            while(i <= f){
                res.innerHTML += ` ${i} \u{1F449}`
                i+=p
                res.style.backgroundColor = 'rgb(70, 142, 236)';
            }
            res.innerHTML += `\u{1f3c1}`
        }else if(i > f){
            //Contagem Regressiva
            for(var c = i;c >= f;c-=p){
                res.innerHTML += `${c}\u{1f449}`
                res.style.backgroundColor = 'yellow'
            }
            res.innerHTML += `\u{1f3c1}`
        }
    }
}