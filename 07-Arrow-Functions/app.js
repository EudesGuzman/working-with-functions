const rapid = (str) => {
let vocales ="";

    for (let i = 0; i < str.length; i++) {
        
        if (str[i] == "a" || str[i] == "e" ||str[i] == "i" || str[i] == "o" || str[i] == "u"){
          vocales = vocales.concat("");
       } else {
         vocales = vocales.concat(str[i]);

       }

    
    };
    return vocales.toUpperCase();
} 

// From this line up Do not change code below
let str = "John";
console.log(rapid(str)); 



