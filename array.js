const winners = [12, 123, 8, 58]
const weekdays = ['월','화','수','목','금','토','일']

const randoms = ['홍길동',-24, true,null,undefined];

console.log(typeof winners);
console.log(winners[0],weekdays[4],randoms[3]);

const numbers = [1,2,3];

numbers[2] = 5;
console.log(numbers);

const person2 = {
  name: '이춘향',
  age: 20,
  languages:['korean','english','french'],
  education: {
    school:'한국대',
    major: ['반려동물학과', '유아교육과'],
    graduated: true,
  }
};

console.log(person2.name);
console.log(person2.languages[1]);
console.log(person2.education.graduated);
