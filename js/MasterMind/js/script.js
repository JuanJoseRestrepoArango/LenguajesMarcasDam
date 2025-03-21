(function(){
    let cont = 0;
    contenedor = document.querySelector('.contenedorCampos');
    const opciones = ['V','A','C','N','A','R'];
    const respuesta = [];
  
    for (let i = 0; i< 8;i++){

        let div = document.createElement('DIV')
        div.classList.add('contenedorLinea')
        div.id = `cl${i+1}`;
        let resultados = document.createElement('DIV')
        resultados.classList.add('resultados')
        for(let j = 0;j<4;j++){
            cont = cont+1;
            let casilla = document.createElement('DIV');
            casilla.classList.add('casilla');
            casilla.id = cont;
            casilla.innerHTML = '&nbsp';
            div.appendChild(casilla);
            let contenedorL = document.createElement('DIV');
            contenedorL.classList.add('contenedorLinea');
            let resultado = document.createElement('DIV');
            resultado.classList.add('resultado');
            resultado.id = `res${cont}`;
            resultado.innerHTML = '&nbsp';
            contenedorL.appendChild(resultado);
            resultados.appendChild(contenedorL);
        }
        div.appendChild(resultados);
        contenedor.appendChild(div);
       
    }
    generarRespuesta();
    cont = 32;
    
    colores = document.querySelector('.colores');
    colores.addEventListener('click', function(e){
        if(e.target.id == 'error' || e.target.id == 'basura' || e.target.id == 'basurera'){
            

            let color = document.getElementById(cont+1);
            color.classList = null
            color.classList.add('casilla')
            cont++;
        }else{
            let color = document.getElementById(`${cont}`);
            color.classList.add(`${e.target.id}`);
            cont--;
        }
        if(cont < 0){
            alert("Juego Terminado")
            window.location.reload();
        }
        console.log(cont)
    })


    

    function alea(ls,li){
        return Math.floor(Math.random() * (ls - li + 1)) + li;
    }

    function generarRespuesta(){
        for(let i = 0;i<4;i++){
            respuesta.push(opciones[alea(0,opciones.length)]);

        }
        console.log(respuesta);
    }

})();