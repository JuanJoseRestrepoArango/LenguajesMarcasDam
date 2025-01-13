window.onload = function() {inicio();}

function inicio(){
    cargarMeses();
    cargarAños();
}

function cargarMeses(){
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    meses.forEach(function (destino) {
        let m = document.createElement('OPTION');
        m.text = destino;
        m.value = meses.indexOf(destino) +1;
        document.getElementById('mes').appendChild(m);
    })
}
function cargarAños(){
    let año = new Date().getFullYear() ;
    
    for( i = año + 10; i >= año - 10; i--) {
        let a = document.createElement('OPTION');
        a.text = i.toString();
        a.value = i;
        document.getElementById('año').appendChild(a);
        
    }
    document.getElementById('año').selectedIndex = 10;
}

// seleccionar cuantos dias tiene ese mes en ese año

function calcularDias(){
    let mes = parseInt(document.getElementById('mes').value);
    let año = document.getElementById('año');
    
    if(año.value%400==0 || (año.value%100!= 0 && año.value%4== 0)){
        switch (mes) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                document.getElementById('ndias').innerHTML = 31;
                break;
            case 2:
                document.getElementById('ndias').innerHTML = 29;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                document.getElementById('ndias').innerHTML = 30;
                break;


        }
    }else{
        switch (mes) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                document.getElementById('ndias').innerHTML = 31;
                break;
            case 2:
                document.getElementById('ndias').innerHTML = 28;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                document.getElementById('ndias').innerHTML = 30;
                break;
        }
    }
    
}

