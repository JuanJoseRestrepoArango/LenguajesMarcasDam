window.onload = function(){
    console.log("El archivo JavaScript ha sido cargado");
    const header = document.querySelector("header");
    const boton = document.querySelector("button");
    // boton.onclick = function(){
    //     header.innerHTML = "<h1>" + (parseInt(header.innerText)+1)+" "+ "</h1>" ;
    //     // header.innerHTML = "<h1>${parseInt(header.innerText)+1}</h1>" ;
    // }
    // header.innerHTML = "<h1>2</h1>"

    boton.addEventListener("keydown",function(){
        header.innerHTML = "<h1>" + (parseInt(header.innerText)+1)+" "+ "</h1>" ;
    })
}
