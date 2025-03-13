(function(){
    let meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
    let fecha = new Date();
    let ultimoDiaSemana;
    const sel = document.getElementById('años');
    
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    for(let i = fecha.getFullYear()-10;i<=fecha.getFullYear()+10;i++){
        let op = document.createElement('OPTION');
        op.value = i;
        op.text = i;
        sel.appendChild(op);
    }

    sel.selectedIndex = 10;

    for (let i = 0; i< meses.length;i++){
        crearMes(i,sel.value);
    }
    
   sel.addEventListener('change',function(e){
        document.getElementById("marco").innerHTML = "";
        for (let i = 0; i< meses.length;i++){
            crearMes(i,e.target.value);
        }
        fiestas(e.target.value);
   })
   fiestas(sel.value);
   

    function crearMes(m,año){
        fecha.setMonth(m);
        fecha.setFullYear(año);
        let cadena = "<table align='center' border=5>";
        cadena += `<caption>${meses[fecha.getMonth()].toLocaleUpperCase()}</caption>`;
        cadena += "<thead>";
        cadena += "<tr>";
        cadena += "<th class ='rojo'>L</th><th class ='rojo'>M</th><th class ='rojo'>M</th><th class ='rojo'>J</th><th class ='rojo'>V</th><th class ='rojo'>S</th><th class ='rojo'>D</th>";
        cadena += "</tr>";
        cadena += "</thead>";
        cadena += "<tbody>";
        
        
        fecha.setDate(1);

        while (parseInt(fecha.getMonth()) == m){
        
            cadena += "<tr>";
            let dia = parseInt(fecha.getDay());   
            if(dia == 0){
                dia = 6;
            }else{
                dia = dia-1
            }
            for (let j = 0;j< 7;j++){
                ultimoDiaSemana = j;
                if(fecha.getMonth() != m){
                    break;
                }

                if(j != dia){
                    cadena+=`<th>--</th>`;
                }else{
                    cadena+=`<th id = id${diaño(fecha)}>${fecha.getDate()}</th>`;
                    fecha.setDate(fecha.getDate()+1);
                    dia = parseInt(fecha.getDay());
                    
                    if(dia == 0){
                        dia = 6;
                    }else{
                        dia = dia-1
                    }
                }
                
                
            }

            if(dia === 0){
                cadena += "</tr>";
            }else{
                ultimoDiaSemana = 7- ultimoDiaSemana;
                for(let i = 1; i<=ultimoDiaSemana;i++){
                    
                    cadena+=`<th>--</th>`;
                    
                }
                cadena += "</tr>";
            }
        }
        
        
        cadena += "</tbody>";
        cadena += "</table>";
    
        document.getElementById("marco").innerHTML = document.getElementById("marco").innerHTML + cadena;
    }

    function diaño(b) {
        var utc1 = Date.UTC(b.getFullYear()-1,11,31);
        var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
      
        return Math.floor((utc2 - utc1) / _MS_PER_DAY);
    } 

    function ndias(a, b) {
        var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
      
        return Math.floor((utc2 - utc1) / _MS_PER_DAY);
    } 

    function fiestas(año){
        
        var fi=[{"dia":"1","mes":"0","fiesta":"Año nuevo","color":"green"},
        
        {"dia":"6","mes":"0","fiesta":"Epifanía del Señor","color":"green"},
        {"dia":"5","mes":"1","fiesta":"Cumpleaños de mi madre","color":"green"},
        
        {"dia":"24","mes":"2","fiesta":"Jueves Santo","color":"blue"},
        
        {"dia":"25","mes":"2","fiesta":"Viernes Santo","color":"green"},
        
        {"dia":"2","mes":"4","fiesta":"Día de la Comunidad de Madrid","color":"blue"},
        
        {"dia":"16","mes":"4","fiesta":"San Isidro","color":"pink"},
        
        {"dia":"25","mes":"6","fiesta":"Santiago Apóstol","color":"blue"},
        
        {"dia":"15","mes":"7","fiesta":"Asunción de la Virgen","color":"green"},
        {"dia":"10","mes":"8","fiesta":"Cumpleaños","color":"green"},
        
        {"dia":"12","mes":"9","fiesta":"Fiesta Nacional Española","color":"green"},
        {"dia":"30","mes":"9","fiesta":"Cumpleaños de mi Padre","color":"green"},
        
        {"dia":"1","mes":"10","fiesta":"Día de Todos los Santos","color":"green"},

        
        {"dia":"9","mes":"10","fiesta":"La Almudena","color":"pink"},
        
        {"dia":"6","mes":"11","fiesta":"Día de la Constitución Española","color":"green"},
        
        {"dia":"8","mes":"11","fiesta":"Inmaculada Concepción","color":"green"},
        
        {"dia":"26","mes":"11","fiesta":"Natividad del Señor","color":"blue"}
    
    ];
    
    
    
    for(d=0;d< fi.length ;d++){
    
        i=diaño(new Date( año, fi[d].mes,fi[d].dia));
    
        document.getElementById("id"+i).style.backgroundColor=fi[d].color;
    
    }
    
    
    
    }
        
        
    
})()

// document.write("Dia de la Semana " + fecha.getDay() + "</br>");
//     document.write("Dia del Mes " + eval(fecha.getDate() + 1) + "</br>");
//     document.write("Mes "+fecha.getMonth() + "</br>");
//     document.write("Año "+fecha.getFullYear() + "</br>");
 
//     document.write("Mes " + meses[fecha.getMonth()].toLocaleUpperCase()+"</br>")