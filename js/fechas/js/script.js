(function(){
    let meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
    let fecha = new Date();

    const sel = document.getElementById('años');

    
    for(let i = 2000;i<=2025;i++){
        let op = document.createElement('OPTION');
        op.value = i;
        op.text = i;
        sel.appendChild(op);
    }

    for (let i = 0; i< meses.length;i++){
        crearMes(i,sel.value);
    }
    
   sel.addEventListener('change',function(e){
        document.getElementById("marco").innerHTML = "";
        for (let i = 0; i< meses.length;i++){
            crearMes(i,e.target.value);
        }
   })
    

    function crearMes(m,año){
        fecha.setMonth(m);
        fecha.setFullYear(año);
        let cadena = "<table align='center' border=1>";
        cadena += `<caption>${meses[fecha.getMonth()].toLocaleUpperCase()}</caption>`;
        cadena += "<thead>";
        cadena += "<tr>";
        cadena += "<th>L</th><th>M</th><th>M</th><th>J</th><th>V</th><th>S</th><th>D</th>";
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
                
                if(fecha.getMonth() != m){
                    break;
                }

                if(j != dia){
                    cadena+=`<th>--</th>`;
                }else{
                    cadena+=`<th>${fecha}</th>`;
                    fecha.setDate(fecha.getDate()+1);
                    dia = parseInt(fecha.getDay());
                    if(dia == 0){
                        dia = 6;
                    }else{
                        dia = dia-1
                    }
                }
                
            }

            cadena += "</tr>";
        }

        console.log(fecha.getFullYear())
        cadena += "</tbody>";
        cadena += "</table>";
    
        document.getElementById("marco").innerHTML = document.getElementById("marco").innerHTML + cadena;
        }
    
})()

// document.write("Dia de la Semana " + fecha.getDay() + "</br>");
//     document.write("Dia del Mes " + eval(fecha.getDate() + 1) + "</br>");
//     document.write("Mes "+fecha.getMonth() + "</br>");
//     document.write("Año "+fecha.getFullYear() + "</br>");
 
//     document.write("Mes " + meses[fecha.getMonth()].toLocaleUpperCase()+"</br>")