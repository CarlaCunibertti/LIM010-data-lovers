/* Manejo del DOM */
const loginVista = document.getElementById('login-box');
const pokemonVista =document.getElementById('pokemon-vista');
const btnLogin= document.getElementById('btnlogin');
const contenedor = document.getElementById("contenedor");
const pokeData = POKEMON.pokemon;
const name = document.getElementById("name");
const mainHeader = document.getElementById("main-header");

btnLogin.addEventListener('click', () => {
    const userValue = document.getElementById('username').value;
    const passwordValue = document.getElementById('password').value;
    if (userValue === 'c' && passwordValue === '1') {
        loginVista.classList.add('hide');
        pokemonVista.classList.remove('hide');
        mainHeader.classList.remove('hide');
    }
    else { 
        document.getElementById('result1').innerHTML = "Contraseña errada,intentelo nuevamente";
     }
});

const mostrarPoker = (data) => {

  let mostrar = '';

  for(let i = 0; i< data.length; i++){

      let llamado = `
      <div>
         <img src ="${data[i].img}"/>
         <p>Nombre : ${data[i].name}</p>
      </div>`;
      
      mostrar+= llamado;
 }
 return mostrar;

};
contenedor.innerHTML = mostrarPoker(pokeData);

