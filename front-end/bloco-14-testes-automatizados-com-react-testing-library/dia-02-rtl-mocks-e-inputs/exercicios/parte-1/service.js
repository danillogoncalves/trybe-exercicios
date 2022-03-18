const randomNumber = () => {
  return Math.floor(Math.random() * 101 );
};

const upperCaseString = (string) => {
  return string && string.toUpperCase()
};
const firstLetter = (string) => {
  return string && string.slice(0, 1);
};

const sumWorks = (work1, work2) => {
  const validation = (work1 && work2);
  return validation && `${work1} ${work2}`;
};

module.exports = {
  randomNumber,
  upperCaseString,
  firstLetter,
  sumWorks,
};
