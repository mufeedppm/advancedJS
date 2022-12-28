// var items=document.getElementsByClassName('list-group-item');

// items[2].style.backgroundColor= 'green';

// for(let i=0;i<items.length;i++){
//     items[i].style.fontWeight= 'bold';
// }
// var items=document.getElementsByClassName('list-group-item');
// for(let i=0;i<items.length;i++){
//     items[i].style.fontWeight= 'bold';
//     items[i].style.backgroundColor= 'grey';
// }

// var li=document.getElementsByTagName('li');
// for(let i=0;i<li.length;i++){
//     li[i].style.fontWeight= 'bold';
//     li[i].style.backgroundColor= 'grey';
// }

//QuerySelector

// var secondItem=document.querySelector('.list-group-item:nth-child(2)')
// secondItem.style.backgroundColor='green'

// var thirdItem=document.querySelector('.list-group-item:nth-child(3)')
// thirdItem.style.display='none'

// //QuerySelectorAll
// var odd=document.querySelectorAll('li:nth-child(odd)')
// for(let i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='greeen'
// }

// var list=document.querySelectorAll('li:nth-child(2)')
// list.color='green'
var itemList=document.querySelector('#items')


itemList.parentNode.style.backgroundColor='tomato';

itemList.lastElementChild.style.backgroundColor='powderblue'

itemList.lastChild.textContent='lastChild of #items was a blank space';

itemList.firstChild.textContent='firstChild of #items was a blank space';

itemList.firstElementChild.style.backgroundColor='lavender'

var title=document.querySelector('.title');

title.nextSibling.textContent='next sibling of #title was a blank space' 

title.nextElementSibling.style.border='2px solid #f4f4f4'

itemList.previousElementSibling.style.color='blue'

itemList.previousSibling.textContent='previousSibling of #items was a blank space' 

var newDiv= document.createElement('div')

newDiv.className='HEllo'

newDiv.id='HEllo'

newDiv.setAttribute('title', 'HEllo word')

newDivTxt=document.createTextNode('Hello World')

newDiv.appendChild(newDivTxt)

var newDiv2= document.createElement('div')

newDiv2.className='HEllo2'

newDiv2.id='HEllo2'

newDiv2.setAttribute('title2', 'HEllo word2')

newDiv2Txt=document.createTextNode('Hello World')
newDiv2.appendChild(newDiv2Txt)


// console.log(newDiv)

var container=document.querySelector('header .container')

var h1=document.querySelector('#header-title')

container.insertBefore(newDiv,h1)

itemList.insertBefore(newDiv2,document.querySelector('.list-group-item'))