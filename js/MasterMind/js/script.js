(function(){
    let cont = 0;
    contenedor = document.querySelector('.contenedorCampos');
    const opciones = ['V','A','C','N','a','R'];
    const respuesta = [];
    const solucion = [];
    const revision = [];
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
    console.log(respuesta)
    colores = document.querySelector('.colores');
    colores.addEventListener('click', function(e){
        if(e.target.id == 'error' || e.target.id == 'basura' || e.target.id == 'basurera'){
            

            let color = document.getElementById(cont+1);
            color.classList = null
            color.classList.add('casilla')
            cont++;
            solucion.length = solucion.length-1;
            revision.length = revision.length-1;
        }else{
            let color = document.getElementById(`${cont}`);
            color.classList.add(`${e.target.id}`);
            let letra = e.target.id.toString()
            revision.push(cont);
            cont--;
            if(e.target.id === "azul"){
                solucion.push(letra.charAt(0));
            }else{
                solucion.push(letra.charAt(0).toUpperCase());
            }         
            if(cont!=32 && cont%4 == 0){
                
                if(revisarRespuesta(solucion,revision)){
                    alert("Has Ganado")
                    window.location.reload();
                }
            }
            
        }
        console.log(cont)
        if(cont <= 0){
            alert("Juego Terminado")
            window.location.reload();
        }
        
    })

    function alea(ls,li){
        return Math.floor(Math.random() * (ls - li + 1)) + li;
    }

    function generarRespuesta(){
        for(let i = 0;i<4;i++){
            respuesta.push(opciones[alea(0,opciones.length)]);
        }
       
    }

    function revisarRespuesta(solucion,revision){
        let avance = []
        let bk = [...respuesta]
        console.log("Nueva revision " + bk)
        let conVic = 0
        for (let i = 0;i<solucion.length;i++){
            if(respuesta[i] === solucion[i]){
                avance.push('X')
                solucion[i] = 'X'
                bk[i] = '*'
            }
            
        }
        console.log(solucion)
        console.log(bk)
        for (let i = 0;i<solucion.length;i++){
            for (let j= 0;j<bk.length;j++){
                if(bk[j] === solucion[i] && i != j){
                    console.log(bk[j] + " pos " + j + " respuesta - " + solucion[i] + " pos " + i + " solucion");
                    avance.push('Y')
                    solucion[i] = 'Y'
                    bk[j] ='-'
                   
                }
                
            }
        }
        
        console.log(solucion)
        revision.length = avance.length
        for(let i = 0 ; i < revision.length;i++){
            let res = document.getElementById(`res${revision[i]}`)
            if(avance[i] === "X"){
                res.classList.add('negro');
                conVic++;
            }else if( avance[i] === "Y"){
                res.classList.add('blanco')
            }
        }
        
        solucion.length = 0;
        revision.length = 0;
        
        if(conVic == 4){
            return true;
        }else{
            return false;
        }
        
    }

})();