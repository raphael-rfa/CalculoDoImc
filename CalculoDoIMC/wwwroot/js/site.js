function myFunction() {
    const message = document.getElementById("p01");
    message.innerHTML = "";
    let x = document.getElementById("Altura").value;
    let y = document.getElementById("Peso").value;
    let imc = " ";
    try {
        if (x == "" || y == "") throw "empty";
        if (isNaN(x) || isNaN(y)) throw "not a number";
        x = Number(x);
        y = Number(y);
        imc = y / (x * x);
        document.getElementById("p02").innerHTML = imc.toFixed(1);
    }
    catch (err) {
        message.innerHTML = "Input is " + err;
    }
    if (imc < 20) {
        document.getElementById("p03").innerHTML = `O seu imc é de ${imc.toFixed(1)} e indica que você esta abaixo do peso.`
    }
    else if (imc >= 20 && imc <= 25) {
        document.getElementById("p03").innerHTML = `O seu imc é de ${imc.toFixed(1)} que é considerado normal.`            
    }
    else if (imc > 25 && imc <= 30) {
        document.getElementById("p03").innerHTML = `O seu IMC é de ${imc.toFixed(1)} indicando que você esta com excesso de peso.`
            
    }
    else if (imc > 30 && imc <= 35) {
        document.getElementById("p03").innerHTML = `O seu IMC é de ${imc.toFixed(1)} indicando obesidade.`
    }
    else {
            document.getElementById("p03").innerHTML = `O seu IMC é de ${imc.toFixed(1)} indicando obesidade mórbida.`
    }
}