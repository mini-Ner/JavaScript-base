function test(arrdata){
  var sum = 0;
  for(var i=0;i<arrdata.length;i++){
    sum += Number(prompt(arrdata[i] + "점수는?","0"));
  }
  var avg = sum / arrdata.length;
  return avg;
}

var arrsubject = ["국어","수학"];
var result = test(arrsubject);

document.write("평균점수는" + result + "점입니다.");