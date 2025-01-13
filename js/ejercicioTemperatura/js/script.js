window.onload = inicio;

function inicio(){

    ['gcs','gfs','gks'].forEach(function(destino){
        newCargar(document.getElementById(destino));
    })
}
function newCargar(destino){
    for(let i = 5; i>= -5;i--){
        let z = document.createElement("option");
        z.text = i.toString();
        z.value = i.toString();
        destino.appendChild(z);
    }
    destino.selectedIndex = 5;
}

function cambiando(quien, destino){
    if(quien.id == destino){
        incremento(quien);
    }else{
        let vdestino = document.getElementById(destino);
        vdestino.value = parseFloat(quien.value) + parseFloat(vdestino.value);
        incremento(vdestino);
    }
}

function incremento(quien){
    var variableid = quien.id;
    var variablegc = 0 , variablegf = 0, variablegk = 0;

    switch(variableid){
        case 'gc':
            variablegc = parseFloat(quien.value);
            variablegf = (9 * variablegc) / 5 + 32;
            variablegk = variablegc + 273.15;
            break;
        case 'gf':
            variablegf = parseFloat(quien.value);
            variablegc = (5 * (variablegf - 32)) / 9;
            variablegk = variablegc + 273.15;
            break;
        case 'gk':
            variablegk = parseFloat(quien.value);
            variablegc = variablegk - 273.15;
            variablegf = (9 * variablegc) / 5 + 32;
            break;
        
            
        }
        ['gc', 'gf', 'gk'].forEach(function(destino){
            document.getElementById(destino).value = redondear(eval("variable"+destino), 2);
        });
}

function redondear(numero, decimales){
    var n = Math.pow(10,decimales);
    var m = Math.round(n*numero);
    return m/n;
}

// function actualizar(accion,texto){
    
//     let valor = document.getElementById(accion.id).value;
//     let suma = document.getElementById(texto+'1').value;
//     let resta = document.getElementById(texto+'2').value;
//     let resultado = document.getElementById(texto+'resultado').innerHTML;

//     if(parseInt(valor) >= 0){

//         document.getElementById(texto+'1').value = valor;
//         document.getElementById(texto+'resultado').innerHTML = eval(resultado +suma);
//     }else if(parseInt(valor) < 0){

//         document.getElementById(texto+'2').value = valor;
//         document.getElementById(texto+'resultado').innerHTML = eval(resultado +resta);
//     }
   
// }
