(function(){
    let cont ;
    contenedor = document.querySelector('.contenedorCampos');
    for (let i = 0; i< 4;i++){
        cont = i+1;
        let div = document.createElement('DIV')
        div.classList.add('contenedorLinea')
        for(let j = 0;j<8;j++){
            casilla = document.createElement('DIV');
            casilla.classList.add('casilla');
            casilla.id = cont;
            cont = cont + 4;
            casilla.innerHTML = '&nbsp';
            div.appendChild(casilla);
        }
        contenedor.appendChild(div);
        console.log('hola')
    }
    cont = cont-4;
    console.log(cont);
    document.addEventListener('click', function(e){
        
        if(e.target.id != ''){
            let color = document.getElementById(`${cont}`);
            console.log(color)
            color.classList.add(`${e.target.id}`);
            cont--;
        }else{
            let color = document.getElementById(cont+1);
            color.classList = null
            color.classList.add('casilla')
            cont++;
        }
    })
})();