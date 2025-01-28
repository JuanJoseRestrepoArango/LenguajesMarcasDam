(function(){

    let provincias=[
        ["Almería","Cádiz","Córdoba","Granada"," Huelva","Jaén","Málaga","Sevilla"],
        ["Huesca","Teruel","Zaragoza"],
        ["El Hierro","Fuerteventura","Gran Canaria","La Gomera","La Palma","Lanzarote","Tenerife"],
        ["Cantabria/Santander"],
        ["Avila","Burgos","León","Palencia","Salamanca","Segovia","Soria","Valladolid","Zamora"],
        ["Albacete","Ciudad Real","Cuenca","Guadalajara","Toledo"],
        ["Barcelona","Girona","Lleida","Tarragona"],
        ["Ceuta y Melilla"],
        ["Madrid"],
        ["Navarra/Pamplona"],
        ["Alicante","Castellón","Valencia"],
        ["Badajoz","Cáceres"],
        ["La Coruña","Lugo","Orense","Pontevedra"],
        ["Formentera","Ibiza","Mallorca","Menorca"],
        ["La Rioja/Logroño"],
        ["Alava","Guipúzcoa","Vizcaya"],
        ["Asturias/Oviedo"],
        ["Murcia"]];
    let cautonomas=["Andalucía",
        "Aragón",
        "Canarias",
        "Cantabria",
        "Castilla y León",
        "Castilla la Mancha",
        "Cataluña",
        "Ceuta",
        "Comunidad de Madrid",
        "Comunidad de Navarra",
        "Comunidad Valenciana",
        "Extremadura",
        "Galicia",
        "Islas Baleares",
        "La Rioja",
        "Pais Vasco",
        "Principado de Asturias",
        "Region de Murcia"];

    const destino = document.getElementById("marco1990");
    for(let i = 0;i<cautonomas.length;i++){
        setImagen(i,destino);
    }

    destino.addEventListener('click',function(e){
        origen = document.getElementById(e.target.id);
        console.log(origen);
    })


    //cargar imagenes

    function setImagen(k,destino){

        var element = document.createElement('img');
        element.setAttribute("src", `img/${cautonomas[k]}.gif`);
        element.setAttribute("height", "50");
        element.setAttribute("width", "50");
        element.setAttribute("id", `img_${k}`);
        destino.appendChild(element);

        let ori= document.getElementById("img_"+k);
        ori.addEventListener
       
    }
})();