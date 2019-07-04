/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
const dataPoker = (pokeData) => {
  let newArrayPoke = [];
  for (let i =0; i< pokeData.length; i++){
    
      newArrayPoke.push({
      nombre : pokeData[i].name,
      imagen :pokeData[i].img,
      multipliers : pokeData[i].multipliers, 

    }); 
    }
    return newArrayPoke;
};

window.pokemon = {
  dataPoker: dataPoker, 
};

