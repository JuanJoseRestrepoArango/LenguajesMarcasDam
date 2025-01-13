function calcular2(accion){
    let sumar = parseInt(document.getElementById('suma').getAttribute('data-value')); 
    let resultado = parseInt(document.getElementById('resultado').innerHTML);
    let resta = parseInt(document.getElementById('resta').getAttribute('data-value'));


    if(accion == "suma"){
       
        document.getElementById("resultado").innerHTML=eval(sumar+resultado)
       
    }else if(accion == "resta"){
        document.getElementById("resultado").innerHTML=eval(resultado-resta)
    }
}



function calcular(accion){
    let a=document.getElementById("resultado").innerHTML;   //0
    let b= document.querySelector("#"+accion.id+" p").innerHTML; //seleccionar el html del parrafo que esta dentro del id

    document.getElementById("resultado").innerHTML=eval(a+b);  //eval("0+10")
}
