function transformarFormatoData(data) {
    var partesData = data.split('/');
    var anoAbreviado = partesData[2].substring(2);
    var novaData = partesData[0] + '/' + partesData[1] + '/' + anoAbreviado;
    return novaData;
}

document.getElementById("curso").innerHTML = curso.toUpperCase();
document.getElementById("nome").innerHTML = "<b>NOME: </b>" + nome.toUpperCase();
document.getElementById("matricula").innerHTML = "<b>MATRICULA: </b>" + matricula.toUpperCase();
document.getElementById("rg").innerHTML = "<b>IDENTIDADE: </b>" + rg;
document.getElementById("dt_nascimento").innerHTML = "<b>DATA NASCIMENTO: </b>" + transformarFormatoData(dt_nascimento);
document.getElementById("campus").innerHTML = "<b>CAMPUS: </b>" + campus.toUpperCase();
document.getElementById("validade").innerHTML = "VALIDADE: " + getValidade();