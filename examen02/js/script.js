(function(){
    var longitud = ["kilometro","hectometro","decametro","metro","decimetro","centimetro","milimetro"];
    var ValuesM = [1000,100,10,1,0.1,0.01,0.001];
    var ValuesMcua = [1000000,100000,100,1,0.01,0.0001,0.000001];
    var ValuesMcub = [1000000000,1000000,1000,1,0.001,0.000001,0.000000001];
    var masa = ["kilogramo","hectogramo","decagramo","gramo","decigramo","centigramo","miligramo"];
    var capacidad = ["kilomlitro","hectomlitro","decamlitro","mlitro","decimlitro","centimlitro","milimlitro"];
    var superficie = ["kilometro cuadrado","hectometro cuadrado","decametro cuadrado","metro cuadrado","decimetro cuadrado","centimetro cuadrado","milimetro cuadrado"];
    var volumen = ["kilometro cubico","hectometro cubico","decametro cubico","metro cubico","decimetro cubico","centimetro cubico","milimetro cubico"];
    var opciones = ["longitud","masa","capacidad","superficie","volumen"]
    
    rellenarSelect(longitud,ValuesM);

    sel1 = document.getElementById('selvalor1');
    sel2 = document.getElementById('selvalor2');

    
    
    selPrincipal = document.getElementById('selMedsele');
    selPrincipal.addEventListener('change',function(e){
        if(e.target.value == opciones[0]){
            rellenarSelect(longitud,ValuesM);

        }else if(e.target.value == opciones[1]){
            rellenarSelect(masa,ValuesM);
        }else if(e.target.value == opciones[2]){
            rellenarSelect(capacidad,ValuesM);
        }else if(e.target.value == opciones[3]){
            rellenarSelect(superficie,ValuesMcua);
        }else if(e.target.value == opciones[4]){
            rellenarSelect(volumen,ValuesMcub);
        }
        calcular(sel1,sel2,campo2,campo1)
        calcular(sel2,sel1,campo1,campo2)
        
    })
    campo1 = document.getElementById('valor1')
    campo2 = document.getElementById('valor2')

    function rellenarSelect(arreglo,arreglo2){
        sel1 = document.getElementById('selvalor1');
        sel2 = document.getElementById('selvalor2');
        sel1.innerHTML = "";
        sel2.innerHTML = "";
        for(let i = 0; i< arreglo.length;i++){
            op = document.createElement('OPTION');
            op.text = arreglo[i];
            op.value = arreglo2[i];
            sel1.appendChild(op);
            
        }
        for(let i = 0; i< arreglo.length;i++){
            op = document.createElement('OPTION');
            op.text = arreglo[i];
            op.value = arreglo2[i];
            sel2.appendChild(op);
            
        }
        sel1.selectedIndex = 0;
        sel2.selectedIndex = 3;
    }
    
    
    campo1.addEventListener('change',function(){
        calcular(sel2,sel1,campo2,campo1)
    });
    campo2.addEventListener('change',function(){
        calcular(sel1,sel2,campo1,campo2)
    });
    sel1.addEventListener('change',function(){
        calcular(sel2,sel1,campo2,campo1)
    });
    sel2.addEventListener('change',function(){
        calcular(sel1,sel2,campo1,campo2)
    });
    
    function calcular(inicio,fin,campodestino,campoinicio){
        console.log(inicio.value)
        console.log(fin.value)
        console.log(campodestino.value)
        console.log(campoinicio.value)
        campodestino.value = eval(campoinicio.value* parseFloat((1/inicio.value)*fin.value))
        console.log(campodestino.value)
    }

    
})();