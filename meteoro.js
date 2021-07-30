



let meteoros = [
    { trimestre: 1 , frase: "Alfa Centaurideos começa em 03/01 e termina em 05/01\nGama Normídeos começa em 17/02 e termina em 20/02\nPi Pupídeos começa em 25/03 e termina em 29/03" } ,
    
    { trimestre: 2 , frase: "Líridas começa em 23/05 e termina em 26/05\nEta Aquáridas começa em 31/05 e termina em 02/06\nBootídeos de Junho começa em 16/06 e termina em 20/06" } ,
    
    { trimestre: 3 , frase:   "Eta Líridas começa em 19/08 e termina em 22/08\nAlfa Capricornídeos começa em 13/09 e termina em 17/09" } ,
    
    { trimestre: 4 , frase:  "Delta Aquáridas do Sul começa em 11/10 e termina em 15/10\nPiscis Austrinídeos começa em 04/12 e termina em 08/12\nPerseidas começa em 27/12 e termina em 31/12" } 
    ];




function adicionar() {
   

    let mes_consulta = document.getElementById('fdata');
   
    let frase_meteoro = '';
    

   let date = new Date(mes_consulta.value);
    const mes_data = date.toLocaleString();
   let mes = date.getMonth() +1 ;
    console.log(mes);

  

 

  
  
 
  if( fdata.value == 0){
    window.alert("Preencha corretamente o campo data!");
  } else {
    


if(mes >= 1 && mes <= 3 ){

    frase_meteoro = meteoros[0].frase;;
}
else if(mes >= 4 && mes <= 6) {
    frase_meteoro = meteoros[1].frase;
}
else if(mes >= 7 && mes <= 9) {
    frase_meteoro = meteoros[2].frase;
}
else if(mes >= 10 && mes <= 12) {
    frase_meteoro = meteoros[3].frase;
}
else {
    
}


res.innerHTML += `<p> "As chuvas de meteoros  são: ${frase_meteoro} </p>`
}
}