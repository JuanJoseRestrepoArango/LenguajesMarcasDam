(function(){
    
    let numero 
    let cont = 0;
    const soluciones = []

    numero = parseInt(numero);
    console.log(numero);
    

    while(!numero){
        numero = window.prompt('Ingrese el tamaño del N en Raya')
        if(numero){
            break;
        }else{
            alert("Debe ingresar un numero para iniciar")
        }
    }

    

    crearEstructura(numero);
    seleccionarImagen();
    rellenarSoluciones(soluciones,numero);


    function crearEstructura(numero){
        let contenedor = document.getElementById('contenedor');
        let cuadroJug = document.getElementById('seleccionJugador');
        let cadena = `
            <table>
            `;
        for (let i = 1; i<=numero;i++){
            cadena +=`<tr>`;
            for(let j = 1; j<=numero;j++){
                cadena += `<td> <img id=${i+"."+j} src="../img/logo.png" alt="logo"> </td>`;
                
            }
            cadena += `</tr>`;
        }
        cadena += `</table>`;
        contenedor.innerHTML = cadena;

        
        for (let i = 1; i<=2; i++){
            cuadroJugadores(cuadroJug,i);
        }
        
        
    }

    function cuadroJugadores(destino,numJuga){
        
        let contenedorj = document.createElement('DIV');
        contenedorj.classList.add(`contenedorj${numJuga}`);

        let jugador = document.createElement('P');
        jugador.id = `jugador${numJuga}`
        jugador.innerText = `Jugador ${numJuga}`

        contenedorj.appendChild(jugador);

        destino.appendChild(contenedorj);
    }

    function rellenarSoluciones(soluciones,numero){
        let numeroColumnas = numero;
        let cadena = "";
       
        for(let i = 0; i<2 ;i++){
            soluciones[i] = "";

        }
        for(let i = 0;i<numeroColumnas;i++){
            soluciones[0] = soluciones[0]+ (i+1) + "." + (i+1)+ " ";
            soluciones[1] = soluciones[1]+ (i+1) + "." + (numeroColumnas-i) + " ";
            
            for(let j = 0;j<numeroColumnas;j++){
                cadena = cadena + (i+1) + "." + (j+1) + " ";
            }
            soluciones.push(cadena)
            cadena = "";
            for(let j = 0;j<numeroColumnas;j++){
                cadena = cadena + (j+1) + "." + (i+1) + " ";
            }
            soluciones.push(cadena)
            cadena = "";

        }
 
        
    }

    function seleccionarImagen(){
        for(let i=1;i<=numero;i++){
            for (let j=1 ; j<=numero;j++){
                let seleccion = document.getElementById(`${i+"."+j}`)
                seleccion.addEventListener('click',function(){
                    
                    if(cont%2==0 && seleccion.src.includes('logo')){
                        cambiarImagen(seleccion,"1");

                        
                        
                    }else if(cont%2!=0 && seleccion.src.includes('logo')){
                        cambiarImagen(seleccion,"2")
                    }else if(seleccion.src != "../img/logo.png"){
                        alert("Esta Posicion Ya esta seleccionada");
                    }
                })
            }
        }
        
    }

    function cambiarImagen(destino,turno){
        let seleccionarJug = document.getElementById(`jugador${turno}`);
        let sinturno = 0;

        if(turno == 1){
            sinturno = 2;
        }else if(turno == 2){
            sinturno = 1;
        }

        let desseleccionarJug = document.getElementById(`jugador${sinturno}`);

        if(desseleccionarJug.classList.contains('seleccionado')){
            desseleccionarJug.classList.remove('seleccionado')
        }
        destino.src = `../img/jg${turno}.png`
        
        seleccionarJug.classList.add('seleccionado');
        cont+=1;

        if(revisarSoluciones(soluciones,numero,turno)){
            alert(`El Jugador ${turno} es el ganador`);
            location.reload();
        }



    }


    function revisarSoluciones(soluciones,numero,turno){
        let numeroColumnas = numero;
        let solJugador = [];
        let cont = 0;
        let cadena = "";
        for(let i = 0; i<2 ;i++){
            solJugador[i] = "";

        }
        for(let i = 1;i<=numeroColumnas;i++){
            
                if(document.getElementById(`${i+"."+i}`).src.includes(`jg${turno}`)){
                    solJugador[0] = solJugador[0]+ (i) + "." + (i)+ " ";
                }
                if(document.getElementById(`${i+"."+(numeroColumnas-cont)}`).src.includes(`jg${turno}`)){
                    solJugador[1] = solJugador[1]+ (i) + "." + (numeroColumnas-cont) + " ";

                }
                
           
                for(let j = 1;j<=numeroColumnas;j++){
    
                    if(document.getElementById(`${i+"."+j}`).src.includes(`jg${turno}`)){
                        cadena = cadena + (i) + "." + (j) + " ";
    
                    }
                }
                solJugador.push(cadena)
                cadena = "";
                for(let j = 1;j<=numeroColumnas;j++){
    
                    if(document.getElementById(`${j+"."+i}`).src.includes(`jg${turno}`)){
                        cadena = cadena + (j) + "." + (i) + " ";
    
                    }
                }
                cont+=1;
                solJugador.push(cadena)
                cadena = "";
            
            

        }

        for(let i = 0;i<soluciones.length;i++){
            if(soluciones[i] == solJugador[i]){
                return true;
            }
        }

 
        
    }

})();