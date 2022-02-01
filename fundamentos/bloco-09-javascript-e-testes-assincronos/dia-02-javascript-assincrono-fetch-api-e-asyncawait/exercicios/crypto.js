const cryptoURL = 'https://api.coincap.io/v2/assets';

const olTopCrypCoin = document.querySelector('#crypto-ol');

const append = (param) => {
  param.forEach((coin) => {
    const li = document.createElement('li');
    li.innerHTML = coin;
    olTopCrypCoin.appendChild(li);
  });
};

const fetchCoin = () => {
  const espec = {
    method: 'GET',
    redirect: 'follow'
  }

  fetch(cryptoURL, espec)
    .then((response) => response.json())
    .then(({ data }) => append(data.filter(({ rank }) => Number(rank) <= 10)
      .map(({ name, symbol, priceUsd }) => `${name} (${symbol}): ${Number(priceUsd).toFixed(2)}`)))
    .catch((error) => console.log(error));
};

window.onload = () => fetchCoin();