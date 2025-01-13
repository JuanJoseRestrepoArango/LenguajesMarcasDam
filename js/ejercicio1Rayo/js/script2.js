function calcular(){
    let a = document.querySelector("#op1").value
    let b = document.querySelector("#operacion").value
    let c = document.querySelector("#op2").value

    document.getElementById("resultado").innerHTML=eval(a+b+c)
    console.log(b)
}