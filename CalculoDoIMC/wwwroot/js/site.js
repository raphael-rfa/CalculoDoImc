function calcular() {
    const message = document.getElementById("p01");
    message.innerHTML = "";
    let x = document.getElementById("Altura").value;
    let y = document.getElementById("Peso").value;
    let imc = " ";
    try {
        if (x == "" || y == "") throw "Preencha os campos";
        if (isNaN(x) || isNaN(y)) throw "Dados invalidos";
        if (x != "" || y != "" || !isNaN(x) || !isNaN(y)) {
            x = Number(x);
            y = Number(y);
            imc = y / (x * x);
        }
        document.getElementById("p02").innerHTML = ` Seu Imc : ${imc.toFixed(1) }`;
    }
    catch (err) {
        message.innerHTML =  err;
    }
    if (imc > 0) {
        if (imc < 18.5) {
            document.getElementById("abaixo").style.backgroundColor = "red";
            document.getElementById("abaixo").style.color = "white";
            document.getElementById("normal").style.color = "black";
            document.getElementById("acima").style.color = "black";
            document.getElementById("obesidade").style.color = "black";
            document.getElementById("morbida").style.color = "black";
            document.getElementById("normal").style.backgroundColor = "white";
            document.getElementById("acima").style.backgroundColor = "white";
            document.getElementById("obesidade").style.backgroundColor = "white";
            document.getElementById("morbida").style.backgroundColor = "white";
        }
        else if (imc >= 18.5 && imc <= 24.9) {
            document.getElementById("abaixo").style.backgroundColor = "white";
            document.getElementById("normal").style.backgroundColor = "green";
            document.getElementById("abaixo").style.color = "black";
            document.getElementById("normal").style.color = "white";
            document.getElementById("acima").style.color = "black";
            document.getElementById("obesidade").style.color = "black";
            document.getElementById("morbida").style.color = "black";
            document.getElementById("acima").style.backgroundColor = "white";
            document.getElementById("obesidade").style.backgroundColor = "white";
            document.getElementById("morbida").style.backgroundColor = "white";
        }
        else if (imc >= 25 && imc <= 29.9) {
            document.getElementById("abaixo").style.backgroundColor = "white";
            document.getElementById("normal").style.backgroundColor = "white";
            document.getElementById("acima").style.backgroundColor = "yellow";
            document.getElementById("abaixo").style.color = "black";
            document.getElementById("normal").style.color = "black";
            document.getElementById("obesidade").style.color = "black";
            document.getElementById("morbida").style.color = "black";
            document.getElementById("obesidade").style.backgroundColor = "white";
            document.getElementById("morbida").style.backgroundColor = "white";

        }
        else if (imc > 30 && imc <= 35.9) {
            document.getElementById("abaixo").style.backgroundColor = "white";
            document.getElementById("normal").style.backgroundColor = "white";
            document.getElementById("acima").style.backgroundColor = "white";
            document.getElementById("obesidade").style.backgroundColor = "red";
            document.getElementById("obesidade").style.color = "white";
            document.getElementById("acima").style.color = "balck";
            document.getElementById("abaixo").style.color = "black";
            document.getElementById("normal").style.color = "black";
            document.getElementById("morbida").style.color = "black";
            document.getElementById("morbida").style.backgroundColor = "white";
        }
        else {
            document.getElementById("abaixo").style.backgroundColor = "white";
            document.getElementById("normal").style.backgroundColor = "white";
            document.getElementById("acima").style.backgroundColor = "white";
            document.getElementById("obesidade").style.backgroundColor = "white";            
            document.getElementById("morbida").style.backgroundColor = "black";
            document.getElementById("morbida").style.color = "white";
            document.getElementById("acima").style.color = "black";
            document.getElementById("abaixo").style.color = "black";
            document.getElementById("normal").style.color = "black";
            document.getElementById("obesidade").style.color = "black";
        }
    }

}