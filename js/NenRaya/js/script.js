(function(){


    const sel = document.getElementById('sel');
    let contador = 0;

    
    for(let i = 1;i<=15;i++){
        let op = document.createElement('OPTION');
        op.value = i;
        op.text = i;
        sel.appendChild(op);
    }
    
    const tabla = document.querySelector('.tabla');
    //console.log(tabla);

    sel.addEventListener('change', function(e){
        valor = e.target.value;

        let cadena= `
        <table border = "1">

        <legend> ${valor} en Raya </legend>

        <thead>
            <tr>
            <th>&nbsp</th>
        `

        for (let i = 1;i<=valor;i++){
            cadena+= `<td id = n${i}> ${i} </td>`;
        }

        for(let i = 1; i<=valor;i++){
            cadena += "<tr>"
            cadena += `<th>${i}</th>`
            for( let j = 1;j<=valor;j++){
                cadena+=`<td ><div id=${i}${j}>-</div></td>`
            }
            cadena +="</tr>"
        }

        cadena+="</tr></thead>"
    
        cadena +="</table>"; 
        

        tabla.innerHTML = cadena;

        

        document.querySelector('DIV').addEventListener('click',function(e){

            console.log(e.target.id);

            if(parseInt(e.target.id) >= 11 && parseInt(e.target.id) <= 1515 && contador % 2 == 0){
                e.target.innerHTML = "x"
                e.target.classList.add('seleccionado1')
                contador ++;
                console.log(contador)
            }else if(parseInt(e.target.id) >= 11 && parseInt(e.target.id) <= 1515 && contador % 2 !=0){
                e.target.innerHTML = "o"
                e.target.classList.add('seleccionado2')

                contador ++;
            }

        })
        document.querySelector('DIV').addEventListener('dblclick',function(e){

            console.log(e.target.id);

            if(parseInt(e.target.id) >= 11 && parseInt(e.target.id) <= 1515){
                e.target.innerHTML = "-"
                e.target.classList.remove('seleccionado1')
                e.target.classList.remove('seleccionado2')
                contador--;
            }

        })
        
    });
})();