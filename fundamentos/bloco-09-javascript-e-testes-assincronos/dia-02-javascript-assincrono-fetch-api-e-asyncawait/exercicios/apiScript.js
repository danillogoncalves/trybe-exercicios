// apiScript.js
const jokeContainer = document.querySelector('#jokeContainer');

const jokeRandom = (joke) => {
  jokeContainer.innerHTML = joke;
}

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => jokeRandom(data.joke))
    .catch(error => jokeRandom(`Algo deu errado :( \n${error}`));
};

window.onload = () => fetchJoke();