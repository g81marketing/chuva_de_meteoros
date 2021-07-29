let meteoros = [
{ trimestre: 1 , frase: "Alfa Centaurideos começa em 03/01 e termina em 05/01\nGama Normídeos começa em 17/02 e termina em 20/02\nPi Pupídeos começa em 25/03 e termina em 29/03" } ,

{ trimestre: 2 , frase: "Líridas começa em 23/05 e termina em 26/05\nEta Aquáridas começa em 31/05 e termina em 02/06\nBootídeos de Junho começa em 16/06 e termina em 20/06" } ,

{ trimestre: 3 , frase:   "Eta Líridas começa em 19/08 e termina em 22/08\nAlfa Capricornídeos começa em 13/09 e termina em 17/09" } ,

{ trimestre: 4 , frase:  "Delta Aquáridas do Sul começa em 11/10 e termina em 15/10\nPiscis Austrinídeos começa em 04/12 e termina em 08/12\nPerseidas começa em 27/12 e termina em 31/12" } 
];




function adicionar() {

    let mes_consulta = document.getElementById('fdata');
    let mes_data = mes_consulta.value;
    let frase_meteoro = '';
 
  
 
  
    


if(mes_data >= 1 && mes_data <= 3 ){

    frase_meteoro = meteoros[0].frase;;
}
else if(mes_data >= 4 && mes_data <= 6) {
    frase_meteoro = meteoros[1].frase;
}
else if(mes_data >= 7 && mes_data <= 9) {
    frase_meteoro = meteoros[2].frase;
}
else if(mes_data >= 10 && mes_data <= 12) {
    frase_meteoro = meteoros[3].frase;
}
else {
    console.log("Nenhuma chuva de meteoro no período informado");
}


res.innerHTML += `<p> "As chuvas de meteoros do segundo trimestre são: ${frase_meteoro} </p>`
}