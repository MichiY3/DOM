// DOM とは　Document Object Model
// HTMLのタグをobject（部品）と見立てて、JavaScriptで操作できる方法のこと

// タグ名を指定して、DOM操作する方法　（<a  > タグの取得）
// getElementsByTagName
let list = document.getElementsByTagName('a');
console.log(list);
console.log(list[0]);
console.log(list[1]);
console.log(list[0].href);

// getElementsByClassName
let fuga = document.getElementsByClassName('fuga');
console.log(fuga);

for (let i = 0; i < fuga.length; i++ ){
	// fuga.length で、fugaのついたclassがいくつか分からなくても選べるようになる
	console.log(fuga[i].textContent);
}

// querySelector （単一要素の取得）#とかで探せる、class名とかid名じゃなくて、その中のどれでも
let tako = document.querySelector('#tako .ika');
console.log(tako);


// querySelectorAll （合致するすべての要素の取得　）
let ika = document.querySelectorAll('#tako .ika');
console.log(ika);

// 親要素取得方法
let first_ika = document.querySelector('.ika');
console.log('子要素の用意');
console.log(first_ika);
console.log('親要素の取得')
let ul = first_ika.parentElement;
console.log(ul);

// 子要素取得方法
console.log('親要素の用意');
let parent = document.querySelector('#hogehoge');
console.log(parent);
console.log('子要素の取得');
// console.log(parent.children);


// クラスの追加
first_ika.classList.add('textblue');

// 問題：id =hogehogeのリストの文字を、全てtextblueを追加して青に変える
// var parent = document.querySelector(#hogehoge);
// console.log(parent);
// hogehoge.classList.add('textblue');

var first_fuga = document.querySelector('.fuga');
let hogehoge = first_fuga.parentElement;
console.log(hogehoge);
hogehoge.classList.add('textblue');

// ↑ これじゃ無駄なので、正解は↓

document.querySelector('#hogehoge').classList.add('textblue');

// または

var parenthoge = document.querySelector('#hogehoge');
	for (let li of parenthoge.children){
		li.classList.add('textgrey');
	}

// クラスの削除








