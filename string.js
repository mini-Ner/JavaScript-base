let word1 = '작은따옴표 안에\'작은따옴표\' 사용';
let word2 = "큰따옴표 안에\"큰따옴표\" 사용";

console.log(word1, word2);

console.log('안녕하세요\n반갑습니다');

let word3 = `안녕하세요 반갑습니다~! \n
저는 \\ 홍길동 \\ 입니다~`;

console.log(word3);

const NAME = '홍길동';
let age = 20;
let married = false;

console.log(
  `제 이름은 ${NAME}, 나이는 ${age}세구요,\
  ${married ? '기혼' : '미혼'}입니다.`
);
console.log(`일 더하기 이는 ${1 + 2}이다`);