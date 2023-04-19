function formataData(data = new Date()) {
    var dia = data.getDate();
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();

    if (dia.toString().length == 1) dia = '0' + dia;
    if (mes.toString().length == 1) mes = '0' + mes;

    return "Data: " + dia + '/' + mes + '/' + ano;
}

document.getElementById("matricula").innerHTML = matricula.toUpperCase();
document.getElementById("matricula_").innerHTML = matricula.toUpperCase();
document.getElementById("nome").innerHTML = nome.toUpperCase();
document.getElementById("rg").innerHTML = rg;
document.getElementById("dt_nascimento").innerHTML = dt_nascimento;
document.getElementById("curso_id").innerHTML = curso_id + " - " + curso.toUpperCase();
document.getElementById("unidade").innerHTML = unidade.toUpperCase();
document.getElementById("localData").innerHTML = formataData();
document.getElementById("validade").innerHTML = getValidade();