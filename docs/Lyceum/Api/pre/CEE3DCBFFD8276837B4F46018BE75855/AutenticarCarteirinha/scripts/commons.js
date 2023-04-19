function getValidade(){
    date = new Date();
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();
    let vencimento = "DEZ";

    if (currentMonth >= 0 && currentMonth <= 6){
        vencimento = "JUL";
    }
    let validade = vencimento + "/" + currentYear 
    return validade.toUpperCase()   
}