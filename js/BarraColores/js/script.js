(function(){

    let cajaColor = document.getElementById('color');
    let opciones = ['rojo','verde','azul','opacidad','ancho']

    for (let i = 0; i<opciones.length;i++){
        opcionesSelect(opciones[i])
    }
   
    for(let i = 0; i<opciones.length;i++){
        cambiarColor(opciones[i])
    }
    for(let i = 0; i<opciones.length;i++){
        cambioSelect(opciones[i])
    }
    

    cajaColor.style.backgroundColor = `rgba(${document.getElementById('rojo').value},${document.getElementById('verde').value},${document.getElementById('azul').value},${document.getElementById('opacidad').value})`
    cajaColor.style.width = `${document.getElementById('ancho').value}px`;

    
    
    function opcionesSelect(destino){
        let barra = document.getElementById(destino);
        let select = document.getElementById(`select${destino}`)
        console.log(barra.value)
       
            for(let i = parseInt(barra.min);i<=parseInt(barra.max);i+=parseFloat(barra.step)){
                let op = document.createElement('OPTION');
                op.value = i;
                op.text = i;
                select.appendChild(op);
            }
            select.selectedIndex = Math.round((barra.value - parseFloat(barra.min)) / parseFloat(barra.step));
        
    }

    function cambiarColor(destino){
        document.getElementById(`${destino}`).addEventListener('input',function (e){
            switch (destino) {
                case 'rojo':
                    cajaColor.style.backgroundColor = `rgba(${e.target.value},${document.getElementById('verde').value},${document.getElementById('azul').value},${document.getElementById('opacidad').value})`;
                    document.getElementById(`select${destino}`).value = e.target.value;
                    break;
                case 'verde':
                    cajaColor.style.backgroundColor = `rgba(${document.getElementById('rojo').value},${e.target.value},${document.getElementById('azul').value},${document.getElementById('opacidad').value})`;
                    document.getElementById(`select${destino}`).value = e.target.value;
                    break;
                case 'azul':
                    cajaColor.style.backgroundColor = `rgba(${document.getElementById('rojo').value},${document.getElementById('verde').value},${e.target.value},${document.getElementById('opacidad').value})`
                    document.getElementById(`select${destino}`).value = e.target.value;
                    break;
                case 'opacidad':
                    cajaColor.style.backgroundColor = `rgba(${document.getElementById('rojo').value},${document.getElementById('verde').value},${document.getElementById('azul').value},${e.target.value/10})`
                    document.getElementById(`select${destino}`).value = e.target.value;
                    break;
            
                case 'ancho':
                    cajaColor.style.width = `${e.target.value}px`
                    document.getElementById(`select${destino}`).value = e.target.value;
                    break;
            
                default:
                    break;
            }
            

        
        })
    }

    function cambioSelect(destino){
        let sel = document.getElementById(`select${destino}`);
        sel.addEventListener('change',function(e){
            switch (destino) {
                case 'rojo':
                    cajaColor.style.backgroundColor = `rgba(${e.target.value},${document.getElementById('verde').value},${document.getElementById('azul').value},${document.getElementById('opacidad').value})`;
                    document.getElementById(`${destino}`).value = e.target.value;
                    break;
                case 'verde':
                    cajaColor.style.backgroundColor = `rgba(${document.getElementById('rojo').value},${e.target.value},${document.getElementById('azul').value},${document.getElementById('opacidad').value})`;
                    document.getElementById(`${destino}`).value = e.target.value;
                    break;
                case 'azul':
                    cajaColor.style.backgroundColor = `rgba(${document.getElementById('rojo').value},${document.getElementById('verde').value},${e.target.value},${document.getElementById('opacidad').value})`
                    document.getElementById(`${destino}`).value = e.target.value;
                    break;
                case 'opacidad':
                    cajaColor.style.backgroundColor = `rgba(${document.getElementById('rojo').value},${document.getElementById('verde').value},${document.getElementById('azul').value},${e.target.value/10})`
                    document.getElementById(`${destino}`).value = e.target.value;
                    break;
            
                case 'ancho':
                    cajaColor.style.width = `${e.target.value}px`
                    document.getElementById(`${destino}`).value = e.target.value;
                    break;
            
                default:
                    break;
            }
        })
    }
})();