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
		// li.classList[1].remove('textgrey');
		// リストの２番目以降がtextgreyから外れる
		// ===============！！！！！！ここ確認！！！！！！==============
	}

// クラスの削除
// let ul = first_ika.parentElement;
// console.log(ul);
let takolist = ul.children;
takolist[1].classList.remove('textgrey');
// takolist[1].classList.add('textblue');
// これでtakoのリストの２番目[1]のみクラスが外される

// インプットタグの入力欄の文字の取得
var input = document.querySelector('#input_name');
console.log(input.value);


function getInput(){
	var input = document.querySelector('#input_name');
	console.log(input.value);

// 編集方法
input.value = input.value + '様';
}

// イベントの登録
var text = document.querySelector('#text');
// <p>ほげ</p> が取得されている

// 要素.addEventListener(イベント名,function(){イベント時に行いたい処理});
text.addEventListener('click',function(){
	this.style.color = 'red';
	// thisは、ここで受けてる全体を指してる
});


var html = document.querySelector('#html');
html.addEventListener('mouseover',function(){
	this.style.color = 'yellow';
});
html.addEventListener('mouseleave',function(){
	this.style.color = '';
});



// 要素の追加
// 親要素の取得
let parent_text = document.querySelector('#text');

// Pタグを生成
let child_p = document.createElement('p');
// タグ内で表示される文字を設定
child_p.textContent = 'ふがこ';

//親要素に生成したpタグを追加
// 親要素.appendChild(追加したいタグの要素);
parent_text.appendChild(child_p);


// pタグを生成
let child_p_moge = document.createElement('p');
// タグ内で表示される文字を設定
child_p_moge.textContent = 'もげこ'; 
// ふがこの上にもげこを追加する
// 親要素.insertBefore(追kしたい要素,その手前に追加したい対象の要素);
parent_text.insertBefore(child_p_moge,child_p);



// 要素を色々設定できる
// 押したボタンの文字を、id=textの中に追加する
function btna_click(){

let parent_text = document.querySelector('#text');

// 追加するpタグを生成
let child_p_for_btn = document.createElement('p');
child_p_for_btn.textContent = document.querySelector('#btn-A').textContent;
// ！！！！！html のボタンAに"id=btn-A"を追加も忘れずに！！！！！
child_p_for_btn.id = 'add_id';
child_p_for_btn.style.color = 'blue';
parent_text.appendChild(child_p_for_btn);
}





// 要素の削除
// 削除したい要素.remove();
let ant = document.querySelector('#ant');
ant.remove();


// 削除したい要素が含まれている親要素.removeChild(削除したい要素);
let room = document.querySelector('#room');
// roomの一番最初の子要素を削除　　ここではこの一つ前で一番最初の要素が削除されてるので、ここでは２番目が消える
room.removeChild(room.firstElementChild);
// やもりを削除する時
room.removeChild(document.querySelector('#gecko'));














































