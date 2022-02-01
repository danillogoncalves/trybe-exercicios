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
    .then(data => {
      const joke = data.joke;
    jokeRandom(joke);
    })
    .catch(error => {const joke = `Algo deu errado :( \n${error}`;
    jokeRandom(joke);
  });
};

window.onload = () => fetchJoke();