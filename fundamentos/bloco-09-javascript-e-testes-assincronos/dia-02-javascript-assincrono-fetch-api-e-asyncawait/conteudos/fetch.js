const fetch = require('node-fetch');

// FETCH > THEN | CATCH

// const fetch = require('node-fetch');

// const fetchJoke = () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data.value))
//     .catch((error) => console.log(`Alogo deu errado : ( \n${error}`));
// };

// fetchJoke();

// const fetch = require('node-fetch');

// const fetchJoke = () => {
//   const url = 'api.chucknorris.io/jokes/random?category=dev';

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data.value))
//     .catch((error) => console.log(`Alogo deu errado : ( \n${error}`));
// };

// fetchJoke();

// ASYNC and AWAIT

// Usando then() e catch()

// const fetchJoke = async () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   const result = await fetch(url)
//     .then((response) => response.json())
//     .then((data) => data.value)
//     .catch((error) => `Alogo deu errado : ( \n${error}`);

//   console.log(result);
// };

// fetchJoke();

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  try {
    const reponse = await fetch(url);
    const data = await reponse.json();
    console.log(data.value);
  } catch(error) {
    console.log(`Alogo deu errado : ( \n${error}`);
  }
};

fetchJoke();