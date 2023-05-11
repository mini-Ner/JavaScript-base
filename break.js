for(let i = 0;i<5;i++){
  for(let y=0;y<5;y++){
    console.log("inner loop\n");
    break;
    console.log("break문 뒷 코드는 실행되지 않는다.");
  }
  console.log("outter loop\n");
}

console.log("====================\n");

for(let a=0;a<10;a++){
  for(let b=0;b<10;b++){
    console.log("들어갑니다.");
    break;
    console.log("break문 뒷 코드는 실행되지 않는다.");
  }
  console.log("밖으로 나갑니다.\n");
}
   console.log("=====================\n");