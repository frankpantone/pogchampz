var wrap = document.querySelector('.wrapper')

for (var i=2;i<10;i++){
        var div = document.createElement('div');
        div.classList.add('chart');
        var str = `<h3>${i}</h3>`;
        for (var j=1;j<10;j++){
            str += `<p>${i} x ${j} = ${i*j}</p>`
        }
    div.innerHTML = str;
    wrap.appendChild(div);
    }

