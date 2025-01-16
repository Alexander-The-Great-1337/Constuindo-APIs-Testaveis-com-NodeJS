function generateBornDateFromAge(age) {
  return new Date().getUTCFullYear() - age;
}

function generateUserDescription(name, surName, age) {
  const fullname = `${name} ${surName}`;
  const bornAge = generateBornDateFromAge(age);

  return `${fullname} is ${age} old was born in ${bornAge}`;
}

const userInformation = generateUserDescription('Alexandre', 'Pereira', 34);

console.log(userInformation);