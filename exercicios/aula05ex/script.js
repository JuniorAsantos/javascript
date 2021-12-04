function tabuada(){
    var num = window.document.getElementById('txtn');
    var tab = window.document.getElementById('seltab');
    if (num.value.length == 0) {
        window.alert('Por favor, digite um númer!')
    } else {
        var n = Number(num.value);
        tab.innerHTML = ''
        var c = 1;
        while(c <= 10){
            var item = document.createElement('option');
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `${c}`
            tab.appendChild(item)
            c++
        }
        
    }
}