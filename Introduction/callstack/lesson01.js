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

function solution(N, ratings) {
    // You must complete the logic for the function that is provided
    // before compiling or submitting to avoid an error.

    // Write your code here

    ratings = ratings.sort((a, b) => a[1] - b[1]);

    let highiest = ratings[ratings.length - 1][1];

    for (let i = 0; i < ratings.length; i++) {
      if (ratings[i][1] >= highiest) {
          console.log(ratings[i]);
          highiest = ratings[i][0];
        }
    }

    return highiest;
}

console.log(solution(2, [[987654171 , 3], [987654478, 3], [987654092,4], [987654421, 3], [987654001, 4]]));