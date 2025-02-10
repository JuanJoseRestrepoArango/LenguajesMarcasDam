(function(){
    var DE = 0.719;
    var DY = 101.615;
    var DL = 0.596;

    

    rellenar(DE,DY,DL)
    


    
    document.getElementById('DE').addEventListener('change',function(){
        cambiar(document.getElementById('DE').value,DY,DL);
    });
    document.getElementById('DY').addEventListener('change',function(){
        cambiar(DE,document.getElementById('DY').value,DL);
    });
    document.getElementById('DL').addEventListener('change',function(){
        cambiar(DE,DY,document.getElementById('DL').value);
    });

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
        
        document.getElementById('DE').value = DE
        document.getElementById('DY').value = DY
        document.getElementById('DL').value = DL

        document.getElementById('ED').value = ED
        document.getElementById('YD').value = YD
        document.getElementById('LD').value = LD

        document.getElementById('EY').value = EY
        document.getElementById('EL').value = EL

        document.getElementById('YE').value = YE
        document.getElementById('YL').value = YL

        document.getElementById('LE').value = LE
        document.getElementById('LY').value = LY
    }
    function cambiar(DE,DY,DL){
        let ED = 1/DE;
        let YD = 1/DY;
        let LD = 1/DL;

        let EY = ED * DY
        let EL = ED * DL

        let YE = YD * DE
        let YL = YD * DL

        let LE = LD * DE
        let LY = LD * DY
        

        document.getElementById('ED').value = ED
        document.getElementById('YD').value = YD
        document.getElementById('LD').value = LD

        document.getElementById('EY').value = EY
        document.getElementById('EL').value = EL

        document.getElementById('YE').value = YE
        document.getElementById('YL').value = YL

        document.getElementById('LE').value = LE
        document.getElementById('LY').value = LY
    }
})()