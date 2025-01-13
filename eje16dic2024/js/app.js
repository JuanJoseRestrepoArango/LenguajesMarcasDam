(function(){
    const campNombre = document.querySelector('#nombre');
    if(campNombre.value.length <3 || campNombre.value.length>12){
        console.log("error")
    }
})();