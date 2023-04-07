// examine the document object
// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all)
// console.log(document.all[10]);
// document.all[10].textContent = 'hello'
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// //* GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// const headerTitle = document.getElementById('header-title');
// const header = document.getElementById('main-header')
// headerTitle.textContent = 'hello'
// headerTitle.innerText = 'goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>'
// headerTitle.style.borderBottom = 'solid 3px #000'
// header.style.borderBottom = 'solid 3px #000'

// * GETELEMENTBYCLASSNAME //
// const items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = '#dbeb05';

// gives error
// items.style.backgroundColor = '#426ff5';

// correct way
// for (let index = 0; index < items.length; index++) {
//     items[index].style.backgroundColor = '#118e96'
// }

// * GETELEMENTSBYTAGNAME
// const li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = '#dbeb05';

// gives error
// items.style.backgroundColor = '#426ff5';

// correct way
// for (let index = 0; index < li.length; index++) {
//   li[index].style.backgroundColor = '#118e96';
// }

// * QUERYSELECTOR //
// class .
// id    #
// for tag or element direct name the tag or element like document.querySelector("p")

const header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #0e5ee8';

const input = document.querySelector('input');
input.value = 'hello world';

const submit = document.querySelector('input[type="submit"]');
submit.value = 'SEND';
submit.style.color = '#12d4e6';
