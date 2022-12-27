// var items=document.getElementsByClassName('list-group-item');

// items[2].style.backgroundColor= 'green';

// for(let i=0;i<items.length;i++){
//     items[i].style.fontWeight= 'bold';
// }
var items=document.getElementsByClassName('list-group-item');
for(let i=0;i<items.length;i++){
    items[i].style.fontWeight= 'bold';
    items[i].style.backgroundColor= 'grey';
}

var li=document.getElementsByTagName('li');
for(let i=0;i<li.length;i++){
    li[i].style.fontWeight= 'bold';
    li[i].style.backgroundColor= 'grey';
}