

// OPERADORES LOGICOS OR, AND Y NEGACION

// OPERADOR LOGICO OR
//  SE DEFINE CON LOS SIMBOLOS ||
// PARA RETORNAR UNA SALIDA VERDADERA O TRUE, AL MENOS UN OBJETO DEBE EVALUAR TRUE

let isAdmin = true;
let isPlanPremimum = false;


console.log( isPlanPremimum || isAdmin );



// OPERADOR LOGICO AND
//  SE DEFINE CON LOS SIMBOLOS &&
// PARA RETORNAR UNA SALIDA VERDADERA O TRUE, AMBOS OBJETON DEBE EVALUAR TRUE


let isUserRegister = true;
let isUserVip = true;


console.log( isUserVip && isUserRegister );


if (isUserVip && isUserRegister){
    console.log("tienes aacceso mas tweets!!");
} else {
    console.log("aacceso limitado..")
}



// OPERADOR LOGICO NEGACION
//  SE DEFINE CON EL SIMBOLO !


let isLoginUser = true;


console.log(!isLoginUser);




// ;

// console.log(isAdmin && isPlanPremimum || isUserVip && !isLoginUser);
