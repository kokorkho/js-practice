let a = 6;


// >= <= == != 
// if (a < 9) {
//     // true
//     console.log("Yes");
// }
// else {
//     console.log('else');
// }

const button = document.querySelector('button');
const input = document.querySelector('.age');

// => стрелочная функция
button.onclick = () => {
  let num = +input.value;
  if (num >= 16 && num < 60) {
    console.log('welcome!!!');
  }
  else if (num > 60) {
  console.log('ты точно сюда?!');
  }
  else {
    console.log('ты не пройдешь');
  }


switch (num) {
    case 15:
        console.log('еще год потерпи!!!');
        break;
        case 16:
            console.log('проходи уже!');
            break;
            default:
                console.log('окккк');
}
}

let b =3;

console.log(b > 3 || b < 7); // && - и || - или
