//定数
const hogehoge = 'ahaha';

//変数
let hoge = 'Hello World!';

//配列
let inoki = ['1', '2', '3', 'ダーー！！'];

//コメント
hoge = 'Hello World!!!!';
console.log(hoge);

//ループ分
// let index = 0;
// while (index < inoki.length) {
//   console.log(inoki[index]);
//   index++;
// };

//関数
const test = (arg1) => {
  //if / else
  if (inoki.length > arg1) {
    console.log('ボンバイエ！！');
  } else {
    console.log('ボンバ...');
  }
};

test(3);
test(5);

//オブジェクト
const obj1 = {
  color: 'pink',
  size: 'large',
  inMeth: () => {
    console.log('hello');
  }
}

console.log(obj1);
console.log(obj1.color);
console.log(obj1.inMeth());

// console.log(window.innerWidth);
// window.alert('アラート！！');
// console.log(document.getElementsByTagName('button')[0]);

//イベント
document.getElementsByTagName('button')[0].addEventListener('click', ()=> {
  window.alert('アラート！！')
})
document.getElementsByTagName('button')[1].addEventListener('click', ()=> {
  window.alert('2回目アラート！！')
})