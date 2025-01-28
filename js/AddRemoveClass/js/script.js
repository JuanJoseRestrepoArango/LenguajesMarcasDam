(function(){
    let bot = document.querySelector('.boton');
    let clase = document.getElementById('parrafo').classList.value;


    bot.addEventListener('click',function(e){
        let par = document.getElementById('parrafo');
        console.log(document.getElementById('parrafo').classList[0])
        if(!par.classList.contains('clase1')){

            addClass(par,'clase1');
        }else if(!par.classList.contains('clase2')){
            addClass(par,'clase2');
        }else{
            for(let i = 1;i<=2;i++){
                removeClass(par,`clase${i}`)
            }
        }
    })

    function addClass(destino,nombreClase){
        destino.classList.add(nombreClase)
    }
    function removeClass(destino,nombreClase){
        destino.classList.remove(nombreClase)
    }

})();