(function(){
    var DE = 0.719;
    var DY = 101.615;
    var DL = 0.596;

    var principales = ['DE','DY','DL'];
    var nombre = ['dolar','euro','yen','libra']
    rellenar(DE,DY,DL);

    for(let i = 0; i<principales.length;i++){
        document.getElementById(principales[i]).addEventListener('change',function(){
            rellenar(document.getElementById(principales[0]).value,document.getElementById(principales[1]).value,document.getElementById(principales[2]).value);
        });
    }

    function rellenar(DE,DY,DL){
        let ED = 1/DE;
        let YD = 1/DY;
        let LD = 1/DL;

        let EY = ED * DY
        let EL = ED * DL

        let YE = YD * DE
        let YL = YD * DL

        let LE = LD * DE
        let LY = LD * DY
        
        document.getElementById('DE').value = redondear(DE);
        document.getElementById('DY').value = redondear(DY);
        document.getElementById('DL').value = redondear(DL);

        document.getElementById('ED').value = redondear(ED);
        document.getElementById('YD').value = redondear(YD);
        document.getElementById('LD').value = redondear(LD);

        document.getElementById('EY').value = redondear(EY);
        document.getElementById('EL').value = redondear(EL);

        document.getElementById('YE').value = redondear(YE);
        document.getElementById('YL').value = redondear(YL);

        document.getElementById('LE').value = redondear(LE);
        document.getElementById('LY').value = redondear(LY);
    }

    function calcularCuadros(d,e,y,l){
         
    }

    function redondear(n) {
        return Math.round(n * 1000000) / 1000000;
    }
 
})()