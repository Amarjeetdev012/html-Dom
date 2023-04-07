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

// const header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #0e5ee8';

// const input = document.querySelector('input');
// input.value = 'hello world';

// const submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';
// submit.style.color = '#12d4e6';

// const item = document.querySelector('.list-group-item')
// item.style.color = '#0e1df0'

// const lastItem = document.querySelector('.list-group-item:last-child')
// lastItem.style.color = 'green'

// const secondItem = document.querySelector('.list-group-item:nth-child(2)')
// secondItem.style.color = 'coral'

// * QUERYSELECTORALL //
// class .
// id    #
// for tag or element direct name the tag or element like document.querySelector("p")

// const titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';

// const odd = document.querySelectorAll('li:nth-child(odd)');
// const even = document.querySelectorAll('li:nth-child(even)');

// for (let index = 0; index < odd.length; index++) {
//   odd[index].style.backgroundColor = '#baa22b';
//   even[index].style.backgroundColor = '#05ed98';
// }

// *TRAVERSING THE DOM //

// const itemList = document.querySelector('#items');
// parent Node
// console.log('itemList', itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#475247'
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
const itemList = document.querySelector('#items');
// console.log('itemList', itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#475247';
// console.log(itemList.parentElement.parentElement.parentElement);

// child Nodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = '#3e695c';

// first child
// console.log(itemList.firstChild);

// first element child
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.style.backgroundColor = "blue"
// itemList.firstElementChild.textContent = 'Hello'

// last child
// console.log(itemList.lastChild);
// last element child
// console.log(itemList.lastElementChild);

// next sibling
// console.log(itemList.nextSibling);
// next element Sibling
// console.log(itemList.nextElementSibling);

// previous sibling
// console.log(itemList.previousSibling);
// previous element sibling
// console.log(itemList.previousElementSibling);

// * Create Element

// create a div
// const newDiv = document.createElement('div');

// add class
// newDiv.className - 'hello';

// add id
// newDiv.id = 'hello11';

// add attribute
// newDiv.setAttribute('title', 'hello div');

// create text node
// const newDivText = document.createTextNode('hello world');

// add text to div
// newDiv.appendChild(newDivText);

// const container = document.querySelector('header .container');

// const h1 = document.querySelector('header h1');
// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1);

const button = document
  .getElementById('button')
  .addEventListener('click', buttonClick);

function buttonClick(e) {
  //   console.log('button clicked');
  //   document.getElementById('header-title').textContent = 'Changed';
  //   document.querySelector('#main').style.backgroundColor = '#303836';
  //   console.log(e);
  //   console.log(e.target);
  //   console.log(e.target.id);
  //   console.log(e.target.className);
  //   console.log(e.target.classList);
  //   const output = document.getElementById('output');
  //   output.innerHTML = `<h3> ${e.target.id} </h3>`;
  //   console.log(e.type);
  //   console.log(e.clientX, e.clientY);
//   console.log(e.offsetX);
//   console.log(e.offsetY);
}
