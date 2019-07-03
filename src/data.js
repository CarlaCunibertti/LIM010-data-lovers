/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
const dataPoker = (data) => {
  let arrayPoke = [];
  for (let i =0; i< data.length; i++){
     arrayPoke.push({
      nombre : data[i].name,
      imagen : data[i].img, 
    }); 
    }
    return arrayPoke;
};

window.pokemon = {
  dataPoker: dataPoker, 
};
