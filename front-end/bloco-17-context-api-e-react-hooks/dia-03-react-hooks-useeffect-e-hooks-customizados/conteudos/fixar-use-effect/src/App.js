import React, { useEffect, useState } from "react";

function App() {
  const [randomNumber, setRandomNumber] = useState(0)
  const [multiplesThreeFive, setMultiplesThreeFive] = useState(false);

  useEffect(() => {
    const thisSetInterval = setInterval(() => {
      const random = Math.ceil(Math.random() * 100)
      if (random % 3 === 0 || random % 5 === 0) {
        setMultiplesThreeFive(true);
        setTimeout(() => {
          setMultiplesThreeFive(false)
        }, 4000);
      }
      setRandomNumber(random)
    }, 10000); 
    return () => {
      clearInterval(thisSetInterval);
    }
  }, [multiplesThreeFive]);

  return (
    <div>
      <p>{ randomNumber }</p>
      {multiplesThreeFive && <p>Acerto</p>}
    </div>
  );
}

export default App;
