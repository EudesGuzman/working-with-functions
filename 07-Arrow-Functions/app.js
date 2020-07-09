const rapid = (str)=>{
    let letras= str.toUpperCase().split('');
    let palabra;

    for( let i = 0; i < letras.length; i++){
         //    if ( letras[i] !== "A" || letras[i] !== "E" || letras[i] !== "I" || letras[i] !== "O" || letras[i] !== "U"){
        if (letras[i] !== "O"){
               palabra = letras.splice(i,4)
               console.log(palabra);

        }  
     }

};

   // From this line up Do not change code below
   let str = "John";
   console.log(rapid(str));


