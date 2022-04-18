let entrada = prompt("Ingrese un número");

while(entrada != "0") {
    alert("Usted ingresó "+ entrada);

    entrada = prompt("Ingrese otro número");

    if (entrada === "0"){
        alert("Gracias por participar")
    }
}
