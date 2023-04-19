var text = dt_nascimento;
var year = text.split("/");
var substring = year[2].slice(0, 2);
var new_dt_nascimento = text.replace(substring, "");

document.getElementById("curso").innerHTML = curso.toUpperCase();
document.getElementById("nome").innerHTML = "<b>NOME: </b>" + nome.toUpperCase();
document.getElementById("matricula").innerHTML = "<b>MATRICULA: </b>" + matricula.toUpperCase();
document.getElementById("rg").innerHTML = "<b>IDENTIDADE: </b>" + rg;
document.getElementById("dt_nascimento").innerHTML = "<b>DATA NASCIMENTO: </b>" + new_dt_nascimento;
document.getElementById("campus").innerHTML = "<b>CAMPUS: </b>" + campus.toUpperCase();
document.getElementById("validade").innerHTML = "VALIDADE: " + getValidade();