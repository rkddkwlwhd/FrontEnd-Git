/*function add_row(a,b) {
  const $table = document.getElementById('contents-table');
  const $tryNumber = document.getElementById('number').value;

  const $newRow = $table.insertRow();
  const $new1 = $newRow.insertCell(0);
  const $new2 = $newRow.insertCell(1);
  const $new3 = $newRow.insertCell(2);
  check_answer();

  $new1.innerText = 1;
  $new2.innerText = $tryNumber;
  $new3.innerText = `S: ${a}, B: ${b}`;
}
*/

const $numbers = [];
for(let i = 1; i <= 9; i++) {
  $numbers.push(i);
}

const $answer = [];
function selectNumberLength(n) {
  $answer.length = 0;
  for(let i = 0; i < n; i++) {
    const $index = Math.floor(Math.random() * $numbers.length);
    $answer.push($numbers[$index]);
    $numbers.splice($index, 1); 
  }
}

var count = 1;

const $tryNumber = document.getElementById('number');

function inputCheck() {
  if($tryNumber.value.length !== $answer.length) {
    alert(`${$answer.length}자리 숫자를 입력하세요.`);
    return false;
  }
  if(new Set($tryNumber.value).size !== $answer.length) {
    alert(`중복되지 않게 입력하세요.`);
    return false;
  }
  return true;
  //이미 시도한 값인지.
}

function check_answer() {
  if(!inputCheck()){
    return;
  }
  const $str_number = $tryNumber.value.toString();
  const $arr_number = $str_number.split("");

  let $strike = 0;
  let $ball = 0;

  for (let i = 0; i < $answer.length; i++) {
    const index = $str_number.indexOf($answer[i]);
    if (index > -1) {
      if (index === i) {
        $strike++;
        if ($strike === 3) {
          alert(`정답입니다. 정답: ${$answer.join("")}`);
        }
      }
      else {
        $ball++;
      }
    }
  }
  
  const $table = document.getElementById('contents-table');

  const $newRow = $table.insertRow();
  const $new1 = $newRow.insertCell(0);
  const $new2 = $newRow.insertCell(1);
  const $new3 = $newRow.insertCell(2);

  $new1.innerText = count;
  $new2.innerText = $tryNumber.value;
  $new3.innerText = `S: ${$strike}, B: ${$ball}`;

  count++;
}