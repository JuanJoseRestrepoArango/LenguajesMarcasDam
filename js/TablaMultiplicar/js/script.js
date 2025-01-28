(function(){

    sel = document.getElementById('sel');
    const resultado = document.querySelector('.resultado');

    

    for (let i= 1;i<=10;i++){
        let op = document.createElement("OPTION");
        op.text = i;
        op.value = i;
        sel.appendChild(op);
    }

    let cadena = `<table border = "1">
    
        <legend>Tabla de Multiplicar</legend>
        <thead>
            <tr>
            <th>&nbsp</th> `
    
        for(let i = 1;i<=10;i++){
            cadena+=`<td  id = ${i}>  ${i} </td>`;
        }
    
    
        for(let i=1;i<=10;i++){
            cadena +="<tr>"
            cadena +=`<th>${i}</th> `
            
                for(let j=1;j<=10;j++){

                        cadena += `<td>-</td>`;
                    
                }
            cadena +="</tr>"
        }
        cadena+="</tr></thead>"
    
        cadena +="</table>";
        
        resultado.innerHTML = cadena;
        
        ejeX();

    sel.addEventListener('change',function(e) {
        
        valor = e.target.value;

        let cadena = `<table border = "1">
    
        <legend>Tabla de Multiplicar</legend>
        <thead>
            <tr>
            <th>&nbsp</th> `
    
        for(let i = 1;i<=10;i++){
            cadena+=`<td  id = ${i}>  ${i} </td>`;
        }
    
    
        for(let i=1;i<=10;i++){
            cadena +="<tr>"
            cadena +=`<th>${i}</th> `
            
                for(let j=1;j<=10;j++){

                    if(j == valor){

                        cadena += `<td>${i*j}</td>`;

                    }else{

                        cadena += `<td>-</td>`;
                    }   
                    
                }
            cadena +="</tr>"
        }
        cadena+="</tr></thead"
    
        cadena +="</table>";
        
        resultado.innerHTML = cadena;
        
        ejeX();  
     
    })

    
    
    function ejeX(){

        for(let i = 1;i<=10;i++){

            const ejeX = document.getElementById(`${i}`);
            ejeX.classList.add("ejeX");
        }

    }
    
    
   


})();

