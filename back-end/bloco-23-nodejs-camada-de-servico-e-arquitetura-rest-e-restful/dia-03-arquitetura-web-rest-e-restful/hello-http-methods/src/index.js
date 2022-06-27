const fetch = require('node-fetch');

// const fetchPostmanApi = async () => {
  //   try {
    //     const response = await fetch('https://postman-echo.com/get?param1=teste');
    //     if (!response.ok) return Promise.reject(response);
    //     const json = response.json();
    //     console.log(json);
    //   } catch (error) {
    //     if (error.status) {
      //       return console.error(`Request failed with status ${errorOrResponse.status}`);
      //     }
      //     console.error(error);
      //   }
      // }

// Para aquecer, vamos começar com uma requisição do tipo `GET`
fetch('https://postman-echo.com/get?param1=teste')
  .then((response) => {
    // Ao receber a resposta, verificamos se correu tudo bem
    if (!response.ok) {
      // Caso não, forçamos a Promise a ser rejeitada
      return Promise.reject(response);
    }

    // Caso esteja tudo OK, lemos o body como JSON
    return response.json();
  })
  .then((data) => {
    // Por fim, escrevemos o body no console
    console.log(data);
  })
  .catch((errorOrResponse) => {
    // Em caso de falha simples (a request completou com um status diferente de 2xx)
    // simplesmente logamos o status no console
    if (errorOrResponse.status) {
      return console.error(`Request failed with status ${errorOrResponse.status}`);
    }

    // Caso tenha acontecido um erro de rede (não foi possível completar a request)
    // logamos o erro todo
    console.error(errorOrResponse);
  });
