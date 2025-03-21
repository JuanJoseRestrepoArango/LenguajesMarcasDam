(function () {
    console.log("Hola");
    var meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    var fecha = new Date();
    var ultimoDiaSemana;
    var sel = document.getElementById('años');
    for (var i = fecha.getFullYear() - 10; i <= fecha.getFullYear() + 10; i++) {
        var op = document.createElement('OPTION');
        op.value = i.toString();
        op.text = i.toString();
        sel.appendChild(op);
    }
    sel.selectedIndex = 10;
    for (var i = 0; i < meses.length; i++) {
        crearMes(i, sel.value);
    }
    sel.addEventListener('change', function (e) {
        document.getElementById("marco").innerHTML = "";
        for (var i = 0; i < meses.length; i++) {
            crearMes(i, e.target.value);
        }
    });
    function crearMes(m, año) {
        fecha.setMonth(m);
        fecha.setFullYear(parseInt(año));
        var cadena = "<table align='center' border=5>";
        cadena += "<caption>".concat(meses[fecha.getMonth()].toLocaleUpperCase(), "</caption>");
        cadena += "<thead>";
        cadena += "<tr>";
        cadena += "<th class ='rojo'>L</th><th class ='rojo'>M</th><th class ='rojo'>M</th><th class ='rojo'>J</th><th class ='rojo'>V</th><th class ='rojo'>S</th><th class ='rojo'>D</th>";
        cadena += "</tr>";
        cadena += "</thead>";
        cadena += "<tbody>";
        fecha.setDate(1);
        while (parseInt(fecha.getMonth().toString()) == m) {
            cadena += "<tr>";
            var dia = parseInt(fecha.getDay().toString());
            if (dia == 0) {
                dia = 6;
            }
            else {
                dia = dia - 1;
            }
            for (var j = 0; j < 7; j++) {
                ultimoDiaSemana = j;
                if (fecha.getMonth() != m) {
                    break;
                }
                if (j != dia) {
                    cadena += "<th>--</th>";
                }
                else {
                    cadena += "<th>".concat(fecha.getDate(), "</th>");
                    fecha.setDate(fecha.getDate() + 1);
                    dia = parseInt(fecha.getDay().toString());
                    if (dia == 0) {
                        dia = 6;
                    }
                    else {
                        dia = dia - 1;
                    }
                }
            }
            if (dia === 0) {
                cadena += "</tr>";
            }
            else {
                ultimoDiaSemana = 7 - ultimoDiaSemana;
                for (var i = 1; i <= ultimoDiaSemana; i++) {
                    cadena += "<th>--</th>";
                }
                cadena += "</tr>";
            }
        }
        cadena += "</tbody>";
        cadena += "</table>";
        document.getElementById("marco").innerHTML = document.getElementById("marco").innerHTML + cadena;
    }
})();
// document.write("Dia de la Semana " + fecha.getDay() + "</br>");
//     document.write("Dia del Mes " + eval(fecha.getDate() + 1) + "</br>");
//     document.write("Mes "+fecha.getMonth() + "</br>");
//     document.write("Año "+fecha.getFullYear() + "</br>");
//     document.write("Mes " + meses[fecha.getMonth()].toLocaleUpperCase()+"</br>")
