
/*Crea una arrow function que tenga dos parametros a y b y
que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre
por consola la suma de los dos parametros.
1.1 Ejecuta esta función sin pasar ningún parametro
1.2 Ejecuta esta función pasando un solo parametro
1.3 Ejecuta esta función pasando dos parametros*/


const sum = (a=10, b=5) => {
    console.log(a + b);
}

sum();

/////////////////////////////

const siete = 7;

const suma= (a, b=5)=>{
    console.log (a + b);
}

suma(siete);

////////////////////////////

const cinco = 5;
const veinticuatro = 24;

const miSuma =(a, b)=>{
    console.log (a + b);
}

miSuma (cinco, veinticuatro);
